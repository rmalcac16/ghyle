jQuery(document).ready(function ($) {
    $('#WABoton').floatingWhatsApp({
        phone: '+51936036606',
        popupMessage: 'Hola 👋 ¿Cómo podemos ayudarte?',
        message: 'Hola, estoy interesado en sus servicios...',
        showPopup: true,
        headerTitle: 'WhatsApp Chat',
        headerColor: '#25D366',
        buttonImage:
            '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />',
        size: '64px',
        position: 'left',
        avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        avatarName: 'Servicios Generales GH&LE',
        avatarRole: 'Soporte',
        zIndex: '99999',
    });
});
