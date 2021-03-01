let haftaraqami = 1;

const hafta1 = document.getElementById("hafta1");
const hafta2 = document.getElementById("hafta2");
const hafta3 = document.getElementById("hafta3");
const hafta4 = document.getElementById("hafta4");
const hafta5 = document.getElementById("hafta5");
const hafta6 = document.getElementById("hafta6");
const hafta7 = document.getElementById("hafta7");
const hafta8 = document.getElementById("hafta8");
const hafta9 = document.getElementById("hafta9");
const hafta10 = document.getElementById("hafta10");


const hafta1natijalari = `
<table>
    <tr>
        <td class="td-urin">O'rin:</td>
        <td class="td-FISH">Ism Familya:</td>
        <div id="hafta-1-masalalar">
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/1-masala/">1-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/2-masala/">2-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/3-masala/">3-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/4-masala/">4-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/5-masala/">5-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/6-masala/">6-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/7-masala/">7-masala</a></td>
        </div>
        <td class="td-result">Jami:</td>
    </tr>
    <tr>
        <td class="td-urin">1</td>
        <td class="td-FISH">Ulasheva Mashxura</td>
        <div id="hafta-1-UlashevaMashhura">
            <td class="td-box" onclick="UlashevaMashhuramasala1()"><span id="UlashevaMashhuramasala1bali">9</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="UlashevaMashhuramasala3()"><span id="UlashevaMashhuramasala3bali">3</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala4()"><span id="UlashevaMashhuramasala4bali">2</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala5()"><span id="UlashevaMashhuramasala5bali">3</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala6()"><span id="UlashevaMashhuramasala6bali">1</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala7()"><span id="UlashevaMashhuramasala7bali">2</span>-ball</td>
        </div>
        <td class="td-result">191-ball</td>
    </tr>
    <tr>
        <td class="td-urin">2</td>
        <td class="td-FISH">Abduqodirova Dilshoda</td>
        <div class="hafta-1-AbduqodirovaDilshoda">
            <td class="td-box" onclick="AbduqodirovaDilshodamasala1()"><span id="AbduqodirovaDilshodamasala1bali">7</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala2()"><span id="AbduqodirovaDilshodamasala2bali">6</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala4()"><span id="AbduqodirovaDilshodamasala4bali">9</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">145-ball</td>
    </tr>
    <tr>
        <td class="td-urin">3</td>
        <td class="td-FISH">Qo'chqorov Abulqosim</td>
        <div class="hafta-1-QuchqorovAbulqosim">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">121-ball</td>
    </tr>
    <tr>
        <td class="td-urin">4</td>
        <td class="td-FISH">Yangiboyev Kamol</td>
        <div id="hafta-1-YangiboyevKamol">
            <td class="td-box" onclick="YangiboyevKamolmasala1()"><span id="YangiboyevKamolmasala1bali">9</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">69-ball</td>
    </tr>
    <tr>
        <td class="td-urin">5</td>
        <td class="td-FISH">Barotov Abbos</td>
        <div id="hafta-1">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">43-ball</td>
    </tr>
    <tr>
    <td class="td-urin">6</td>
    <td class="td-FISH">Ergashev Qayumjon</td>
    <div class="hafta-6-ErgashevQayumjon">
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">42-ball</td>
</tr>
<tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div class="hafta-1-SamatovaGulmira">
            <td class="td-box" onclick="SamatovaGulmiramasala1()"><span id="SamatovaGulmiramasala1bali">8</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
        <td class="td-urin">8</td>
        <td class="td-FISH">Usmonov Azimjon</td>
        <div class="hafta-1-UsmonovAzimjon">
            <td class="td-box" onclick="UsmonovAzimjonmasala1()"><span id="UsmonovAzimjonmasala1bali">9</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">9-ball</td>
    </tr>
    <tr>
        <td class="td-urin">9</td>
        <td class="td-FISH">Mamatqulov Fathulla</td>
        <div class="hafta-1-MamatqulovFathulla">
            <td class="td-box" onclick="MamatqulovFathullamasala1()"><span id="MamatqulovFathullamasala1bali">7</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">7-ball</td>
    </tr>
    <tr>
        <td class="td-box">-</td>
        <td class="td-box">-</td>
        <div id="hafta-1-USER">
            <td class="td-box" onclick="USERmasala1()">USER</td>
            <td class="td-box" onclick="USERmasala2()">USER</td>
            <td class="td-box" onclick="USERmasala3()">USER</td>
            <td class="td-box" onclick="USERmasala4()">USER</td>
            <td class="td-box" onclick="USERmasala5()">USER</td>
            <td class="td-box" onclick="USERmasala6()">USER</td>
            <td class="td-box" onclick="USERmasala7()">USER</td>
        </div>
    </tr>
    <tr id="fantamas">
        <td>000000000</td>
        <td>000000000000000000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>000000000</td>
    </tr>
    <tr>
        <td onclick="orqaga()" class="d-none">&#8592;</td>
        <td colspan="9" style="color: #000; cursor: default;">1-hafta natijalari</td>
        <td onclick="oldinga()">&#8594;</td>
    </tr>
</table>
`;
const hafta2natijalari = `
<table>
    <tr>
        <td class="td-urin">O'rin:</td>
        <td class="td-FISH">Ism Familya:</td>
        <div id="hafta-2-masalalar">
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/8-masala/">8-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/9-masala/">9-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/10-masala/">10-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/11-masala/">11-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/12-masala/">12-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/13-masala/">13-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/14-masala/">14-masala</a></td>
        </div>
        <td class="td-result">Jami:</td>
    </tr>
    <tr>
        <td class="td-urin">1</td>
        <td class="td-FISH">Ulasheva Mashxura</td>
        <div id="hafta-2-UlashevaMashhura">
            <td class="td-box" onclick="UlashevaMashhuramasala8()"><span id="UlashevaMashhuramasala8bali">10</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala9()"><span id="UlashevaMashhuramasala9bali">10</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala10()"><span id="UlashevaMashhuramasala10bali">10</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala11()"><span id="UlashevaMashhuramasala11bali">10</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala12()"><span id="UlashevaMashhuramasala12bali">4</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala13()"><span id="UlashevaMashhuramasala13bali">1</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala14()"><span id="UlashevaMashhuramasala14bali">3</span>-ball</td>
        </div>
        <td class="td-result">191-ball</td>
    </tr>
    <tr>
        <td class="td-urin">2</td>
        <td class="td-FISH">Abduqodirova Dilshoda</td>
        <div id="hafta-2-AbduqodirovaDilshoda">
            <td class="td-box" onclick="AbduqodirovaDilshodamasala8()"><span id="AbduqodirovaDilshodamasala8bali">7</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala9()"><span id="AbduqodirovaDilshodamasala9bali">9</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala10()"><span id="AbduqodirovaDilshodamasala10bali">10</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala11()"><span id="AbduqodirovaDilshodamasala11bali">10</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala12()"><span id="AbduqodirovaDilshodamasala12bali">6</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">145-ball</td>
    </tr>
    <tr>
        <td class="td-urin">3</td>
        <td class="td-FISH">Qo'chqorov Abulqosim</td>
        <div id="hafta-2-QuchqorovAbulqosim">
            <td class="td-box" onclick="QuchqorovAbulqosimmasala8()"><span id="QuchqorovAbulqosimmasala8bali">10</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala9()"><span id="QuchqorovAbulqosimmasala9bali">10</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala10()"><span id="QuchqorovAbulqosimmasala10bali">10</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala11()"><span id="QuchqorovAbulqosimmasala11bali">10</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala12()"><span id="QuchqorovAbulqosimmasala12bali">10</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala14()"><span id="QuchqorovAbulqosimmasala14bali">3</span>-ball</td>
        </div>
        <td class="td-result">121-ball</td>
    </tr>
    <tr>
        <td class="td-urin">4</td>
        <td class="td-FISH">Yangiboyev Kamol</td>
        <div id="hafta-2-YangiboyevKamol">
            <td class="td-box" onclick="YangiboyevKamolmasala8()"><span id="YangiboyevKamolmasala1bali">7</span>-ball</td>
            <td class="td-box" onclick="YangiboyevKamolmasala9()"><span id="YangiboyevKamolmasala1bali">9</span>-ball</td>
            <td class="td-box" onclick="YangiboyevKamolmasala10()"><span id="YangiboyevKamolmasala1bali">4</span>-ball</td>
            <td class="td-box" onclick="YangiboyevKamolmasala11()"><span id="YangiboyevKamolmasala1bali">10</span>-ball</td>
            <td class="td-box" onclick="YangiboyevKamolmasala12()"><span id="YangiboyevKamolmasala1bali">10</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">69-ball</td>
    </tr>
    <tr>
        <td class="td-urin">5</td>
        <td class="td-FISH">Barotov Abbos</td>
        <div id="hafta-2-BarotovAbbos">
            <td class="td-box" onclick="BarotovAbbosmasala8()"><span id="BarotovAbbosmasala8bali">5</span>-ball</td>
            <td class="td-box" onclick="BarotovAbbosmasala9()"><span id="BarotovAbbosmasala9bali">9</span>-ball</td>
            <td class="td-box" onclick="BarotovAbbosmasala10()"><span id="BarotovAbbosmasala10bali">10</span>-ball</td>
            <td class="td-box" onclick="BarotovAbbosmasala11()"><span id="BarotovAbbosmasala11bali">7</span>-ball</td>
            <td class="td-box" onclick="BarotovAbbosmasala12()"><span id="BarotovAbbosmasala12bali">9</span>-ball</td>
            <td class="td-box" onclick="BarotovAbbosmasala13()"><span id="BarotovAbbosmasala13bali">1</span>-ball</td>
            <td class="td-box" onclick="BarotovAbbosmasala14()"><span id="BarotovAbbosmasala14bali">2</span>-ball</td>
        </div>
        <td class="td-result">43-ball</td>
    </tr>
    <tr>
    <td class="td-urin">6</td>
    <td class="td-FISH">Ergashev Qayumjon</td>
    <div class="hafta-6-ErgashevQayumjon">
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">42-ball</td>
</tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div id="hafta-2-SamatovaGulmira">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
    <tr>
    <td class="td-urin">8</td>
    <td class="td-FISH">Usmonov Azimjon</td>
    <div id="hafta-2-UsmonovAzimjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">9-ball</td>
</tr>
<tr>
        <td class="td-urin">9</td>
        <td class="td-FISH">Mamatqulov Fathulla</td>
        <div id="hafta-2-MamatqulovFathulla">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">7-ball</td>
    </tr>
    <tr>
        <td class="td-box">-</td>
        <td class="td-box">-</td>
        <div id="hafta-2-USER">
            <td class="td-box" onclick="USERmasala8()"></td>
            <td class="td-box" onclick="USERmasala9()"></td>
            <td class="td-box" onclick="USERmasala10()"></td>
            <td class="td-box" onclick="USERmasala11()"></td>
            <td class="td-box" onclick="USERmasala12()"></td>
            <td class="td-box" onclick="USERmasala13()">USER</td>
            <td class="td-box" onclick="USERmasala14()">USER</td>
        </div>
    </tr>
    <tr id="fantamas">
        <td>000000000</td>
        <td>000000000000000000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>000000000</td>
    </tr>
    <tr>
        <td onclick="orqaga()">&#8592;</td>
        <td colspan="8" style="color: #000; cursor: default;">2-hafta natijalari</td>
        <td onclick="oldinga()">&#8594;</td>
    </tr>
    </teble>
`;
const hafta3natijalari = `
<table>
    <tr>
        <td class="td-urin">O'rin:</td>
        <td class="td-FISH">Ism Familya:</td>
        <div id="hafta-3-masalalar">
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/15-masala/">15-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/16-masala/">16-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/17-masala/">17-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/18-masala/">18-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/19-masala/">19-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/20-masala/">20-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/21-masala/">21-masala</a></td>
        </div>
        <td class="td-result">Jami:</td>
    </tr>
    <tr>
        <td class="td-urin">1</td>
        <td class="td-FISH">Ulasheva Mashxura</td>
        <div id="hafta-3-UlashevaMashhura">
            <td class="td-box" onclick="UlashevaMashhuramasala15()"><span id="UlashevaMashhuramasala15bali">5</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala16()"><span id="UlashevaMashhuramasala16bali">3</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala17()"><span id="UlashevaMashhuramasala17bali">2</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala18()"><span id="UlashevaMashhuramasala18bali">5</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala19()"><span id="UlashevaMashhuramasala19bali">3</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala20()"><span id="UlashevaMashhuramasala20bali">5</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala21()"><span id="UlashevaMashhuramasala21bali">4</span>-ball</td>
        </div>
        <td class="td-result">191-ball</td>
    </tr>
    <tr>
        <td class="td-urin">2</td>
        <td class="td-FISH">Abduqodirova Dilshoda</td>
        <div id="hafta-3-AbduqodirovaDilshoda">
            <td class="td-box" onclick="AbduqodirovaDilshodamasala15()"><span id="AbduqodirovaDilshodamasala15bali">9</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala16()"><span id="AbduqodirovaDilshodamasala16bali">4</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">145-ball</td>
    </tr>
    <tr>
        <td class="td-urin">3</td>
        <td class="td-FISH">Qo'chqorov Abulqosim</td>
        <div id="hafta-3-QuchqorovAbulqosim">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">121-ball</td>
    </tr>
    <tr>
        <td class="td-urin">4</td>
        <td class="td-FISH">Yangiboyev Kamol</td>
        <div id="hafta-3-YangiboyevKamol">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">69-ball</td>
    </tr>
    <tr>
        <td class="td-urin">5</td>
        <td class="td-FISH">Barotov Abbos</td>
        <div id="hafta-3-BarotovAbbos">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">43-ball</td>
    </tr>
    <tr>
    <td class="td-urin">6</td>
    <td class="td-FISH">Ergashev Qayumjon</td>
    <div class="hafta-6-ErgashevQayumjon">
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">42-ball</td>
</tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div id="hafta-3-SamatovaGulmira">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
    <tr>
    <td class="td-urin">8</td>
    <td class="td-FISH">Usmonov Azimjon</td>
    <div id="hafta-3-UsmonovAzimjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">9-ball</td>
</tr>
<tr>
        <td class="td-urin">9</td>
        <td class="td-FISH">Mamatqulov Fathulla</td>
        <div id="hafta-3-MamatqulovFathulla">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">7-ball</td>
    </tr>
    <tr>
        <td class="td-box">-</td>
        <td class="td-box">-</td>
        <div id="hafta-3-USER">
            <td class="td-box" onclick="USERmasala15()">USER</td>
            <td class="td-box" onclick="USERmasala16()">USER</td>
            <td class="td-box" onclick="USERmasala17()">USER</td>
            <td class="td-box" onclick="USERmasala18()">USER</td>
            <td class="td-box" onclick="USERmasala19()">USER</td>
            <td class="td-box" onclick="USERmasala20()">USER</td>
            <td class="td-box" onclick="USERmasala21()">USER</td>
        </div>
    </tr>
    <tr id="fantamas">
        <td>000000000</td>
        <td>000000000000000000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>000000000</td>
    </tr>
    <tr>
        <td onclick="orqaga()">&#8592;</td>
        <td colspan="8" style="color: #000; cursor: default;">3-hafta natijalari</td>
        <td onclick="oldinga()">&#8594;</td>
    </tr>
</table>
`;
const hafta4natijalari = `
<table>
    <tr>
        <td class="td-urin">O'rin:</td>
        <td class="td-FISH">Ism Familya:</td>
        <div id="hafta-4-masalalar">
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/22-masala/">22-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/23-masala/">23-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/24-masala/">24-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/25-masala/">25-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/26-masala/">26-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/27-masala/">27-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/28-masala/">28-masala</a></td>
        </div>
        <td class="td-result">Jami:</td>
    </tr>
    <tr>
        <td class="td-urin">1</td>
        <td class="td-FISH">Ulasheva Mashxura</td>
        <div id="hafta-1-UlashevaMashhura">
            <td class="td-box" onclick="UlashevaMashhuramasala22()"><span id="UlashevaMashhuramasala22bali">4</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala23()"><span id="UlashevaMashhuramasala23bali">5</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala24()"><span id="UlashevaMashhuramasala24bali">4</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala25()"><span id="UlashevaMashhuramasala25bali">3</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala26()"><span id="UlashevaMashhuramasala26bali">7</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala27()"><span id="UlashevaMashhuramasala27bali">3</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala28()"><span id="UlashevaMashhuramasala28bali">5</span>-ball</td>
        </div>
        <td class="td-result">191-ball</td>
    </tr>
    <tr>
        <td class="td-urin">2</td>
        <td class="td-FISH">Abduqodirova Dilshoda</td>
        <div class="hafta-1-AbduqodirovaDilshoda">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">145-ball</td>
    </tr>
    <tr>
        <td class="td-urin">3</td>
        <td class="td-FISH">Qo'chqorov Abulqosim</td>
        <div class="hafta-1-QuchqorovAbulqosim">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">121-ball</td>
    </tr>
    <tr>
        <td class="td-urin">4</td>
        <td class="td-FISH">Yangiboyev Kamol</td>
        <div id="hafta-1-YangiboyevKamol">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">69-ball</td>
    </tr>
    <tr>
        <td class="td-urin">5</td>
        <td class="td-FISH">Barotov Abbos</td>
        <div id="hafta-1">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">43-ball</td>
    </tr>
    <tr>
    <td class="td-urin">6</td>
    <td class="td-FISH">Ergashev Qayumjon</td>
    <div class="hafta-6-ErgashevQayumjon">
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">42-ball</td>
</tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div class="hafta-1-SamatovaGulmira">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
    <tr>
    <td class="td-urin">8</td>
    <td class="td-FISH">Usmonov Azimjon</td>
    <div class="hafta-1-UsmonovAzimjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">9-ball</td>
</tr>
<tr>
        <td class="td-urin">9</td>
        <td class="td-FISH">Mamatqulov Fathulla</td>
        <div class="hafta-1-MamatqulovFathulla">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">7-ball</td>
    </tr>
    <tr>
        <td class="td-box">-</td>
        <td class="td-box">-</td>
        <div id="hafta-1-USER">
            <td class="td-box" onclick="USERmasala22()">USER</td>
            <td class="td-box" onclick="USERmasala23()">USER</td>
            <td class="td-box" onclick="USERmasala24()">USER</td>
            <td class="td-box" onclick="USERmasala25()">USER</td>
            <td class="td-box" onclick="USERmasala26()">USER</td>
            <td class="td-box" onclick="USERmasala27()">USER</td>
            <td class="td-box" onclick="USERmasala28()">USER</td>
        </div>
    </tr>
    <tr id="fantamas">
        <td>000000000</td>
        <td>000000000000000000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>000000000</td>
    </tr>
    <tr>
        <td onclick="orqaga()">&#8592;</td>
        <td colspan="8" style="color: #000; cursor: default;">4-hafta natijalari</td>
        <td onclick="oldinga()">&#8594;</td>
    </tr>
</table>
`;
const hafta5natijalari = `
<table>
    <tr>
        <td class="td-urin">O'rin:</td>
        <td class="td-FISH">Ism Familya:</td>
        <div id="hafta-2-masalalar">
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/29-masala/">29-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/30-masala/">30-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/31-masala/">31-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/32-masala/">32-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/33-masala/">33-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/34-masala/">34-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/35-masala/">35-masala</a></td>
        </div>
        <td class="td-result">Jami:</td>
    </tr>
    <tr>
        <td class="td-urin">1</td>
        <td class="td-FISH">Ulasheva Mashxura</td>
        <div id="hafta-1-UlashevaMashhura">
            <td class="td-box" onclick="UlashevaMashhuramasala29()"><span id="UlashevaMashhuramasala29bali">3</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala30()"><span id="UlashevaMashhuramasala30bali">3</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala31()"><span id="UlashevaMashhuramasala31bali">5</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala32()"><span id="UlashevaMashhuramasala32bali">6</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala33()"><span id="UlashevaMashhuramasala33bali">4</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala34()"><span id="UlashevaMashhuramasala34bali">8</span>-ball</td>
            <td class="td-box" onclick="UlashevaMashhuramasala35()"><span id="UlashevaMashhuramasala35bali">4</span>-ball</td>
        </div>
        <td class="td-result">191-ball</td>
    </tr>
    <tr>
        <td class="td-urin">2</td>
        <td class="td-FISH">Abduqodirova Dilshoda</td>
        <div class="hafta-1-AbduqodirovaDilshoda">
            <td class="td-box" onclick="AbduqodirovaDilshodamasala29()"><span id="AbduqodirovaDilshodamasala29bali">4</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala30()"><span id="AbduqodirovaDilshodamasala30bali">3</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala31()"><span id="AbduqodirovaDilshodamasala31bali">1</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala32()"><span id="AbduqodirovaDilshodamasala32bali">0</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala33()"><span id="AbduqodirovaDilshodamasala33bali">2</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala34()"><span id="AbduqodirovaDilshodamasala34bali">3</span>-ball</td>
            <td class="td-box" onclick="AbduqodirovaDilshodamasala35()"><span id="AbduqodirovaDilshodamasala35bali">1</span>-ball</td>
        </div>
        <td class="td-result">145-ball</td>
    </tr>
    <tr>
        <td class="td-urin">3</td>
        <td class="td-FISH">Qo'chqorov Abulqosim</td>
        <div class="hafta-1-QuchqorovAbulqosim">
            <td class="td-box" onclick="QuchqorovAbulqosimmasala29()"><span id="QuchqorovAbulqosimmasala29bali">7</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala30()"><span id="QuchqorovAbulqosimmasala30bali">4</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala31()"><span id="QuchqorovAbulqosimmasala31bali">6</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala32()"><span id="QuchqorovAbulqosimmasala32bali">8</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala33()"><span id="QuchqorovAbulqosimmasala33bali">2</span>-ball</td>
            <td class="td-box" onclick="QuchqorovAbulqosimmasala34()"><span id="QuchqorovAbulqosimmasala34bali">3</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">121-ball</td>
    </tr>
    <tr>
        <td class="td-urin">4</td>
        <td class="td-FISH">Yangiboyev Kamol</td>
        <div id="hafta-5-YangiboyevKamol">
            <td class="td-box" onclick="YangiboyevKamolmasala29()"><span id="YangiboyevKamolmasala29bali">7</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="YangiboyevKamolmasala31()"><span id="YangiboyevKamolmasala31bali">3</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="YangiboyevKamolmasala35()"><span id="YangiboyevKamolmasala35bali">10</span>-ball</td>
        </div>
        <td class="td-result">69-ball</td>
    </tr>
    <tr>
        <td class="td-urin">5</td>
        <td class="td-FISH">Barotov Abbos</td>
        <div id="hafta-1">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">43-ball</td>
    </tr>
    <tr>
        <td class="td-urin">6</td>
        <td class="td-FISH">Ergashev Qayumjon</td>
        <div class="hafta-5-ErgashevQayumjon">
            <td class="td-box" onclick="ErgashevQayumjonmasala29()"><span id="ErgashevQayumjonmasala29bali">4</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">42-ball</td>
    </tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div class="hafta-5-SamatovaGulmira">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
    <tr>
        <td class="td-urin">8</td>
        <td class="td-FISH">Usmonov Azimjon</td>
        <div class="hafta-5-UsmonovAzimjon">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">9-ball</td>
    </tr>
    <tr>
        <td class="td-urin">9</td>
        <td class="td-FISH">Mamatqulov Fathulla</td>
        <div class="hafta-1-MamatqulovFathulla">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">7-ball</td>
    </tr>
    <tr>
        <td class="td-urin">10</td>
        <td class="td-FISH">Raxmatullayev Xurshid</td>
        <div class="hafta-5-RaxmatullayevXurshid">
            <td class="td-box" onclick="RaxmatullayevXurshidmasala29()"><span id="RaxmatullayevXurshidmasala29bali">2</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">2-ball</td>
    </tr>
    <tr>
        <td class="td-urin">11</td>
        <td class="td-FISH">Begbo'tayev Sunnatillo</td>
        <div class="hafta-5-BegbutayevSunnatillo">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="BegbutayevSunnatillomasala35()"><span id="BegbutayevSunnatillomasala35bali">1</span>-ball</td>
        </div>
        <td class="td-result">1-ball</td>
    </tr>
    <tr>
        <td class="td-box">-</td>
        <td class="td-box">-</td>
        <div id="hafta-5-USER">
            <td class="td-box" onclick="USERmasala29()">USER</td>
            <td class="td-box" onclick="USERmasala30()">USER</td>
            <td class="td-box" onclick="USERmasala31()">USER</td>
            <td class="td-box" onclick="USERmasala32()">USER</td>
            <td class="td-box" onclick="USERmasala33()">USER</td>
            <td class="td-box" onclick="USERmasala34()">USER</td>
            <td class="td-box" onclick="USERmasala35()">USER</td>
        </div>
    </tr>
    <tr id="fantamas">
        <td>000000000</td>
        <td>000000000000000000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>000000000</td>
    </tr>
    <tr>
        <td onclick="orqaga()">&#8592;</td>
        <td colspan="8" style="color: #000; cursor: default;">5-hafta natijalari</td>
        <td onclick="oldinga()">&#8594;</td>
    </tr>
</table>
`;
const hafta6natijalari = `
<table>
    <tr>
        <td class="td-urin">O'rin:</td>
        <td class="td-FISH">Ism Familya:</td>
        <div id="hafta-6-masalalar">
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/36-masala/">36-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/37-masala/">37-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/38-masala/">38-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/39-masala/">39-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/40-masala/">40-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/41-masala/">41-masala</a></td>
            <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/42-masala/">42-masala</a></td>
        </div>
        <td class="td-result">Jami:</td>
    </tr>
    <tr>
        <td class="td-urin">1</td>
        <td class="td-FISH">Ulasheva Mashxura</td>
        <div id="hafta-6-UlashevaMashhura">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">191-ball</td>
    </tr>
    <tr>
        <td class="td-urin">2</td>
        <td class="td-FISH">Abduqodirova Dilshoda</td>
        <div class="hafta-6-AbduqodirovaDilshoda">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">145-ball</td>
    </tr>
    <tr>
        <td class="td-urin">3</td>
        <td class="td-FISH">Qo'chqorov Abulqosim</td>
        <div class="hafta-6-QuchqorovAbulqosim">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">121-ball</td>
    </tr>
    <tr>
        <td class="td-urin">4</td>
        <td class="td-FISH">Yangiboyev Kamol</td>
        <div id="hafta-6-YangiboyevKamol">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">69-ball</td>
    </tr>
    <tr>
        <td class="td-urin">5</td>
        <td class="td-FISH">Barotov Abbos</td>
        <div id="hafta-6">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">43-ball</td>
    </tr>
    <tr>
        <td class="td-urin">6</td>
        <td class="td-FISH">Ergashev Qayumjon</td>
        <div class="hafta-6-ErgashevQayumjon">
            <td class="td-box" onclick="ErgashevQayumjonmasala36()"><span id="ErgashevQayumjonmasala36bali">5</span>-ball</td>
            <td class="td-box" onclick="ErgashevQayumjonmasala37()"><span id="ErgashevQayumjonmasala37bali">10</span>-ball</td>
            <td class="td-box" onclick="ErgashevQayumjonmasala38()"><span id="ErgashevQayumjonmasala38bali">6</span>-ball</td>
            <td class="td-box" onclick="ErgashevQayumjonmasala39()"><span id="ErgashevQayumjonmasala39bali">7</span>-ball</td>
            <td class="td-box" onclick="ErgashevQayumjonmasala40()"><span id="ErgashevQayumjonmasala40bali">10</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">42-ball</td>
    </tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div class="hafta-6-SamatovaGulmira">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="SamatovaGulmiramasala39()"><span id="SamatovaGulmiramasala39bali">4</span>-ball</td>
            <td class="td-box" onclick="SamatovaGulmiramasala40()"><span id="SamatovaGulmiramasala40bali">2</span>-ball</td>
            <td class="td-box" onclick="SamatovaGulmiramasala41()"><span id="SamatovaGulmiramasala41bali">9</span>-ball</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
    <tr>
        <td class="td-urin">8</td>
        <td class="td-FISH">Usmonov Azimjon</td>
        <div class="hafta-6-UsmonovAzimjon">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">9-ball</td>
    </tr>
    <tr>
        <td class="td-urin">9</td>
        <td class="td-FISH">Mamatqulov Fathulla</td>
        <div class="hafta-6-MamatqulovFathulla">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">7-ball</td>
    </tr>
    <tr>
        <td class="td-urin">10</td>
        <td class="td-FISH">Raxmatullayev Xurshid</td>
        <div class="hafta-6-RaxmatullayevXurshid">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">2-ball</td>
    </tr>
    <tr>
        <td class="td-urin">11</td>
        <td class="td-FISH">Begbo'tayev Sunnatillo</td>
        <div class="hafta-6-BegbutayevSunnatillo">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">1-ball</td>
    </tr>
    <tr>
        <td class="td-box">-</td>
        <td class="td-box">-</td>
        <div id="hafta-6-USER">
            <td class="td-box" onclick="USERmasala36()">USER</td>
            <td class="td-box" onclick="USERmasala37()">USER</td>
            <td class="td-box" onclick="USERmasala38()">USER</td>
            <td class="td-box" onclick="USERmasala39()">USER</td>
            <td class="td-box" onclick="USERmasala40()">USER</td>
            <td class="td-box" onclick="USERmasala41()">USER</td>
            <td class="td-box" onclick="USERmasala42()">USER</td>
        </div>
    </tr>
    <tr id="fantamas">
        <td>000000000</td>
        <td>000000000000000000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>00000000000</td>
        <td>000000000</td>
    </tr>
    <tr>
        <td onclick="orqaga()">&#8592;</td>
        <td colspan="8" style="color: #000; cursor: default;">6-hafta natijalari</td>
        <td onclick="oldinga()">&#8594;</td>
    </tr>
</table>
`;
const hafta7natijalari = `
<table>
                <tr>
                    <td class="td-urin">O'rin:</td>
                    <td class="td-FISH">Ism Familya:</td>
                    <div id="hafta-7-masalalar">
                        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/43-masala/">43-masala</a></td>
                        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/44-masala/">44-masala</a></td>
                        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/45-masala/">45-masala</a></td>
                        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/46-masala/">46-masala</a></td>
                        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/47-masala/">47-masala</a></td>
                        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/48-masala/">48-masala</a></td>
                        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/49-masala/">49-masala</a></td>
                    </div>
                    <td class="td-result">Jami:</td>
                </tr>
                <tr>
                    <td class="td-urin">1</td>
                    <td class="td-FISH">Ulasheva Mashxura</td>
                    <div id="hafta-7-UlashevaMashhura">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                    </div>
                    <td class="td-result">191-ball</td>
                </tr>
             
                <tr>
                <td class="td-urin">2</td>
                <td class="td-FISH">Abduqodirova Dilshoda</td>
                <div class="hafta-7-AbduqodirovaDilshoda">
                <td class="td-box" onclick="minus()">---</td>
                <td class="td-box" onclick="minus()">---</td>
                <td class="td-box" onclick="minus()">---</td>
                <td class="td-box" onclick="minus()">---</td>
                <td class="td-box" onclick="minus()">---</td>
                <td class="td-box" onclick="minus()">---</td>
                <td class="td-box" onclick="minus()">---</td>
                </div>
                <td class="td-result">145-ball</td>
                </tr>
                <tr>
                    <td class="td-urin">3</td>
                    <td class="td-FISH">Qo'chqorov Abulqosim</td>
                    <div class="hafta-7-QuchqorovAbulqosim">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="QuchqorovAbulqosimmasala44()"><span id="QuchqorovAbulqosimmasala44bali">10</span>-ball</td>
                        <td class="td-box" onclick="QuchqorovAbulqosimmasala45()"><span id="QuchqorovAbulqosimmasala45bali">10</span>-ball</td>
                        <td class="td-box" onclick="QuchqorovAbulqosimmasala46()"><span id="QuchqorovAbulqosimmasala46bali">6</span>-ball</td>
                        <td class="td-box" onclick="QuchqorovAbulqosimmasala47()"><span id="QuchqorovAbulqosimmasala47bali">4</span>-ball</td>
                        <td class="td-box" onclick="QuchqorovAbulqosimmasala48()"><span id="QuchqorovAbulqosimmasala48bali">4</span>-ball</td>
                        <td class="td-box" onclick="QuchqorovAbulqosimmasala49()"><span id="QuchqorovAbulqosimmasala49bali">4</span>-ball</td>
                    </div>
                    <td class="td-result">121-ball</td>
                </tr>
                
                <tr>
                    <td class="td-urin">4</td>
                    <td class="td-FISH">Yangiboyev Kamol</td>
                    <div id="hafta-7-YangiboyevKamol">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                    </div>
                    <td class="td-result">69-ball</td>
                </tr>
                <tr>
                    <td class="td-urin">5</td>
                    <td class="td-FISH">Barotov Abbos</td>
                    <div id="hafta-7">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                    </div>
                    <td class="td-result">43-ball</td>
                </tr>
                <tr>
                    <td class="td-urin">6</td>
                    <td class="td-FISH">Ergashev Qayumjon</td>
                    <div class="hafta-6-ErgashevQayumjon">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                    </div>
                    <td class="td-result">42-ball</td>
                </tr>
                <tr>
                    <tr>
                        <td class="td-urin">7</td>
                        <td class="td-FISH">Samatova Gulmira</td>
                        <div class="hafta-7-SamatovaGulmira">
                            <td class="td-box" onclick="SamatovaGulmiramasala43()"><span id="SamatovaGulmiramasala43bali">3</span>-ball</td>
                            <td class="td-box" onclick="SamatovaGulmiramasala44()"><span id="SamatovaGulmiramasala44bali">3</span>-ball</td>
                            <td class="td-box" onclick="minus()">---</td>
                            <td class="td-box" onclick="minus()">---</td>
                            <td class="td-box" onclick="SamatovaGulmiramasala47()"><span id="SamatovaGulmiramasala47bali">3</span>-ball</td>
                            <td class="td-box" onclick="SamatovaGulmiramasala48()"><span id="SamatovaGulmiramasala48bali">4</span>-ball</td>
                            <td class="td-box" onclick="SamatovaGulmiramasala49()"><span id="SamatovaGulmiramasala49bali">4</span>-ball</td>
                        </div>
                        <td class="td-result">40-ball</td>
                    </tr>
                    <td class="td-urin">8</td>
                    <td class="td-FISH">Usmonov Azimjon</td>
                    <div class="hafta-7-UsmonovAzimjon">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                    </div>
                    <td class="td-result">9-ball</td>
                </tr>
                <tr>
                    <td class="td-urin">9</td>
                    <td class="td-FISH">Mamatqulov Fathulla</td>
                    <div class="hafta-7-MamatqulovFathulla">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                    </div>
                    <td class="td-result">7-ball</td>
                </tr>
                <tr>
                    <td class="td-urin">10</td>
                    <td class="td-FISH">Raxmatullayev Xurshid</td>
                    <div class="hafta-6-RaxmatullayevXurshid">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                    </div>
                    <td class="td-result">2-ball</td>
                </tr>
                <tr>
                    <td class="td-urin">11</td>
                    <td class="td-FISH">Begbo'tayev Sunnatillo</td>
                    <div class="hafta-6-BegbutayevSunnatillo">
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                        <td class="td-box" onclick="minus()">---</td>
                    </div>
                    <td class="td-result">1-ball</td>
                </tr>
                <tr>
                    <td class="td-box">-</td>
                    <td class="td-box">-</td>
                    <div id="hafta-7-USER">
                        <td class="td-box" onclick="USERmasala43()">USER</td>
                        <td class="td-box" onclick="USERmasala44()">USER</td>
                        <td class="td-box" onclick="USERmasala45()">USER</td>
                        <td class="td-box" onclick="USERmasala46()">USER</td>
                        <td class="td-box" onclick="USERmasala47()">USER</td>
                        <td class="td-box" onclick="USERmasala48()">USER</td>
                        <td class="td-box" onclick="USERmasala49()">USER</td>
                    </div>
                </tr>
                <tr id="fantamas">
                    <td>000000000</td>
                    <td>000000000000000000000000</td>
                    <td>00000000000</td>
                    <td>00000000000</td>
                    <td>00000000000</td>
                    <td>00000000000</td>
                    <td>00000000000</td>
                    <td>00000000000</td>
                    <td>00000000000</td>
                    <td>000000000</td>
                </tr>
                <tr>
                    <td onclick="orqaga()">&#8592;</td>
                    <td colspan="8" style="color: #000; cursor: default;">7-hafta natijalari</td>
                    <td onclick="oldinga()">&#8594;</td>
                </tr>
            </table>
`;

