var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?95412';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
"enabled":true,
"chatButtonSetting":{
    "backgroundColor":"#854fee",
    "ctaText":"Chat with us",
    "borderRadius":"25",
    "marginLeft": "25",
    "marginRight": "20",
    "marginBottom": "70",
    "ctaIconWATI":true,
    "position":"right"
},
"brandSetting":{
    "brandName":"Abdul Ahad",
    "brandSubTitle":"undefined",
    "brandImg":"https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    "welcomeText":"Hi there!\nHow can I help you?",
    "messageText":"{{page_title}}Hello, %0A I have a question about {{page_link}}",
    "backgroundColor":"#854fee",
    "ctaText":"Chat with us",
    "borderRadius":"25",
    "autoShow":false,
    "phoneNumber":"923158359722"
}
};
s.onload = function() {
    CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);