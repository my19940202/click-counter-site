let data = {
    Dialog: {
        title: "Edit counter's name",
        save: 'save',
        cancel: 'cancel'
    },
    ShareDialog: {
        title: 'Add Sharing Information',
        save: 'Save',
        cancel: 'Cancel',
        placeholder: {
            user: 'Please enter username',
            title: 'Please enter sharing title',
            desc: 'Please enter sharing description'
        },
        label: {
            user: 'creator',
            title: 'title',
            desc: 'description',
            time: 'time',
            operation: 'operation'
        }
    },
    Hero: {
        tooltip: {
            delete: "delete counter",
            reset: "reset counter"
        },
        add: 'Add New Counter',
        share: 'Share',
        download: 'Download',
        comingSoon: 'Share feature is coming soon',
        "remind": `
            Your click counters are automatically saved in your browser's local storage.
            <br/ >✅ Page refresh won't erase your counters.
            <br/ >❌ Clearing browser data or using incognito/private mode will delete them.
        `
    },
    Feature: {
        description: {
            title: "📝 Free Tool: Click Counter Online",
            "content": `
                Click Counter Online is a free online counting tool. It can be used for event attendance tracking, inventory counting, industrial step counting, fitness counting, sports score tracking, and various other purposes.

                <br/ ><br/ >
                All counting data is automatically saved in the browser's local storage, so it won't be lost even if you refresh the page.<br/ >
                However, please note that clearing browser cache will delete all counting data, so it's recommended to regularly back up important data.
            `
        },
        usage: {
            title: "📖 How to use Click Counter Online",
            "content": `
                When using Click Counter Online, you can click the ➕ plus button to increment the counter by 1, and click the ➖ minus button to decrement the counter by 1. When the value reaches 0, the minus button will be automatically disabled to prevent negative numbers.
                <br/ ><br/ >
                <p>When hovering over the counter card, two function buttons will appear in the top right corner:</p>
                <ul>
                    <li>🔄 Reset button: Click to reset the current counter to zero</li>
                    <li>🗑️ Delete button: Click to permanently delete the counter</li>
                </ul>
                <br/ >
                Click on the counter title area to edit the counter name. Enter the new name in the pop-up dialog and click save.<br/ >
                The "Add New Counter" button at the bottom of the page allows you to create and use multiple counters simultaneously.<br/ >
                <br/ >
                The download button at the bottom of the page can export all counter data as a CSV file for easy saving and sharing.<br/ >
                You can also use keyboard shortcuts to operate the counters:<br/ >
                <ul>
                    <li>➕ Plus key: Press the "+" key on your keyboard</li>
                    <li>➖ Minus key: Press the "-" key on your keyboard</li>
                </ul>
            `
        },
        situation: {
            title: "📌 Use Cases for Click Counter Online",
            "content": `
                <ul>
                    <li>1️⃣ Attendance tracking: Meeting check-ins, wedding guest counts, classroom roll calls</li>
                    <li>2️⃣ Inventory management: Parking space counts, warehouse stocktaking, supermarket goods tracking, library book management</li>
                    <li>3️⃣ Industrial counting: Production line process counting, quality inspection records, equipment operation cycle tracking</li>
                    <li>4️⃣ Fitness counting: Push-up counts, jump rope counts, squat counts, pull-up counts</li>
                    <li>5️⃣ Sports score tracking: Basketball scores, ping pong scores, badminton game counts</li>
                </ul>
            `
        }
    }
}

export default data