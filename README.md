# Progetto React: BoolFlix - Webapp di ricerca film e serie TV

## Descrizione generale

BoolFlix è una webapp React che simula la logica di piattaforme di streaming come Netflix, permettendo agli utenti di cercare film e serie TV tramite una chiamata a un’API esterna (The Movie Database - TMDb). L’app utilizza la TMDb API per recuperare dati aggiornati e pertinenti sulle produzioni multimediali.

L’utente può inserire nella searchbar il nome (o parte del nome) di un film o di una serie TV; dopo l’invio, l’app mostra una lista di risultati con informazioni dettagliate quali titolo, titolo originale, lingua (rappresentata con la bandiera del paese), voto (convertito in stelle da 1 a 5) e copertina.

## Funzionalità principali

- **Ricerca tramite API TMDb**: ricerca film e serie tv filtrando i risultati in base alla query dell’utente.
- **Visualizzazione dettagliata**: mostra titolo, titolo originale, bandiera della lingua, voto convertito in stelle, e copertina (poster).
- **Gestione immagini**: costruzione dinamica degli URL per le immagini usando il path restituito dall’API e le dimensioni desiderate.
- **Interfaccia dinamica**: cards con immagine di sfondo che al passaggio del mouse mostrano informazioni aggiuntive come la descrizione.
- **Global state management**: gestione centralizzata dello stato dell’app per una migliore organizzazione dei dati.