const hafta8natijalari = `
<table>
<tr>
    <td class="td-urin">O'rin:</td>
    <td class="td-FISH">Ism Familya:</td>
    <div id="hafta-8-masalalar">
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/50-masala/">50-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/51-masala/">51-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/52-masala/">52-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/53-masala/">53-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/54-masala/">54-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/55-masala/">55-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/56-masala/">56-masala</a></td>
    </div>
    <td class="td-result">Jami:</td>
</tr>
<tr>
    <td class="td-urin">1</td>
    <td class="td-FISH">Ulasheva Mashxura</td>
    <div id="hafta-8-UlashevaMashhura">
        <td class="td-box" onclick="UlashevaMashhuramasala50()"><span id="UlashevaMashhuramasala50bali">4</span>-ball</td>
        <td class="td-box" onclick="UlashevaMashhuramasala51()"><span id="UlashevaMashhuramasala51bali">5</span>-ball</td>
        <td class="td-box" onclick="UlashevaMashhuramasala52()"><span id="UlashevaMashhuramasala52bali">4</span>-ball</td>
        <td class="td-box" onclick="UlashevaMashhuramasala53()"><span id="UlashevaMashhuramasala53bali">3</span>-ball</td>
        <td class="td-box" onclick="UlashevaMashhuramasala54()"><span id="UlashevaMashhuramasala54bali">3</span>-ball</td>
        <td class="td-box" onclick="UlashevaMashhuramasala55()"><span id="UlashevaMashhuramasala55bali">10</span>-ball</td>
        <td class="td-box" onclick="UlashevaMashhuramasala56()"><span id="UlashevaMashhuramasala56bali">3</span>-ball</td>
    </div>
    <td class="td-result">191-ball</td>
</tr>


<tr>
    <td class="td-urin">2</td>
    <td class="td-FISH">Abduqodirova Dilshoda</td>
    <div class="hafta-8-AbduqodirovaDilshoda">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">145-ball</td>
</tr>
<tr>
    <td class="td-urin">3</td>
    <td class="td-FISH">Qo'chqorov Abulqosim</td>
    <div class="hafta-8-QuchqorovAbulqosim">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">121-ball</td>
</tr>
<tr>
    <td class="td-urin">4</td>
    <td class="td-FISH">Yangiboyev Kamol</td>
    <div id="hafta-8-YangiboyevKamol">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">69-ball</td>
</tr>
<tr>
    <td class="td-urin">5</td>
    <td class="td-FISH">Barotov Abbos</td>
    <div id="hafta-8">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">43-ball</td>
</tr>
<tr>
    <td class="td-urin">6</td>
    <td class="td-FISH">Ergashev Qayumjon</td>
    <div class="hafta-6-ErgashevQayumjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">42-ball</td>
</tr>
<tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div class="hafta-8-SamatovaGulmira">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
    <td class="td-urin">8</td>
    <td class="td-FISH">Usmonov Azimjon</td>
    <div class="hafta-8-UsmonovAzimjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">9-ball</td>
</tr>
<tr>
    <td class="td-urin">9</td>
    <td class="td-FISH">Mamatqulov Fathulla</td>
    <div class="hafta-8-MamatqulovFathulla">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">7-ball</td>
</tr>
<tr>
    <td class="td-urin">10</td>
    <td class="td-FISH">Raxmatullayev Xurshid</td>
    <div class="hafta-6-RaxmatullayevXurshid">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">2-ball</td>
</tr>
<tr>
    <td class="td-urin">11</td>
    <td class="td-FISH">Begbo'tayev Sunnatillo</td>
    <div class="hafta-6-BegbutayevSunnatillo">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">1-ball</td>
</tr>
<tr>
    <td class="td-box">-</td>
    <td class="td-box">-</td>
    <div id="hafta-8-USER">
        <td class="td-box" onclick="USERmasala50()">USER</td>
        <td class="td-box" onclick="USERmasala51()">USER</td>
        <td class="td-box" onclick="USERmasala52()">USER</td>
        <td class="td-box" onclick="USERmasala53()">USER</td>
        <td class="td-box" onclick="USERmasala54()">USER</td>
        <td class="td-box" onclick="USERmasala55()">USER</td>
        <td class="td-box" onclick="USERmasala56()">USER</td>
    </div>
</tr>
<tr id="fantamas">
    <td>000000000</td>
    <td>000000000000000000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>000000000</td>
</tr>
<tr>
    <td onclick="orqaga()">&#8592;</td>
    <td colspan="8" style="color: #000; cursor: default;">8-hafta natijalari</td>
    <td onclick="oldinga()">&#8594;</td>
</tr>
</table>
`;
const hafta9natijalari = `
<table>
<tr>
    <td class="td-urin">O'rin:</td>
    <td class="td-FISH">Ism Familya:</td>
    <div id="hafta-9-masalalar">
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/57-masala/">57-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/58-masala/">58-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/59-masala/">59-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/60-masala/">60-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/61-masala/">61-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/62-masala/">62-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/63-masala/">63-masala</a></td>
    </div>
    <td class="td-result">Jami:</td>
</tr>
<tr>
    <td class="td-urin">1</td>
    <td class="td-FISH">Ulasheva Mashxura</td>
    <div id="hafta-9-UlashevaMashhura">
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">191-ball</td>
</tr>

<tr>
<td class="td-urin">2</td>
<td class="td-FISH">Abduqodirova Dilshoda</td>
<div class="hafta-9-AbduqodirovaDilshoda">
<td class="td-box" onclick="minus()">---</td>
<td class="td-box" onclick="minus()">---</td>
<td class="td-box" onclick="minus()">---</td>
<td class="td-box" onclick="minus()">---</td>
<td class="td-box" onclick="minus()">---</td>
<td class="td-box" onclick="minus()">---</td>
<td class="td-box" onclick="minus()">---</td>
</div>
<td class="td-result">145-ball</td>
</tr>
<tr>
    <td class="td-urin">3</td>
    <td class="td-FISH">Qo'chqorov Abulqosim</td>
    <div class="hafta-9-QuchqorovAbulqosim">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">121-ball</td>
</tr>

<tr>
<td class="td-urin">4</td>
    <td class="td-FISH">Yangiboyev Kamol</td>
    <div id="hafta-9-YangiboyevKamol">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">69-ball</td>
</tr>
<tr>
    <td class="td-urin">5</td>
    <td class="td-FISH">Barotov Abbos</td>
    <div id="hafta-9">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">43-ball</td>
</tr>
<tr>
    <td class="td-urin">6</td>
    <td class="td-FISH">Ergashev Qayumjon</td>
    <div class="hafta-9-ErgashevQayumjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">42-ball</td>
</tr>
<tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div class="hafta-9-SamatovaGulmira">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
    <td class="td-urin">8</td>
    <td class="td-FISH">Usmonov Azimjon</td>
    <div class="hafta-9-UsmonovAzimjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">9-ball</td>
</tr>
<tr>
    <td class="td-urin">9</td>
    <td class="td-FISH">Mamatqulov Fathulla</td>
    <div class="hafta-9-MamatqulovFathulla">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">7-ball</td>
</tr>
<tr>
    <td class="td-urin">10</td>
    <td class="td-FISH">Raxmatullayev Xurshid</td>
    <div class="hafta-9-RaxmatullayevXurshid">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">2-ball</td>
</tr>
<tr>
    <td class="td-urin">11</td>
    <td class="td-FISH">Begbo'tayev Sunnatillo</td>
    <div class="hafta-6-BegbutayevSunnatillo">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">1-ball</td>
</tr>
<tr>
    <td class="td-box">-</td>
    <td class="td-box">-</td>
    <div id="hafta-9-USER">
        <td class="td-box" onclick="USERmasala57()">USER</td>
        <td class="td-box" onclick="USERmasala58()">USER</td>
        <td class="td-box" onclick="USERmasala59()">USER</td>
        <td class="td-box" onclick="USERmasala60()">USER</td>
        <td class="td-box" onclick="USERmasala61()">USER</td>
        <td class="td-box" onclick="USERmasala62()">USER</td>
        <td class="td-box" onclick="USERmasala63()">USER</td>
    </div>
</tr>
<tr id="fantamas">
    <td>000000000</td>
    <td>000000000000000000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>000000000</td>
</tr>
<tr>
    <td onclick="orqaga()">&#8592;</td>
    <td colspan="8" style="color: #000; cursor: default;">9-hafta natijalari</td>
    <td onclick="oldinga()">&#8594;</td>
</tr>
</table>
`;
const hafta10natijalari = `
<table>
<tr>
    <td class="td-urin">O'rin:</td>
    <td class="td-FISH">Ism Familya:</td>
    <div id="hafta-9-masalalar">
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/64-masala/">64-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/65-masala/">65-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/66-masala/">66-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/67-masala/">67-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/68-masala/">68-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/69-masala/">69-masala</a></td>
        <td class="td-box"><a href="https://umid-uz.netlify.app/jdpi/70-masala/">70-masala</a></td>
    </div>
    <td class="td-result">Jami:</td>
</tr>
<tr>
    <td class="td-urin">1</td>
    <td class="td-FISH">Ulasheva Mashxura</td>
    <div id="hafta-9-UlashevaMashhura">
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">191-ball</td>
</tr>

<tr>
<td class="td-urin">2</td>
<td class="td-FISH">Abduqodirova Dilshoda</td>
<div class="hafta-9-AbduqodirovaDilshoda">
<td class="td-box" onclick="AbduqodirovaDilshodamasala64()"><span id="AbduqodirovaDilshodamasala64bali">9</span>-ball</td>
<td class="td-box" onclick="AbduqodirovaDilshodamasala65()"><span id="AbduqodirovaDilshodamasala65bali">10</span>-ball</td>
<td class="td-box" onclick="AbduqodirovaDilshodamasala66()"><span id="AbduqodirovaDilshodamasala66bali">10</span>-ball</td>
<td class="td-box" onclick="AbduqodirovaDilshodamasala67()"><span id="AbduqodirovaDilshodamasala67bali">10</span>-ball</td>
<td class="td-box" onclick="AbduqodirovaDilshodamasala68()"><span id="AbduqodirovaDilshodamasala68bali">10</span>-ball</td>
<td class="td-box" onclick="AbduqodirovaDilshodamasala69()"><span id="AbduqodirovaDilshodamasala69bali">3</span>-ball</td>
<td class="td-box" onclick="AbduqodirovaDilshodamasala70()"><span id="AbduqodirovaDilshodamasala70bali">2</span>-ball</td>

</div>
<td class="td-result">145-ball</td>
</tr>
<tr>
    <td class="td-urin">3</td>
    <td class="td-FISH">Qo'chqorov Abulqosim</td>
    <div class="hafta-9-QuchqorovAbulqosim">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">121-ball</td>
</tr>

<tr>
<td class="td-urin">4</td>
    <td class="td-FISH">Yangiboyev Kamol</td>
    <div id="hafta-9-YangiboyevKamol">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">69-ball</td>
</tr>
<tr>
    <td class="td-urin">5</td>
    <td class="td-FISH">Barotov Abbos</td>
    <div id="hafta-9">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">43-ball</td>
</tr>
<tr>
    <td class="td-urin">6</td>
    <td class="td-FISH">Ergashev Qayumjon</td>
    <div class="hafta-9-ErgashevQayumjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">42-ball</td>
</tr>
<tr>
    <tr>
        <td class="td-urin">7</td>
        <td class="td-FISH">Samatova Gulmira</td>
        <div class="hafta-9-SamatovaGulmira">
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
            <td class="td-box" onclick="minus()">---</td>
        </div>
        <td class="td-result">40-ball</td>
    </tr>
    <td class="td-urin">8</td>
    <td class="td-FISH">Usmonov Azimjon</td>
    <div class="hafta-9-UsmonovAzimjon">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">9-ball</td>
</tr>
<tr>
    <td class="td-urin">9</td>
    <td class="td-FISH">Mamatqulov Fathulla</td>
    <div class="hafta-9-MamatqulovFathulla">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">7-ball</td>
</tr>
<tr>
    <td class="td-urin">10</td>
    <td class="td-FISH">Raxmatullayev Xurshid</td>
    <div class="hafta-9-RaxmatullayevXurshid">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">2-ball</td>
</tr>
<tr>
    <td class="td-urin">11</td>
    <td class="td-FISH">Begbo'tayev Sunnatillo</td>
    <div class="hafta-6-BegbutayevSunnatillo">
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
        <td class="td-box" onclick="minus()">---</td>
    </div>
    <td class="td-result">1-ball</td>
</tr>
<tr>
    <td class="td-box">-</td>
    <td class="td-box">-</td>
    <div id="hafta-9-USER">
        <td class="td-box" onclick="USERmasala64()">USER</td>
        <td class="td-box" onclick="USERmasala65()">USER</td>
        <td class="td-box" onclick="USERmasala66()">USER</td>
        <td class="td-box" onclick="USERmasala67()">USER</td>
        <td class="td-box" onclick="USERmasala68()">USER</td>
        <td class="td-box" onclick="USERmasala69()">USER</td>
        <td class="td-box" onclick="USERmasala70()">USER</td>
    </div>
</tr>
<tr id="fantamas">
    <td>000000000</td>
    <td>000000000000000000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>00000000000</td>
    <td>000000000</td>
</tr>
<tr>
    <td onclick="orqaga()">&#8592;</td>
    <td colspan="8" style="color: #000; cursor: default;">10-hafta natijalari</td>
    <td onclick="oldinga()">&#8594;</td>
</tr>
</table>
`;





