const tBody = document.querySelector('.tbody');
const bAcak = document.querySelector('.bAcak');
const z0 = document.querySelector('.z0');
const c = document.querySelector('.c');
const a = document.querySelector('.a');
const m = document.querySelector('.m');
function hitung(e) {
    e.preventDefault();
    tBody.innerHTML = ``;
    let Z = (parseInt(a.value) * parseInt(z0.value) + parseInt(c.value)) % parseInt(m.value);
    tBody.innerHTML += `<tr>
                <td>${1}</td>
                <td>${z0.value}</td>
                <td>Z1 = (${a.value} * ${z0.value} + ${c.value}) mod ${m.value} = ${Z}</td>
                <td>U1 = ${Z} / ${m.value} = ${Z / parseInt(m.value)} = &radic;${Z / parseInt(m.value)} = ${Math.sqrt(Z / parseInt(m.value))}</td>
            </tr>`
    for (let i = 1; i < bAcak.value; i++) {
        let ZResult = (parseInt(a.value) * Z + parseInt(c.value)) % parseInt(m.value);
        tBody.innerHTML += `<tr>
            <td>${i + 1}</td>
            <td>${Z}</td>
            <td>Z${i + 1} = (${a.value} * ${Z} + ${c.value}) mod ${m.value} = ${ZResult}</td>
            <td>U${i + 1} = ${ZResult} / ${parseInt(m.value)} = ${ZResult / parseInt(m.value)} = &radic;${ZResult / parseInt(m.value)} = ${Math.sqrt(ZResult / parseInt(m.value))}</td>
        </tr>`
        Z = (parseInt(a.value) * Z + parseInt(c.value)) % parseInt(m.value);
    }
    bAcak.value = '';
    a.value = '';
    c.value = '';
    m.value = '';
    z0.value = '';
}