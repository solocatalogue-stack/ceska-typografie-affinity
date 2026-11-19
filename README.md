# Česká typografie pro Affinity

**TypoSkript pro Affinity:** jednoznakové předložky, nedělitelné mezery a česká typografie v novém Affinity od Canvy (aplikace, která spojila Publisher, Designer a Photo).

Skript pro nové [Affinity od Canvy](https://www.affinity.studio/), který jedním kliknutím opraví českou hladkou sazbu. Funguje v sazbě (Layout), ve vektorech i v pixelech, protože Affinity má skriptování společné pro celou aplikaci.

**Inspirace:** skript vznikl podle vzoru [TypoSkriptu](https://typoskript.cz/) Františka Erbena, oblíbeného nástroje pro opravu české sazby v Adobe InDesign (a jeho předchůdce Viktor Čistič). TypoSkript pro InDesign najdete na [typoskript.erben.work](https://typoskript.erben.work/), [aktuální verzi ke stažení](https://typoskript.erben.work/aktualni-verze/) a [nápovědu](https://typoskript.erben.work/napoveda/) tamtéž.

**Celý kód je napsaný znovu, od nuly.** Z TypoSkriptu se nepřevzal ani nepřeložil žádný kód. Pravidla vycházejí z normy ČSN 01 6910 a z běžných zásad české typografie. Tento projekt není s TypoSkriptem ani s jeho autorem nijak spojený.

## Pro jakou verzi Affinity

- **Funguje v:** Affinity od Canvy (jedna aplikace, zdarma), **verze 3.3 a novější** (od září 2026). Skriptování v Affinity přibylo právě ve verzi 3.3.
- **Nefunguje v:** starších samostatných aplikacích Affinity Publisher, Designer a Photo (verze 1 a 2). Ty skripty nepodporují.
- Číslo **1.0** je verze tohoto skriptu, ne verze Affinity.

## Co skript opravuje

Každou skupinu pravidel lze v dialogu zapnout nebo vypnout.

- **Jednopísmenné předložky a spojky:** nedělitelná mezera za v, k, s, z, o, u, a, i (aby nezůstaly na konci řádku).
- **Čísla, jednotky a měny:** 250 Kč, 10 %, 25 kg, 1 000 000, € 50, § 5, č. 12, str. 10.
- **Data:** 1.1.2025 → 1. 1. 2025, 5. ledna (den se nerozdělí od měsíce).
- **Akademické tituly a hodnosti:** Ing. Jan Novák, prof. Ing. arch., Novák, Ph.D., kpt. Svoboda.
- **Iniciály:** J. R. R. Tolkien.
- **Zkratky:** s.r.o. → s. r. o., a.s. → a. s., č. p., z. s., Ph. D. → Ph.D.
- **Uvozovky:** "text" a “text” → „text“, jednoduché ‚text‘. Apostrofy (It's) zůstanou.
- **Pomlčky:** slovo - slovo → slovo – slovo, 1999-2001 → 1999–2001, 10 - 15 → 10–15.
- **Výpustka:** ... → …
- **Nadbytečné mezery:** zdvojené mezery, mezery na začátku a konci odstavce, mezery před tečkou, čárkou a závorkou.
- **Násobení:** 1920 x 1080 → 1920 × 1080.
- **Anglické číslovky:** 1 st → 1st.
- **E-maily a webové adresy:** nastaví jim „Nedělit“, aby se nerozdělily na dva řádky.
- Volitelně: nejdřív převést všechny mezery na standardní, odstranit nadbytečné tabulátory.

Skript mění jen opravované znaky, takže formátování textu (písmo, velikost, barva, styly) zůstává. Celou opravu vrátíte jedním Cmd+Z. Pole, kotvy a čísla stránek nechává na pokoji. Tabulky zatím přeskakuje.

## Instalace

Skript se nevkládá do Affinity celý. Uložíte ho jako soubor a Affinity ho načítá jedním řádkem. Když pak vyjde nová verze, stačí soubor přepsat.

1. Stáhněte [`CeskaTypografie.js`](CeskaTypografie.js) a uložte ho do vlastní složky, třeba **Dokumenty › Affinity skripty**.
2. V Affinity otevřete **Affinity › Settings › Scripting**. Zapněte **Enable Affinity Scripting** a dole u **File System Access** klikněte na **Add** a vyberte tu složku.
3. Otevřete **Window › Scripting › Script Editor** a klikněte na **New Script**.
4. Vložte do editoru tento jeden řádek a cestu nahraďte cestou ke svému souboru:

   ```
   require('/Users/vase-jmeno/Documents/Affinity skripty/CeskaTypografie.js').main();
   ```

   Přesnou cestu zjistíte ve Finderu: klikněte na soubor pravým tlačítkem, podržte klávesu Option a zvolte **Zkopírovat „CeskaTypografie.js“ jako cestu**.
5. Klikněte na ozubené kolečko vedle tlačítka **Run** a zaškrtněte **File System**. Bez toho skript soubor nenačte a nic se nestane.
6. Dejte **Save As** a pojmenujte skript třeba „Česká typografie“. Objeví se v panelu **Scripts Library**.

## Použití

1. Vyberte textové rámečky, které chcete opravit. Pokud nevyberete nic, opraví se celý dokument.
2. V panelu **Scripts Library** klikněte na skript pravým tlačítkem a zvolte **Run Script**.
3. V dialogu zvolte rozsah (**Celý dokument** nebo **Vybrané texty**) a pravidla a potvrďte **OK**.
4. Skript nakonec napíše, kolik míst opravil. Všechno vrátíte jedním Cmd+Z.

Žádný automat nenahradí typografa, proto si prosím výsledek projděte.

**Když se nic nestane:** otevřete v panelu skriptů kartu **Running Scripts › View Log**. Hláška „Failed to resolve module“ znamená, že chybí složka v bodě 2 nebo zaškrtnutí **File System** v bodě 5.

## Jak navrhnout úpravu

Projekt je otevřený a uvítá pomoc.

- **Našli jste chybnou opravu nebo chybějící pravidlo?** Založte [issue](../../issues/new/choose) a napište, jaký text jste měli, co z něj skript udělal a co by správně mělo vzniknout.
- **Umíte JavaScript?** Pošlete pull request. Pravidla jsou ve funkci `fixParagraph`. Ke každé změně prosím přidejte testovací větu do `tests/test.js`.

Testy spustíte (s Node.js):

```
node tests/test.js
```

## English

A script for the new Affinity by Canva, version 3.3 or later (it does not work in the old Affinity V1/V2 apps, which have no scripting), that fixes Czech typography in one click: non-breaking spaces after one-letter prepositions and conjunctions, between numbers and units, in dates, titles, initials and abbreviations; Czech quotes; dashes; ellipsis; extra spaces. It is inspired by [TypoSkript](https://typoskript.cz/) for Adobe InDesign by František Erben, but every line was written from scratch; no TypoSkript code was used. Install: save the file, allow its folder in Settings › Scripting › File System Access, create a new script with the single line `require('/full/path/CeskaTypografie.js').main();`, tick **File System** in the gear menu next to Run, save it, then run it from the Scripts Library (right-click › Run Script). Issues and pull requests are welcome.

## Licence

[GNU GPL v3](LICENSE) © 2026 Matěj Moravec. Skript můžete volně používat, upravovat a šířit; upravené verze musí zůstat otevřené pod stejnou licencí. · [matejmoravec.com](https://matejmoravec.com)
