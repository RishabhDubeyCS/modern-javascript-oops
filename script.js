class Notifier{
    send (msg){
        throw new Error("Not implemented");
    }
}
class EmailNotifier extends Notifier{
    send(msg){
        console.log(`Email sent: ${msg}`);
    }
}
class whatsAppNotifier extends Notifier {
    send (msg){
        console.log(`WhatsApp message sent: ${msg}`);
    }
}

function notifyUser (notifier , msg){
    notifier.send(msg);
}


notifyUser(new EmailNotifier(), "Hello");
notifyUser(new whatsAppNotifier(), "Hello");