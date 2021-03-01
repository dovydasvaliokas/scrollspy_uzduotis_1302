function paspaudusSandelioTaba(taboId)
{
    var tabai = document.getElementsByClassName("content-tab");
    var keiciamasTab = document.getElementById(taboId);
    for (let i = 0; i < tabai.length; i++)
    {
        tabai[i].style.display = "none";
    }

    keiciamasTab.style.display = "initial";
}

function paspaudusPaslaugosTaba(taboId)
{
    var keiciamasKainarastis = document.getElementById(taboId);
    var paslaugos = document.getElementById("paslauguFlexbox");

    paslaugos.style.display = "none";
    keiciamasKainarastis.style.display = "block";
}


function grazintiPaslaugas()
{
    var paslaugos = document.getElementById("paslauguFlexbox");
    paslaugos.style.display = "flex";

    var kainarasciai = document.getElementsByClassName("kainarastis");
    for (let i = 0; i < kainarasciai.length; i++)
    {
        kainarasciai[i].style.display = "none";
    }

}