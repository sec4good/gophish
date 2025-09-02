#!/bin/bash

# Konfigurace Twilio
ACCOUNT_SID=""          # Nahraď svým Account SID
AUTH_TOKEN=""                 # Nahraď svým Auth Token
FROM_NUMBER=""                   # Tvůj Twilio telefonní číslo

# Cesta k CSV souboru
CSV_FILE="campaign_data.csv"
# Definice log souboru
LOG_FILE="$(date '+%Y-%m-%d-%H-%M-%S')-sms_send.log"

# Ověření existence CSV souboru
if [[ ! -f "$CSV_FILE" ]]; then
    echo "CSV soubor $CSV_FILE nebyl nalezen!"
    exit 1
fi

# Čtení CSV souboru řádek po řádku
# Předpokládáme, že první řádek je hlavička
tail -n +2 "$CSV_FILE" | while IFS=',' read -r Email PhoneNumber TrackingURL
do
    # Odstranění případných mezer a uvozovek
    Email=$(echo "$Email" | tr -d ' "')
    PhoneNumber=$(echo "$PhoneNumber" | tr -d ' "')
    TrackingURL=$(echo "$TrackingURL" | tr -d ' "')

    # Vytvoření těla zprávy
    MESSAGE="Z účtu Microsoft 365 $Email bylo odstraněno telefonní číslo pro obnovení hesla: $PhoneNumber. Nebyli jste to Vy? Proveďte neprodleně změnu Vašeho hesla na https://pass365-profinit.eu/?session_id=$TrackingURL"

    # Odeslání SMS pomocí curl
    RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "https://api.twilio.com/2010-04-01/Accounts/$ACCOUNT_SID/Messages.json" \
        -X POST \
        --data-urlencode "To=$PhoneNumber" \
        --data-urlencode "From=$FROM_NUMBER" \
        --data-urlencode "Body=$MESSAGE" \
        -u "$ACCOUNT_SID:$AUTH_TOKEN")

    # Kontrola odpovědi
    if [ "$RESPONSE" -eq 201 ]; then
        echo "$(date): SMS odeslána na $PhoneNumber úspěšně." >> "$LOG_FILE"
    else
        echo "$(date): Chyba při odesílání SMS na $PhoneNumber. Status kód: $RESPONSE" >> "$LOG_FILE"
    fi

    # Volitelně: Přidat malý delay, aby se předešlo překročení limitů
    sleep 1
done