function oldinga() {
    if (haftaraqami == 1) {
        haftaraqami += 1;
        hafta1.innerHTML = ``;
        hafta2.innerHTML = hafta2natijalari;
    } else if (haftaraqami == 2) {
        haftaraqami += 1;
        hafta2.innerHTML = ``;
        hafta3.innerHTML = hafta3natijalari;
    } else if (haftaraqami == 3) {
        haftaraqami += 1;
        hafta3.innerHTML = ``;
        hafta4.innerHTML = hafta4natijalari;
    } else if (haftaraqami == 4) {
        haftaraqami += 1;
        hafta4.innerHTML = ``;
        hafta5.innerHTML = hafta5natijalari;
        document.getElementById("style").innerHTML = `.day table tr:nth-child(14) td {border: none;}.day table tr:nth-child(15) td:nth-child(2) {border: none;}`;
    } else if (haftaraqami == 5) {
        haftaraqami += 1;
        hafta5.innerHTML = ``;
        hafta6.innerHTML = hafta6natijalari;
    } else if (haftaraqami == 6) {
        haftaraqami += 1;
        hafta6.innerHTML = ``;
        hafta7.innerHTML = hafta7natijalari;
        document.getElementById("style").innerHTML = `.day table tr:nth-child(15) td {border: none;}.day table tr:nth-child(16) td:nth-child(2) {border: none;}`;
    } else if (haftaraqami == 7) {
        haftaraqami += 1;
        hafta7.innerHTML = ``;
        hafta8.innerHTML = hafta8natijalari;
    } else if (haftaraqami == 8) {
        haftaraqami += 1;
        hafta8.innerHTML = ``;
        hafta9.innerHTML = hafta9natijalari;
    } else if (haftaraqami == 9) {
        haftaraqami += 1;
        hafta9.innerHTML = ``;
        hafta10.innerHTML = hafta10natijalari;
    }
}

