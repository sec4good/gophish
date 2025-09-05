# V Tomto adresáři jsou uloženy soubory, na které se lze odkazovat ze šablon použitých v gophish kamapních 

V adresáři **`sec4good/`** je uložen katalog phishingových kampaní vytvořených v roce 2025.  
Kampaně připravila Jitka Marešová a každá obsahuje:

- **HTML šablonu pro landing page**  
- **HTML šablonu pro e-mail**  
- statické soubory (obrázky, styly, loga) ve složce

## ⚙️ Použití v Gophish

1. **Landing page**  
   - otevřít v administraci Gophish → *Landing Pages*  
   - vložit obsah HTML šablony

2. **E-mail template**  
   - otevřít v administraci Gophish → *Email Templates*  
   - vložit obsah e-mailové šablony

3. **Statické soubory**  
   - v HTML odkazovat přes `/static/<filename>`

## ✅ Před spuštěním kampaně

- zkontrolovat všechny odkazy v HTML (landing page i e-mail)  
- ověřit funkčnost obrázků a stylesheetů (`/static/<filename>`)  
- otestovat přesměrování a funkci formuláře v testovacím prostředí  