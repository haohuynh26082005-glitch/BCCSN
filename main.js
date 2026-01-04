/* =========================
   LẤY MA TRẬN TỪ HTML
========================= */
function getMatrix(containerId) {
    const inputs = document.querySelectorAll(`#${containerId} input`);
    let matrix = [];
    let index = 0;

    for (let i = 0; i < 3; i++) {
        matrix[i] = [];
        for (let j = 0; j < 3; j++) {
            matrix[i][j] = Number(inputs[index++].value) || 0;
        }
    }
    return matrix;
}

/* =========================
   HIỂN THỊ MA TRẬN
========================= */
function renderMatrix(matrix) {
    let html = `<div class="matrix-grid">`;
    matrix.forEach(row => {
        row.forEach(val => {
            html += `<div>${val}</div>`;
        });
    });
    html += `</div>`;
    return html;
}

/* =========================
   PHÉP CỘNG MA TRẬN
========================= */
function addMatrices() {
    const A = getMatrix("matrixA_inputs");
    const B = getMatrix("matrixB_inputs");

    let result = [];
    let detail = `<h3>Chi tiết (Matrix Addition)</h3>
    <p>Tổng của hai ma trận được tính bằng cách cộng các phần tử tương ứng.</p>`;

    for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
            result[i][j] = A[i][j] + B[i][j];
            detail += `(${A[i][j]} + ${B[i][j]}) `;
        }
        detail += `<br>`;
    }

    showResult("A + B", A, B, result, detail);
}

/* =========================
   PHÉP TRỪ MA TRẬN
========================= */
function subtractMatrices() {
    const A = getMatrix("matrixA_inputs");
    const B = getMatrix("matrixB_inputs");

    let result = [];
    let detail = `<h3>Chi tiết (Matrix Subtraction)</h3>
    <p>Hiệu của hai ma trận được tính bằng cách trừ các phần tử tương ứng.</p>`;

    for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
            result[i][j] = A[i][j] - B[i][j];
            detail += `(${A[i][j]} - ${B[i][j]}) `;
        }
        detail += `<br>`;
    }

    showResult("A - B", A, B, result, detail);
}

/* =========================
   NHÂN MA TRẬN
========================= */
function multiplyMatrices() {
    const A = getMatrix("matrixA_inputs");
    const B = getMatrix("matrixB_inputs");

    let result = Array.from({ length: 3 }, () => Array(3).fill(0));
    let detail = `<h3>Chi tiết (Matrix Multiplication)</h3>
    <p>Mỗi phần tử được tính bằng tích vô hướng hàng của A và cột của B.</p>`;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let calc = "";
            for (let k = 0; k < 3; k++) {
                result[i][j] += A[i][k] * B[k][j];
                calc += `${A[i][k]}×${B[k][j]} `;
            }
            detail += `C(${i + 1},${j + 1}) = ${calc}= ${result[i][j]}<br>`;
        }
    }

    showResult("A × B", A, B, result, detail);
}

/* =========================
   NHÂN VÔ HƯỚNG
========================= */
function multiplyScalar() {
    const A = getMatrix("matrixA_inputs");
    const k = 2;

    
    
    let result = [];
    let detail = `<h3>Chi tiết (Scalar Multiplication)</h3>
    <p>Mỗi phần tử của ma trận được nhân với ${k}.</p>`;

    for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
            result[i][j] = k * A[i][j];
            detail += `(${k} × ${A[i][j]}) `;
        }
        detail += `<br>`;
    }

    showResult(`${k} × A`, A, null, result, detail);
}

/* =========================
   CHUYỂN VỊ MA TRẬN
========================= */
function transposeMatrix() {
    const A = getMatrix("matrixA_inputs");

    let result = [];
    let detail = `<h3>Chi tiết (Transpose)</h3>
    <p>Ma trận chuyển vị được tạo bằng cách đổi hàng thành cột.</p>`;

    for (let i = 0; i < 3; i++) {
        result[i] = [];
        for (let j = 0; j < 3; j++) {
            result[i][j] = A[j][i];
            detail += `A(${j + 1},${i + 1}) → (${result[i][j]})<br>`;
        }
    }

    document.getElementById("result").innerHTML = `
        <h3>Aᵀ</h3>
        ${renderMatrix(result)}
        ${detail}
    `;
}

/* =========================
   HIỂN THỊ KẾT QUẢ CHUNG
========================= */
function showResult(title, A, B, result, detail) {
    let html = `<h3>${title}</h3>
        <div style="display:flex;gap:20px;align-items:center;">`;

    html += renderMatrix(A);

    if (B) {
        html += `<span style="font-size:24px;">+</span>`;
        html += renderMatrix(B);
    }

    html += `<span style="font-size:24px;">=</span>`;
    html += renderMatrix(result);

    html += `</div>${detail}`;

    document.getElementById("result").innerHTML = html;
}