function orqaga() {
    if (haftaraqami == 2) {
        haftaraqami -= 1;
        hafta1.innerHTML = hafta1natijalari;
        hafta2.innerHTML = ``;
    } else if (haftaraqami == 3) {
        haftaraqami -= 1;
        hafta2.innerHTML = hafta2natijalari;
        hafta3.innerHTML = ``;
    } else if (haftaraqami == 4) {
        haftaraqami -= 1;
        hafta3.innerHTML = hafta3natijalari;
        hafta4.innerHTML = ``;
    } else if (haftaraqami == 5) {
        haftaraqami -= 1;
        hafta4.innerHTML = hafta4natijalari;
        hafta5.innerHTML = ``;
        document.getElementById("style").innerHTML = `.day table tr:nth-child(12) td {border: none;}.day table tr:nth-child(13) td:nth-child(2) {border: none;}`;
    } else if (haftaraqami == 6) {
        haftaraqami -= 1;
        hafta5.innerHTML = hafta5natijalari;
        hafta6.innerHTML = ``;
    } else if (haftaraqami == 7) {
        haftaraqami -= 1;
        hafta6.innerHTML = hafta6natijalari;
        hafta7.innerHTML = ``;
        document.getElementById("style").innerHTML = `.day table tr:nth-child(14) td {border: none;}.day table tr:nth-child(15) td:nth-child(2) {border: none;}`;
    } else if (haftaraqami == 8) {
        haftaraqami -= 1;
        hafta7.innerHTML = hafta7natijalari;
        hafta8.innerHTML = ``;
    } else if (haftaraqami == 9) {
        haftaraqami -= 1;
        hafta8.innerHTML = hafta8natijalari;
        hafta9.innerHTML = ``;
    } else if (haftaraqami == 10) {
        haftaraqami -= 1;
        hafta9.innerHTML = hafta9natijalari;
        hafta10.innerHTML = ``;
    }
}