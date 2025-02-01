let data = {
    Dialog: {
        title: "Zähler-Namen bearbeiten",
        save: 'Speichern',
        cancel: 'Abbrechen'
    },
    ShareDialog: {
        title: 'Teilen-Informationen hinzufügen',
        save: 'Speichern',
        cancel: 'Abbrechen',
        placeholder: {
            user: 'Bitte Benutzernamen eingeben',
            title: 'Bitte Teilen-Titel eingeben',
            desc: 'Bitte Teilen-Beschreibung eingeben'
        },
        label: {
            user: 'Ersteller',
            title: 'Titel',
            desc: 'Beschreibung',
            time: 'Zeit',
            operation: 'Operation'
        },
        success: 'Erfolgreich geteilt, Teilen-Link: ',
    },
    Hero: {
        tooltip: {
            delete: "Zähler löschen",
            reset: "Zähler zurücksetzen"
        },
        add: 'Neuen Zähler hinzufügen',
        share: 'Teilen',
        download: 'Herunterladen',
        comingSoon: 'Teilen-Funktion kommt bald',
        "remind": `
            Ihre Klickzähler werden automatisch im lokalen Speicher Ihres Browsers gespeichert.
            <br/ >✅ Das Aktualisieren der Seite löscht Ihre Zähler nicht.
            <br/ >❌ Das Löschen von Browserdaten oder die Verwendung des Inkognito-/Privaten Modus löscht sie.
        `
    },
    Feature: {
        description: {
            title: "📝 Kostenloses Tool: Zähler Online",
            "content": `
                Zähler Online ist ein kostenloses Online-Zählwerkzeug. Es kann für die Teilnehmerverfolgung bei Veranstaltungen, die Inventurzählung, die industrielle Schrittzählung, die Fitnesszählung, die Sportpunkteverfolgung und verschiedene andere Zwecke verwendet werden.

                <br/ ><br/ >
                Alle Zähldaten werden automatisch im lokalen Speicher des Browsers gespeichert, sodass sie auch nach einem Seitenneuladen nicht verloren gehen.<br/ >
                Beachten Sie jedoch, dass das Löschen des Browser-Caches alle Zähldaten löscht. Es wird daher empfohlen, wichtige Daten regelmäßig zu sichern.
            `
        },
        usage: {
            title: "📖 Wie man Zähler Online verwendet",
            "content": `
                Bei der Verwendung von Zähler Online können Sie auf die ➕ Plus-Schaltfläche klicken, um den Zähler um 1 zu erhöhen, und auf die ➖ Minus-Schaltfläche klicken, um den Zähler um 1 zu verringern. Wenn der Wert 0 erreicht, wird die Minus-Schaltfläche automatisch deaktiviert, um negative Zahlen zu vermeiden.
                <br/ ><br/ >
                <p>Wenn Sie mit der Maus über die Zählkarte fahren, erscheinen zwei Funktionsschaltflächen in der oberen rechten Ecke:</p>
                <ul>
                    <li>🔄 Zurücksetzen-Schaltfläche: Klicken Sie, um den aktuellen Zähler auf Null zurückzusetzen</li>
                    <li>🗑️ Löschen-Schaltfläche: Klicken Sie, um den Zähler dauerhaft zu löschen</li>
                </ul>
                <br/ >
                Klicken Sie auf den Titelbereich des Zählers, um den Zählernamen zu bearbeiten. Geben Sie den neuen Namen in das Popup-Dialogfeld ein und klicken Sie auf Speichern.<br/ >
                Die Schaltfläche "Neuen Zähler hinzufügen" am unteren Rand der Seite ermöglicht es Ihnen, mehrere Zähler gleichzeitig zu erstellen und zu verwenden.<br/ >
                <br/ >
                Die Download-Schaltfläche am unteren Rand der Seite kann alle Zählerdaten als CSV-Datei exportieren, um sie einfach zu speichern und zu teilen.<br/ >
                Sie können auch Tastenkombinationen verwenden, um die Zähler zu bedienen:<br/ >
                <ul>
                    <li>➕ Plus-Taste: Drücken Sie die "+"-Taste auf Ihrer Tastatur</li>
                    <li>➖ Minus-Taste: Drücken Sie die "-"-Taste auf Ihrer Tastatur</li>
                </ul>
            `
        },
        situation: {
            title: "📌 Anwendungsfälle für Zähler Online",
            "content": `
                <ul>
                    <li>1️⃣ Teilnehmerverfolgung: Meeting-Anwesenheit, Hochzeitsgastzählung, Klassenraum-Anwesenheitsliste</li>
                    <li>2️⃣ Inventarverwaltung: Parkplatzanzahl, Lagerbestandsaufnahme, Supermarktwarenverfolgung, Bibliotheksbuchverwaltung</li>
                    <li>3️⃣ Industrielle Zählung: Produktionslinienprozesszählung, Qualitätsprüfungsaufzeichnungen, Gerätebetriebszyklusverfolgung</li>
                    <li>4️⃣ Fitnesszählung: Liegestützanzahl, Seilspringen, Kniebeugen, Klimmzüge</li>
                    <li>5️⃣ Sportpunkteverfolgung: Basketballpunkte, Tischtennispunkte, Badminton-Spielzählung</li>
                </ul>
            `
        }
    }
}
export default data