let ricette = [
    {
        nome: 'pancakes soffici',
        Ingredienti: ["Farina 00", "latte", "uova", "zucchero", "lievito per dolci", "burro fuso", "sale"],
        url: "https://example.com/pancakes-soffici",
    },
    {
        nome: "Uova strapazzate con avocado",
        Ingredienti: ["Uova", "avocado maturo", "olio extravergine di oliva", "sale", "pepe", "pane integrale tostato"],
        url: "https://example.com/uova-strapazzate-avocado",
    },
    {
        nome: "Smoothie ai frutti di bosco",
        Ingredienti: ["Frutti di bosco misti", "yogurt greco", "miele", "semi di chia"],
        url: "https://example.com/smoothie-frutti-di-bosco"
    },
    {
        nome: "Croissant fatti in casa",
        Ingredienti: ["Farina manitoba", "burro", "latte", "zucchero", "lievito di birra"],
        url: "https://example.com/croissant-fatti-in-casa",
    },
    {
        nome: "Muffin ai mirtilli",
        Ingredienti: ["Farina", "zucchero", "mirtilli freschi", "latte", "burro", "uova", "lievito per dolci", "vaniglia"],
        url: "https://example.com/muffin-ai-mirtilli",
    },

    {
        nome: 'Pasta al pesto di basilico',
        Ingredienti: ["Pasta", "basilico fresco", "pinoli", "parmigiano", "pecorino", "aglio", "olio extravergine di oliva", "sale"],
        url: "https://example.com/pasta-al-pesto-di-basilico",
    },
    {
        nome: "Insalata di pollo e avocado",
        Ingredienti: ["Petto di pollo grigliato", "avocado maturo", "pomodorini", "insalata mista", "olio d'oliva", "succo di limone", "sale", "pepe"],
        url: "https://example.com/risotto-funghi-porcini",
    },
    {
        nome: "Lasagne alla bolognese",
        Ingredienti: ["Pasta per lasagne", "ragù alla bolognese", "besciamella", "parmigiano grattugiato", "mozzarella"],
        url: "https://example.com/lasagne-bolognese",
    },
    {
        nome: "Filetto di salmone al forno",
        Ingredienti: ["Filetto di salmone", "limone", "olio extravergine di oliva", "aglio", "rosmarino", "sale", "pepe"],
        url: "https://example.com/Filetto-di-salmone-al-forno",
    },
    {
        nome: "Polpette al sugoi",
        Ingredienti: ["Carne macinata di manzo", "pane raffermo", "uovo", "parmigiano", "prezzemolo", "aglio", "salsa di pomodoro", "olio d'oliva", "sale", "pepe"],
        url: "https://example.com/polpette-al-sugo",
    },
    {
        nome: "Pollo al curry con riso basmati",
        Ingredienti: ["Petto di pollo", "curry in polvere", "latte di cocco", "cipolla", "riso basmati", "olio di semi", "sale"],
        url: "https://example.com/pollo-curry-riso-basmati"
    },
    {
        nome: "Zuppa di lenticchie",
        Ingredienti: ["Lenticchie", "carote", "sedano", "cipolla", "pomodori pelati", "brodo vegetale", "olio extravergine di oliva", "sale", "pepe"],
        url: "https://example.com/zuppa-lenticchie"
    },
    {
        nome: "Branzino al cartoccio",
        Ingredienti: ["Filetti di branzino", "limone", "aglio", "olio extravergine di oliva", "rosmarino", "sale", "pepe"],
        url: "https://example.com/branzino-al-cartoccio"
    },
    {
        nome: "Quinoa con verdure grigliate",
        Ingredienti: ["Quinoa", "zucchine", "peperoni", "melanzane", "olio extravergine di oliva", "sale", "pepe"],
        url: "https://example.com/quinoa-verdure-grigliate"
    },
    {
        nome: "Spiedini di carne alla griglia",
        Ingredienti: ["Carne di manzo", "carne di pollo", "peperoni", "cipolle", "olio extravergine di oliva", "rosmarino", "sale", "pepe"],
        url: "https://example.com/spiedini-carne-griglia"
    }
]

function cercaRicette(ricette, parola) {
    let parolaChiave = parola.toLowerCase();
    let risultati = ricette.filter(ricetta =>
        ricetta.nome.toLowerCase().includes(parolaChiave) ||
        ricetta.Ingredienti.some(ingrediente => ingrediente.toLowerCase().includes(parolaChiave))
    );

    if (risultati.length === 0) {
        document.getElementById("StampaRicettaTrovata").innerHTML = "Non è stata trovata nessuna ricetta";
    } else {
        visualizzaRisultati(risultati);
    }
}

function visualizzaRisultati(risultati) {
    let contenitore = document.getElementById("StampaRicettaTrovata");
    contenitore.innerHTML = "";

    let risultatoHTML = "";
    risultati.forEach(ricetta => {
        risultatoHTML += `
        <div>
            <p>${ricetta.nome}</a></p>
            <button onclick='aggiungiAllaListaSpesa(${JSON.stringify(ricetta.Ingredienti)})'>Aggiungi alla lista spesa</button>
        </div>
        `;
    });
    contenitore.innerHTML = risultatoHTML;
}

function aggiungiAllaListaSpesa(ingredienti) {
    let listaSpesa = document.getElementById("listaSpesa");
    listaSpesa.innerHTML = "";

    ingredienti.forEach(ingrediente => {
        let listItem = document.createElement('li');
        listItem.innerHTML = ingrediente;
        listaSpesa.appendChild(listItem);
    });
}

function Timer() {
    let minutes = document.getElementById('tempoCottura').value;
    let time = minutes * 60;
    let timerDisplay = document.getElementById('timer-display');

    timerInterval = setInterval(() => {
        let minutesLeft = Math.floor(time / 60);
        let secondsLeft = time % 60;
        timerDisplay.innerHTML = `${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;
        time--;

        if (time < 0) {
            clearInterval(timerInterval);
            alert('Timer finito!');
        }
    }, 1000);
}


document.getElementById("buttoneCercaIngredienti").addEventListener("click", () => {
    let parola = document.getElementById("inputCercaIngredienti").value;
    cercaRicette(ricette, parola);
});

document.getElementById("bottoneCottura").addEventListener("click", () => {
    let tempo = document.getElementById("tempoCottura").value;
    Timer();
})

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registrato con successo.'))
        .catch(error => console.log('Service Worker registrazione fallita:', error));
}