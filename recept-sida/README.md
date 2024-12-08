Konceptmässigt är det väldigt simpelt, kör vue router att växla sidor vid knapptryck. Samtidigt hämtas json. data från ett externt api som jag sedan visar upp.
    Favoritfunktionen kopierar bara rent av ett specifikt recepts olika komponenter till ett local.storage som jag har access till med "set- och get.localStorage".


Gällande användandet av AI i detta "projekt" så har jag mest bara frågat ChatGPT om struktur samt exempel på api:er som involverar recept och dylikt.
Men även för kod som liknar följande: "const recipes = ref<Array<any>>([])". Detta är för att jag har svårt att tolka ting som ger eller ges referenser i en annan fil pågrund av glömska.
    Psuedokod hade varit optimalt, men det hade varit redundant pågrund av dess nestlade kod samt att problemet uppstår innan koden skrivs och inte efter. 
Kort sagt, använder AI för att veta vad exakt som fungerar var.

Kollade även med ChatGPT angående exempel på hur och när följande kan användas:
"Textinterpolering {{ exempel }}
Villkorlig rendering (v-if)
Listrendering (v-for)
Händelser (v-on eller dess kortform)
Använda computed
v-model
minst två webbsidor med Vue Router
minst en prop ska skickas ned till komponent 
Props ska vara typsäkra. Exempel, ”type: number”
Använda ref() eller data()... för att hantera reactive state
Finnas Lifeycle hook (mounted)
Webbanrop ska göras med fetch eller bibliotek för att hämta och visa data"