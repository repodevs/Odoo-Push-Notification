var base_url = "";
var img = "";
openerp.pushodoo = function (session) {
    var model = new openerp.web.Model("mail.thread");
    var self = this;

    function demo_alert(view) {
        window.setInterval(function () {
            model.call("nb_notif", {context: new openerp.web.CompoundContext()}).then(function (result) {
                    notif_body = "";
                    notif_title = "";
                    base_url = result['base'];
                    var i = 0;
                    var isFirefox = typeof InstallTrigger !== 'undefined';
                    if ((result['nb'] > 0)) {
                        for (i = 0; i < result['nb']; i++) {
                            img = img.concat('&field=image_medium');
                            img = base_url.concat('/web/image?model=res.partner&id=');
                            img = img.concat(result['user_id'][i]);
                            img = img.concat('&field=image_medium')
                            base_url = base_url.concat('/mail/view?message_id=');
                            var msg_id = result['id'][i].toString();
                            base_url = base_url.concat(msg_id);
                            notif_body = result['notifs'][i].replace(/<(?:.|\n)*?>/gm, '');
                            if (!notif_body)
                                notif_body = "You have a new Notification"
                            notif_title = result['subs'][i];
                            if (notif_title == null)
                                notif_title = "ODOO 9.0 Notification";

                            Notification.requestPermission(function () {
                                if (isFirefox) {
                                    var notification = new Notification(notif_title, {
                                        body: notif_body,
                                    });
                                    notification.onclick = function (event) {
                                        event.preventDefault();
                                        window.open(base_url, '_blank');
                                    }
                                }
                                else {
                                    var notification = new Notification(notif_title, {
                                        body: notif_body,
                                        icon: img,
                                    });
                                    notification.onclick = function (event) {
                                        event.preventDefault();
                                        window.open(base_url, '_blank');
                                    }

                                }
                            });
                        }

                    }
                }
            );
        }, 10000);
    }

    openerp.web.WebClient.include({
        start: function () {
            this._super();
            demo_alert(this);
        },
    });

}
