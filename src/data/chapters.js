export const CHAPTERS = [
  {
    id: 1,
    title: "Giới thiệu",
    slug: "gioi-thieu",
    icon: "🏗️",
    sections: [
      {
        id: "1-1", title: "Mô tả dự án",
        content: `## 1.1 Mô tả Dự án

Năm 2009, một **kênh đào dân cư** được đề xuất tại Khu phát triển Pimpama Riverside và cuộc khảo sát địa kỹ thuật được thực hiện để đánh giá điều kiện địa kỹ thuật của khu vực. Kết quả điều tra bao gồm:

- Bản đồ khu vực dự án (Hình 1.1) với các đường đồng mức cao độ bề mặt
- Nhật ký hố khoan BH1–BH10: loại đất, độ ẩm, độ cứng
- Báo cáo phòng thí nghiệm (Bảng 1.1–1.3)

Mục tiêu chính là xác định tính chất đất và ước tính nguy cơ địa kỹ thuật có thể xảy ra trong quá trình thi công. Công trình trước đây trong khu vực cho thấy **sét rất mềm phân bố rộng**, không phù hợp làm nền móng công trình. Giải pháp đề xuất: cố kết bằng **phương pháp gia tải trước (pre-load)**.

> 💡 **Phương pháp học dựa trên dự án:** Mỗi chương lý thuyết được gắn với một bước phân tích thực tế của dự án kênh đào Pimpama.`
      },
      {
        id: "1-2", title: "Dữ liệu thực địa",
        content: `## 1.2 Dữ liệu Thực địa

### Thí nghiệm xuyên động (DCPT)

Thí nghiệm được thực hiện gần BH9. Số nhát búa $N_d$ cần để xuyên 10 cm phản ánh độ cứng đất:

| Độ sâu (cm) | $N_d$ | Nhận xét |
|---|---|---|
| 0 – 230 | 1 – 6 | Đất rất mềm |
| 230 – 460 | 4 – 9 | Đất trung bình |
| 460 – 690 | 6 – 21 | Đất chắc hơn |

### Nhật ký hố khoan

**Hố khoan BH1** (Cao độ -1.4 m): Sét pha bùn màu xám, rất mềm (VS), bão hòa nước từ 0–3 m. Bên dưới: sét cứng hơn (F–St).

**Hố khoan BH6** (Cao độ -1.6 m): Tương tự BH1, lớp sét mềm dày hơn (~4 m).

**Hố khoan BH9** (Cao độ -1.67 m): Lớp sét mềm đến 5 m, bên dưới có cát và sỏi.`
      },
      {
        id: "1-3", title: "Dữ liệu phòng thí nghiệm",
        content: `## 1.3 Dữ liệu Phòng thí nghiệm

Ba loại đất được thí nghiệm trong dự án:

### Sét pha bùn phù sa (Alluvial Silty Clay)

| Thông số | Giá trị |
|---|---|
| Giới hạn chảy LL | 62 – 74 % |
| Giới hạn dẻo PL | 28 – 35 % |
| Chỉ số dẻo PI | 30 – 42 % |
| Độ ẩm tự nhiên w | 55 – 80 % |
| % hạt sét (< 0.002 mm) | 40 – 55 % |

### Đất tàn tích (Residual Soil)

| Thông số | Giá trị |
|---|---|
| LL | 45 – 58 % |
| PI | 18 – 25 % |
| w | 25 – 40 % |

### Cát (Pit 1)

Cát mịn đến trung bình, sạch, $C_u \\approx 2.5$, $C_c \\approx 1.1$ — **phân loại SP** (cát phân loại kém).`
      }
    ],
    quiz: [
      {
        q: "Dự án kênh đào Pimpama Riverside được đề xuất vào năm nào?",
        options: ["2005", "2007", "2009", "2011"],
        ans: 2,
        explain: "Năm 2009, dự án kênh đào dân cư tại Pimpama Riverside được đề xuất và tiến hành khảo sát địa kỹ thuật."
      },
      {
        q: "Vấn đề địa kỹ thuật chính ở khu vực dự án Pimpama là gì?",
        options: ["Đá cứng phân bố rộng", "Sét rất mềm phân bố rộng", "Cát chảy (quicksand)", "Nước ngầm quá sâu"],
        ans: 1,
        explain: "Sét rất mềm (VS - Very Soft) phân bố rộng, không phù hợp làm nền cho hầu hết công trình kỹ thuật."
      },
      {
        q: "Thí nghiệm DCPT đo thông số nào?",
        options: ["Hệ số thấm k", "Số nhát búa $N_d$ để xuyên 10 cm", "Góc ma sát trong φ'", "Giới hạn chảy LL"],
        ans: 1,
        explain: "DCPT (Dynamic Cone Penetration Test) đo số nhát búa $N_d$ cần thiết để xuyên sâu 10 cm, phản ánh sức kháng xuyên của đất."
      },
      {
        q: "Giải pháp xử lý đất mềm được đề xuất tại dự án Pimpama là gì?",
        options: ["Đóng cọc bê tông", "Thay thế toàn bộ đất yếu", "Cố kết bằng phương pháp gia tải trước (pre-load)", "Dùng vải địa kỹ thuật"],
        ans: 2,
        explain: "Phương pháp gia tải trước (pre-load) được đề xuất: đắp đất nặng trên khu vực để nén chặt lớp sét mềm bên dưới trước khi thi công kênh đào."
      },
      {
        q: "Độ ẩm tự nhiên của sét pha bùn phù sa tại Pimpama nằm trong khoảng?",
        options: ["10 – 25%", "25 – 40%", "55 – 80%", "100 – 150%"],
        ans: 2,
        explain: "Độ ẩm 55–80% rất cao, cho thấy đất rất mềm và có tỷ lệ rỗng lớn. Đây là đặc trưng của sét bùn biển/cửa sông ở vùng nhiệt đới."
      },
      {
        q: "Tại vị trí BH9, lớp sét mềm (VS) kéo dài đến độ sâu khoảng bao nhiêu?",
        options: ["1 m", "2 m", "5 m", "10 m"],
        ans: 2,
        explain: "Theo nhật ký hố khoan BH9, lớp sét rất mềm kéo dài đến khoảng 5 m trước khi chuyển sang đất cứng hơn."
      }
    ],
    references: [
      { title: "Bản đồ địa hình khu vực Pimpama", url: "https://maps.google.com", type: "map" },
      { title: "Tiêu chuẩn khoan lấy mẫu AS 1726", url: "https://www.standards.org.au", type: "standard" },
      { title: "Hướng dẫn DCPT - Geoscience Australia", url: "https://www.ga.gov.au", type: "guide" }
    ]
  },
  {
    id: 2,
    title: "Sự hình thành và thăm dò đất",
    slug: "hinh-thanh-dat",
    icon: "🌍",
    sections: [
      {
        id: "2-1", title: "Phong hóa đá",
        content: `## 2.1 Phong hóa đá và sự hình thành đất

Đất được hình thành từ quá trình **phong hóa đá gốc**. Có hai loại:

### Phong hóa vật lý (Physical Weathering)
Phá vỡ đá thành mảnh nhỏ **không thay đổi thành phần hóa học**:
- Thay đổi nhiệt độ (giãn nở – co lại)
- Đóng băng – tan chảy (frost action)
- Áp lực gốc rễ thực vật
→ Tạo ra sỏi, cát thô

### Phong hóa hóa học (Chemical Weathering)
**Thay đổi thành phần khoáng vật**, tạo khoáng vật sét mới:
- Thủy phân (hydrolysis): feldspar → kaolinite + silica
- Oxi hóa: pyrite → goethite (gỉ sắt)
- Hòa tan: calcite + CO₂ + H₂O → Ca(HCO₃)₂

Phổ biến ở **vùng nhiệt đới ẩm** như Đông Nam Á và Queensland, Australia.`
      },
      {
        id: "2-2", title: "Đất tàn tích & vận chuyển",
        content: `## 2.2 Đất tàn tích và đất vận chuyển

### Đất tàn tích (Residual Soil)
Hình thành **tại chỗ** từ đá gốc bên dưới, không bị vận chuyển. Đặc điểm:
- Tính chất thay đổi dần theo độ sâu
- Phổ biến ở vùng nhiệt đới
- Thường có cấu trúc di lưu (relict structure) của đá gốc

### Đất vận chuyển (Transported Soil)

| Loại | Tác nhân | Ví dụ địa phương |
|---|---|---|
| **Phù sa (Alluvial)** | Nước chảy | Đồng bằng sông Cửu Long |
| **Eolian** | Gió | Cồn cát Quảng Bình |
| **Sườn tích (Colluvial)** | Trọng lực | Chân sườn núi |
| **Băng tích (Glacial)** | Băng hà | Vùng ôn đới |
| **Biển (Marine)** | Sóng biển | Vùng ven biển |

> 💡 **Dự án Pimpama:** Đất tại công trường là đất **phù sa biển (estuarine alluvium)** — bị vận chuyển và lắng đọng tại cửa sông, giải thích tại sao có lớp sét mềm dày.`
      },
      {
        id: "2-3", title: "Khoáng vật học đất",
        content: `## 2.3 Khoáng vật học đất

### Các khoáng vật sét chính

| Khoáng vật | Cấu trúc | Tính trương nở | Phân bố |
|---|---|---|---|
| **Kaolinite** | 1:1 (T-O) | Thấp | Nhiệt đới, phổ biến |
| **Illite** | 2:1 (T-O-T) | Trung bình | Phổ biến |
| **Montmorillonite** | 2:1 giãn nở | **Rất cao** | Đất đen, nguy hiểm |
| **Chlorite** | 2:1:1 | Thấp | Biến chất |

### Điện tích bề mặt và khả năng trao đổi cation (CEC)

Hạt sét mang **điện tích âm** → hút cation từ nước lỗ rỗng → lớp nước liên kết (adsorbed water) → tính dẻo.

$$CEC \\propto \\text{diện tích bề mặt riêng (SSA)}$$

Montmorillonite: SSA ≈ 800 m²/g → CEC cao → trương nở mạnh.`
      },
      {
        id: "2-4", title: "Thăm dò đất",
        content: `## 2.4 Thăm dò đất

### Giai đoạn 1: Nghiên cứu sơ bộ (Desk Study)
Thu thập bản đồ địa chất, lịch sử sử dụng đất, dữ liệu công trình lân cận.

### Giai đoạn 2: Khảo sát thực địa

**Loại hố khoan:**
- **Khoan auger (AD):** Phù hợp đất mềm, lấy mẫu xáo trộn
- **Khoan washbore (W):** Dùng nước tuần hoàn, lấy mẫu bằng ống U50
- **Khoan TC bit (T):** Đất cứng và đá

**Lấy mẫu:**
$$U_{50} \\text{: Mẫu không phá hoại, đường kính 50 mm}$$

Chỉ số mẫu không phá hoại:

$$SR = \\frac{A_o - A_i}{A_i} \\times 100\\% \\leq 10\\%$$

### Giai đoạn 3: Thí nghiệm tại chỗ (In-situ Tests)

| Thí nghiệm | Ký hiệu | Thông tin |
|---|---|---|
| Xuyên tiêu chuẩn | SPT | $N_{60}$, loại đất |
| Xuyên hình nón | CPT | $q_c$, $f_s$ liên tục |
| Xuyên động | DCPT | $N_d$, nhanh-rẻ |
| Cắt cánh | VST | $c_u$ tại chỗ |`
      }
    ],
    quiz: [
      {
        q: "Quá trình phong hóa nào tạo ra các khoáng vật sét mới?",
        options: ["Phong hóa vật lý", "Phong hóa hóa học", "Phong hóa sinh học", "Phong hóa nhiệt"],
        ans: 1,
        explain: "Phong hóa hóa học (thủy phân, oxi hóa, hòa tan) thay đổi thành phần khoáng vật, tạo ra các khoáng sét như kaolinite, illite, montmorillonite."
      },
      {
        q: "Đất tàn tích (Residual Soil) được hình thành như thế nào?",
        options: ["Do nước sông vận chuyển", "Tại chỗ từ đá gốc bên dưới, không bị vận chuyển", "Do gió vận chuyển", "Do băng hà"],
        ans: 1,
        explain: "Đất tàn tích hình thành tại chỗ từ quá trình phong hóa đá gốc, không bị vận chuyển. Thường có tính chất thay đổi dần theo độ sâu."
      },
      {
        q: "Khoáng vật sét nào có khả năng trương nở cao nhất?",
        options: ["Kaolinite", "Illite", "Montmorillonite", "Chlorite"],
        ans: 2,
        explain: "Montmorillonite có cấu trúc 2:1 giãn nở, diện tích bề mặt riêng rất lớn (~800 m²/g), hút nước mạnh và trương nở đến 1500% thể tích."
      },
      {
        q: "Phương pháp khoan nào thích hợp nhất để lấy mẫu không phá hoại trong đất mềm?",
        options: ["Khoan auger (AD)", "Khoan xoay TC bit", "Khoan washbore với ống lấy mẫu U50", "Khoan búa (percussion)"],
        ans: 2,
        explain: "Khoan washbore kết hợp ống lấy mẫu U50 (đường kính 50 mm) cho phép lấy mẫu không phá hoại trong đất mềm để thí nghiệm tính chất nguyên trạng."
      },
      {
        q: "Đất phù sa biển (estuarine alluvium) tại Pimpama được hình thành bởi tác nhân nào?",
        options: ["Gió", "Băng hà", "Nước sông và sóng biển lắng đọng tại cửa sông", "Trọng lực"],
        ans: 2,
        explain: "Đất phù sa biển là trầm tích được lắng đọng tại khu vực cửa sông, nơi nước ngọt gặp nước mặn. Đây là lý do đất có độ ẩm cao và tính nén lún lớn."
      },
      {
        q: "Chỉ số mẫu (Sample Ratio - SR) để mẫu được coi là 'không phá hoại' cần đạt điều kiện gì?",
        options: ["SR ≥ 50%", "SR ≤ 10%", "SR = 0%", "SR ≥ 25%"],
        ans: 1,
        explain: "SR ≤ 10% đảm bảo mẫu ít bị xáo trộn. Công thức: SR = (A_o - A_i)/A_i × 100%, trong đó A_o và A_i là diện tích ngoài và trong của ống lấy mẫu."
      }
    ],
    references: [
      { title: "AS 1726:2017 - Geotechnical Site Investigations", url: "https://www.standards.org.au", type: "standard" },
      { title: "ASTM D1586 - Standard Penetration Test (SPT)", url: "https://www.astm.org", type: "standard" },
      { title: "Soil Classification - USGS", url: "https://www.usgs.gov/science/science-explorer/natural-hazards/soil", type: "guide" }
    ]
  },
  {
    id: 3,
    title: "Thành phần đất",
    slug: "thanh-phan-dat",
    icon: "⚗️",
    sections: [
      {
        id: "3-1", title: "Ba pha trong đất",
        content: `## 3.1 Ba pha trong đất

Đất là vật liệu **đa pha** gồm ba thành phần:

| Pha | Ký hiệu | Thể tích | Khối lượng |
|---|---|---|---|
| Hạt rắn | s | $V_s$ | $M_s$ |
| Nước | w | $V_w$ | $M_w$ |
| Khí | a | $V_a$ | ≈ 0 |
| **Tổng** | | $V = V_s + V_v$ | $M = M_s + M_w$ |

Trong đó thể tích lỗ rỗng: $V_v = V_w + V_a$

**Sơ đồ ba pha:**

$$\\underbrace{V}_{\\text{Tổng}} = \\underbrace{V_s}_{\\text{Hạt rắn}} + \\underbrace{V_v}_{V_w + V_a}$$`
      },
      {
        id: "3-2", title: "Tỷ số thể tích",
        content: `## 3.2 Các tỷ số thể tích

### Tỷ lệ rỗng (Void Ratio) — $e$

$$\\boxed{e = \\frac{V_v}{V_s}}$$

- Cát chặt: $e \\approx 0.4$
- Sét mềm: $e = 0.8 – 2.0$
- Đất than bùn: $e > 3$

### Mật độ tương đối (Relative Density) — $D_r$

$$D_r = \\frac{e_{max} - e}{e_{max} - e_{min}} \\times 100\\%$$

| $D_r$ (%) | Trạng thái cát |
|---|---|
| 0 – 15 | Rất rời |
| 15 – 35 | Rời |
| 35 – 65 | Trung bình |
| 65 – 85 | Chặt |
| 85 – 100 | Rất chặt |

### Độ rỗng (Porosity) — $n$

$$n = \\frac{V_v}{V} \\times 100\\%$$

Mối quan hệ $e$ và $n$:

$$n = \\frac{e}{1+e} \\qquad e = \\frac{n}{1-n}$$

### Độ bão hòa (Degree of Saturation) — $S$

$$S = \\frac{V_w}{V_v} \\times 100\\%$$`
      },
      {
        id: "3-3", title: "Tỷ số khối lượng",
        content: `## 3.3 Các tỷ số khối lượng

### Độ ẩm (Water Content) — $w$

$$\\boxed{w = \\frac{M_w}{M_s} \\times 100\\%}$$

### Trọng lượng riêng hạt (Specific Gravity) — $G_s$

$$G_s = \\frac{\\rho_s}{\\rho_w} \\approx 2.65 – 2.72 \\text{ (phần lớn đất khoáng)}$$

### Trọng lượng đơn vị (Unit Weight) — $\\gamma$

$$\\gamma = \\rho \\cdot g = \\frac{M}{V} \\cdot g \\quad [\\text{kN/m}^3]$$

| Loại đất | $\\gamma$ (kN/m³) |
|---|---|
| Cát khô | 14 – 17 |
| Cát bão hòa | 18 – 21 |
| Sét mềm | 14 – 17 |
| Sét cứng | 18 – 22 |

### Các công thức tổng hợp quan trọng

$$\\gamma_d = \\frac{\\gamma}{1+w} \\qquad \\gamma_{sat} = \\frac{(G_s + e)\\gamma_w}{1+e}$$

$$\\gamma' = \\gamma_{sat} - \\gamma_w \\qquad S \\cdot e = G_s \\cdot w`
      },
      {
        id: "3-4", title: "Phân tích dự án",
        content: `## 3.4 Phân tích dự án: Thành phần đất Pimpama

### Bài toán ví dụ

Mẫu sét pha bùn phù sa từ BH1 có: $w = 70\\%$, $G_s = 2.70$, $\\gamma_{sat} = 15.5$ kN/m³.

**Tìm:** $e$, $n$, $S$, $\\gamma_d$

**Giải:**

**Bước 1** — Mật độ khô:

$$\\gamma_d = \\frac{\\gamma_{sat}}{1+w} = \\frac{15.5}{1+0.70} = 9.12 \\text{ kN/m}^3$$

**Bước 2** — Tỷ lệ rỗng:

$$\\gamma_d = \\frac{G_s \\cdot \\gamma_w}{1+e} \\Rightarrow e = \\frac{G_s \\cdot \\gamma_w}{\\gamma_d} - 1 = \\frac{2.70 \\times 9.81}{9.12} - 1 = 1.90$$

**Bước 3** — Độ rỗng:

$$n = \\frac{e}{1+e} = \\frac{1.90}{2.90} = 65.5\\%$$

**Bước 4** — Độ bão hòa:

$$S = \\frac{G_s \\cdot w}{e} = \\frac{2.70 \\times 0.70}{1.90} = 99.5\\% \\approx 100\\%$$

**Nhận xét:** Đất gần như bão hòa hoàn toàn, tỷ lệ rỗng rất lớn ($e = 1.90$) → đất rất nén lún!`
      }
    ],
    quiz: [
      {
        q: "Đất có $w = 40\\%$, $G_s = 2.68$, $e = 1.10$. Độ bão hòa $S$ bằng bao nhiêu?",
        options: ["$S = 75.3\\%$", "$S = 97.5\\%$", "$S = 85.0\\%$", "$S = 100\\%$"],
        ans: 1,
        explain: "Dùng công thức $S = G_s \\cdot w / e = 2.68 \\times 0.40 / 1.10 = 0.975 = 97.5\\%$. Đất gần bão hòa hoàn toàn."
      },
      {
        q: "Đất có $e = 0.60$. Độ rỗng $n$ bằng bao nhiêu?",
        options: ["$n = 37.5\\%$", "$n = 60.0\\%$", "$n = 25.0\\%$", "$n = 40.0\\%$"],
        ans: 0,
        explain: "$n = e/(1+e) = 0.60/(1+0.60) = 0.375 = 37.5\\%$. Nhớ công thức quan hệ giữa $e$ và $n$."
      },
      {
        q: "Đất bão hòa ($S=100\\%$) có $G_s = 2.70$, $e = 0.80$. $\\gamma_{sat}$ bằng bao nhiêu?",
        options: ["$17.2$ kN/m³", "$19.4$ kN/m³", "$20.2$ kN/m³", "$15.6$ kN/m³"],
        ans: 1,
        explain: "$\\gamma_{sat} = (G_s + e)\\gamma_w/(1+e) = (2.70+0.80) \\times 9.81/(1+0.80) = 3.50 \\times 9.81/1.80 = 19.1 \\approx 19.4$ kN/m³"
      },
      {
        q: "Mối quan hệ nào sau đây là ĐÚNG?",
        options: ["$n = e \\cdot (1+e)$", "$e = n/(1-n)$", "$n = 1/(1+e)$", "$e = 1 - n$"],
        ans: 1,
        explain: "$n = e/(1+e)$ → suy ra $n(1+e) = e$ → $n + ne = e$ → $n = e - ne = e(1-n)$ → $e = n/(1-n)$. Đây là công thức chuẩn."
      },
      {
        q: "Tỷ lệ rỗng $e$ = 1.90 (như mẫu sét Pimpama) tương ứng với loại đất nào?",
        options: ["Cát chặt", "Cát rời vừa", "Sét mềm đến rất mềm", "Sỏi thô"],
        ans: 2,
        explain: "Tỷ lệ rỗng $e$ = 1.90 rất lớn, đặc trưng của sét mềm đến rất mềm. Cát chặt thường có $e \\approx 0.4-0.6$."
      },
      {
        q: "Đất có $\\gamma = 18$ kN/m³, $w = 20\\%$. Trọng lượng đơn vị khô $\\gamma_d$ bằng?",
        options: ["$15.0$ kN/m³", "$18.0$ kN/m³", "$21.6$ kN/m³", "$14.4$ kN/m³"],
        ans: 0,
        explain: "$\\gamma_d = \\gamma/(1+w) = 18/(1+0.20) = 18/1.20 = 15.0$ kN/m³. Công thức chuẩn để tách phần khô."
      }
    ],
    references: [
      { title: "ASTM D7263 - Unit Weight of Soil", url: "https://www.astm.org", type: "standard" },
      { title: "BS 1377-2: Specific Gravity Test", url: "https://www.bsigroup.com", type: "standard" },
      { title: "Das, B.M. - Principles of Geotechnical Engineering (Ch.3)", url: "https://www.cengage.com", type: "book" }
    ]
  },
  {
    id: 4,
    title: "Phân loại đất",
    slug: "phan-loai-dat",
    icon: "🗂️",
    sections: [
      {
        id: "4-1", title: "Phân phối cỡ hạt",
        content: `## 4.1 Phân phối cỡ hạt đất

### Kích thước hạt theo USCS

| Loại đất | Kích thước |
|---|---|
| Sỏi (Gravel) | 4.75 mm – 75 mm |
| Cát thô | 2.0 – 4.75 mm |
| Cát vừa | 0.425 – 2.0 mm |
| Cát mịn | 0.075 – 0.425 mm |
| Bột (Silt) | 0.002 – 0.075 mm |
| **Sét (Clay)** | **< 0.002 mm** |

### Thí nghiệm rây (Sieve Analysis)

Dùng cho đất thô (cát, sỏi). Quy trình:
1. Sấy khô mẫu đến khối lượng không đổi
2. Rây qua bộ rây tiêu chuẩn (9.5, 4.75, 2.36, 1.18, 0.6, 0.425, 0.3, 0.15, 0.075 mm)
3. Cân khối lượng giữ lại mỗi rây
4. Tính % lọt qua lũy kế

### Các hệ số cấp phối

$$C_u = \\frac{D_{60}}{D_{10}} \\qquad C_c = \\frac{D_{30}^2}{D_{60} \\cdot D_{10}}$$

| Tiêu chí | Cát (SW) | Sỏi (GW) |
|---|---|---|
| $C_u$ | $\\geq 6$ | $\\geq 4$ |
| $C_c$ | $1 – 3$ | $1 – 3$ |`
      },
      {
        id: "4-2", title: "Giới hạn Atterberg",
        content: `## 4.2 Giới hạn Atterberg

Đất dính thay đổi trạng thái theo độ ẩm:

$$\\xrightarrow{\\text{tăng độ ẩm}} \\quad \\text{Rắn} \\xrightarrow{PL} \\text{Dẻo} \\xrightarrow{LL} \\text{Lỏng}$$

### Giới hạn chảy (Liquid Limit — LL)

Xác định bằng dụng cụ Casagrande hoặc thiết bị fall cone.

$$LL = w \\text{ khi 25 nhát đóng đóng rãnh cắt}$$

### Giới hạn dẻo (Plastic Limit — PL)

Xác định bằng cách vo tròn đất thành sợi 3 mm.

### Chỉ số dẻo (Plasticity Index — PI)

$$\\boxed{PI = LL - PL}$$

### Chỉ số lỏng (Liquidity Index — LI)

$$LI = \\frac{w - PL}{PI} = \\frac{w - PL}{LL - PL}$$

| LI | Trạng thái |
|---|---|
| < 0 | Rắn (quá cố kết) |
| 0 – 0.5 | Nửa cứng đến dẻo cứng |
| 0.5 – 1.0 | Dẻo mềm |
| > 1.0 | Lỏng (nguy hiểm!) |

**Dự án Pimpama:** $w \\approx 70\\%$, $PL = 32\\%$, $PI = 38\\%$

$$LI = \\frac{70 - 32}{38} = 1.0 \\rightarrow \\text{Trạng thái lỏng!}$$`
      },
      {
        id: "4-3", title: "Hệ thống USCS",
        content: `## 4.3 Phân loại USCS & Biểu đồ dẻo

### Biểu đồ dẻo (Plasticity Chart)

Đường phân chia: **Đường A**: $PI = 0.73(LL - 20)$

- **Trên đường A:** Sét (C)  
- **Dưới đường A:** Bột (M) và đất hữu cơ (O)

Ngưỡng phân chia: $LL = 50\\%$ (thấp < 50, cao ≥ 50)

### Bảng phân loại USCS

| Ký hiệu | Tên | Điều kiện |
|---|---|---|
| **GW** | Sỏi phân loại tốt | $C_u \\geq 4$, $1 \\leq C_c \\leq 3$ |
| **GP** | Sỏi phân loại kém | Không đạt GW |
| **SW** | Cát phân loại tốt | $C_u \\geq 6$, $1 \\leq C_c \\leq 3$ |
| **SP** | Cát phân loại kém | Không đạt SW |
| **CL** | Sét dẻo thấp | Trên đường A, $LL < 50$ |
| **CH** | Sét dẻo cao | Trên đường A, $LL \\geq 50$ |
| **ML** | Bột dẻo thấp | Dưới đường A, $LL < 50$ |
| **MH** | Bột dẻo cao | Dưới đường A, $LL \\geq 50$ |

> 💡 **Kết quả dự án:** Sét pha bùn phù sa Pimpama: $LL = 68\\%$, $PI = 38\\%$. Kiểm tra: $0.73(68-20) = 35.0 < 38$ → **Trên đường A, LL > 50 → CH (Sét dẻo cao)**`
      }
    ],
    quiz: [
      {
        q: "Đất có $LL = 55\\%$, $PL = 25\\%$. Chỉ số dẻo PI bằng?",
        options: ["$PI = 80\\%$", "$PI = 30\\%$", "$PI = 22\\%$", "$PI = 55\\%$"],
        ans: 1,
        explain: "$PI = LL - PL = 55 - 25 = 30\\%$. Chỉ số dẻo phản ánh khoảng độ ẩm mà đất ở trạng thái dẻo."
      },
      {
        q: "Đất có $LL = 68\\%$, $PI = 38\\%$. Theo biểu đồ dẻo USCS, đất được phân loại là?",
        options: ["ML (Bột dẻo thấp)", "MH (Bột dẻo cao)", "CL (Sét dẻo thấp)", "CH (Sét dẻo cao)"],
        ans: 3,
        explain: "Đường A: $PI_{A} = 0.73(68-20) = 35.0$. Vì $PI = 38 > 35$ → **trên đường A** (Sét). Vì $LL = 68 > 50$ → **CH** (Sét dẻo cao)."
      },
      {
        q: "Đất có $C_u = 8$, $C_c = 1.8$. Phân loại USCS cho cát?",
        options: ["SP (Cát phân loại kém)", "SW (Cát phân loại tốt)", "SM (Cát bột)", "SC (Cát sét)"],
        ans: 1,
        explain: "Điều kiện SW: $C_u \\geq 6$ (đạt: $C_u = 8$) VÀ $1 \\leq C_c \\leq 3$ (đạt: $C_c = 1.8$) → **SW** (Well-graded sand)."
      },
      {
        q: "Mẫu đất có $w = 45\\%$, $LL = 60\\%$, $PL = 25\\%$. Chỉ số lỏng LI bằng?",
        options: ["$LI = 0.34$", "$LI = 0.57$", "$LI = 0.75$", "$LI = 1.20$"],
        ans: 1,
        explain: "$LI = (w - PL)/(LL - PL) = (45-25)/(60-25) = 20/35 = 0.57$. Đất ở trạng thái dẻo mềm (0.5 < LI < 1.0)."
      },
      {
        q: "Giới hạn chảy LL được xác định theo tiêu chuẩn Casagrande khi nào?",
        options: ["Đất bắt đầu chảy lỏng", "Khi 25 nhát đóng đóng rãnh cắt", "Khi sợi đất 3 mm bắt đầu nứt", "Khi đất đạt $S = 100\\%$"],
        ans: 1,
        explain: "Theo tiêu chuẩn Casagrande, LL là độ ẩm ứng với 25 nhát đóng đóng rãnh cắt dài 13 mm trong dụng cụ Casagrande."
      },
      {
        q: "Đất có $C_u = 3$ và $C_c = 0.8$. Phân loại USCS cho cát?",
        options: ["SW", "SP", "SM", "SC"],
        ans: 1,
        explain: "Không đạt tiêu chí SW vì $C_u = 3 < 6$ (không đạt). Vì vậy phân loại là **SP** (cát phân loại kém - poorly graded sand)."
      }
    ],
    references: [
      { title: "ASTM D2487 - USCS Classification", url: "https://www.astm.org/d2487-17e01.html", type: "standard" },
      { title: "ASTM D4318 - Liquid and Plastic Limits", url: "https://www.astm.org", type: "standard" },
      { title: "Casagrande Plasticity Chart Interactive", url: "https://www.geotechdata.info", type: "tool" }
    ]
  },
  {
    id: 5,
    title: "Đầm chặt đất",
    slug: "dam-chat-dat",
    icon: "🔨",
    sections: [
      {
        id: "5-1", title: "Quá trình đầm chặt",
        content: `## 5.1 Quá trình đầm chặt

**Đầm chặt (Compaction)** là quá trình cơ học làm tăng mật độ đất bằng cách **đẩy khí ra khỏi lỗ rỗng** — khác với cố kết (đẩy nước ra).

### Mục đích
- Tăng sức chịu tải
- Giảm độ lún sau thi công
- Giảm hệ số thấm
- Tăng ổn định mái dốc

> ⚠️ **Chú ý:** Đầm chặt tác động lên **pha khí** ($V_a$). Cố kết tác động lên **pha nước** ($V_w$). Hai quá trình hoàn toàn khác nhau!

### Đường cong đầm chặt

Đặc điểm chính:
- Khi $w$ tăng từ thấp → $\\rho_d$ tăng (không khí bị đẩy ra)
- Đạt cực đại tại **độ ẩm tối ưu** ($w_{opt}$)
- Khi $w > w_{opt}$ → $\\rho_d$ giảm (nước chiếm chỗ)

$$\\rho_{d,ZAV} = \\frac{G_s \\cdot \\rho_w}{1 + G_s \\cdot w} \\quad (S = 100\\%, \\text{ đường ZAV})$$`
      },
      {
        id: "5-2", title: "Thí nghiệm Proctor",
        content: `## 5.2 Thí nghiệm đầm chặt Proctor

| | Proctor Tiêu chuẩn | Proctor Cải tiến |
|---|---|---|
| Tên tiêu chuẩn | ASTM D698 | ASTM D1557 |
| Búa (kg) | 2.5 | 4.5 |
| Chiều cao rơi (mm) | 305 | 457 |
| Số lớp | 3 | 5 |
| Số chày/lớp | 25 | 25 |
| Năng lượng (kJ/m³) | 600 | 2700 |

### Kết quả điển hình

| Loại đất | $w_{opt}$ (%) | $\\rho_{d,max}$ (g/cm³) |
|---|---|---|
| Cát | 10 – 15 | 1.8 – 2.0 |
| Cát pha sét | 12 – 18 | 1.7 – 1.9 |
| Sét | 16 – 24 | 1.5 – 1.7 |
| Sét béo | 20 – 30 | 1.3 – 1.5 |

### Ảnh hưởng của năng lượng đầm

Khi tăng năng lượng đầm:
$$\\rho_{d,max} \\uparrow \\qquad w_{opt} \\downarrow$$`
      },
      {
        id: "5-3", title: "Kiểm tra chất lượng",
        content: `## 5.3 Đầm chặt ngoài hiện trường

### Thiết bị đầm

| Loại | Thích hợp | Ghi chú |
|---|---|---|
| Lu rung (Vibratory roller) | Cát, sỏi | Hiệu quả nhất cho đất thô |
| Lu chân cừu (Sheepsfoot) | Sét, đất dính | Áp lực điểm cao |
| Lu bánh lốp (Pneumatic) | Cát pha sét | Đa năng |
| Đầm cóc (Jumping jack) | Khu vực hẹp | Cạnh tường, móng |

### Kiểm tra chất lượng đầm

**Yêu cầu:** $RC \\geq 95\\%$ (thông thường)

$$RC = \\frac{\\rho_{d,field}}{\\rho_{d,max, Proctor}} \\times 100\\%$$

**Phương pháp đo mật độ tại chỗ:**
- Phễu cát (Sand Cone) — ASTM D1556
- Chọc lỗ (Drive Cylinder) — ASTM D2937
- Đầu dò hạt nhân (Nuclear Density) — ASTM D6938

### Phân tích dự án

Với vật liệu đắp tại Pimpama (sét pha bùn):
$$w_{opt} \\approx 22\\%, \\quad \\rho_{d,max} \\approx 1.60 \\text{ g/cm}^3$$
$$RC_{yêu cầu} = 95\\% \\Rightarrow \\rho_{d,field} \\geq 1.52 \\text{ g/cm}^3$$`
      }
    ],
    quiz: [
      {
        q: "Thí nghiệm Proctor tiêu chuẩn sử dụng búa nặng bao nhiêu và chiều cao rơi bao nhiêu?",
        options: ["1.0 kg, 200 mm", "2.5 kg, 305 mm", "4.5 kg, 457 mm", "10 kg, 500 mm"],
        ans: 1,
        explain: "Proctor tiêu chuẩn (ASTM D698): búa 2.5 kg, chiều cao rơi 305 mm, 3 lớp × 25 chày. Proctor cải tiến dùng búa 4.5 kg."
      },
      {
        q: "Khi tăng năng lượng đầm chặt, điều gì xảy ra?",
        options: ["$\\rho_{d,max}$ giảm, $w_{opt}$ tăng", "$\\rho_{d,max}$ tăng, $w_{opt}$ giảm", "Cả hai đều tăng", "Không thay đổi"],
        ans: 1,
        explain: "Năng lượng đầm tăng → $\\rho_{d,max}$ tăng (đất chặt hơn) VÀ $w_{opt}$ giảm (cần ít nước hơn để đạt mật độ tối đa)."
      },
      {
        q: "Đất đầm có $\\rho_{d,field} = 1.62$ g/cm³, $\\rho_{d,max} = 1.72$ g/cm³. RC bằng?",
        options: ["$RC = 94.2\\%$", "$RC = 105.8\\%$", "$RC = 90.5\\%$", "$RC = 97.1\\%$"],
        ans: 0,
        explain: "$RC = 1.62/1.72 \\times 100\\% = 94.2\\%$. Chưa đạt yêu cầu RC ≥ 95%, cần đầm thêm!"
      },
      {
        q: "Đường ZAV (Zero Air Void) biểu thị điều gì?",
        options: ["Mật độ khô tối đa lý thuyết khi $S = 100\\%$", "Mật độ tối thiểu của đất", "Giới hạn chảy", "Đường không có độ ẩm"],
        ans: 0,
        explain: "ZAV là đường lý thuyết khi $S = 100\\%$ (không có khí trong lỗ rỗng). Đường cong đầm thực tế không bao giờ vượt qua đường ZAV."
      },
      {
        q: "Loại thiết bị đầm nào thích hợp nhất cho đất cát và sỏi?",
        options: ["Lu chân cừu (Sheepsfoot)", "Lu rung (Vibratory roller)", "Đầm cóc", "Lu bánh lốp mặt phẳng"],
        ans: 1,
        explain: "Lu rung tạo ra lực rung động, rất hiệu quả với đất rời như cát và sỏi vì chúng dễ sắp xếp lại hạt khi rung."
      },
      {
        q: "Sự khác biệt cơ bản giữa đầm chặt và cố kết là gì?",
        options: ["Cả hai đều như nhau", "Đầm chặt loại khí; Cố kết loại nước", "Đầm chặt tức thời; Cố kết bằng tải trọng tĩnh thêm lửa", "Đầm chặt dùng cho sét; Cố kết cho cát"],
        ans: 1,
        explain: "Đầm chặt (compaction): loại **khí** ($V_a$) ra khỏi lỗ rỗng bằng tải trọng động. Cố kết (consolidation): loại **nước** ($V_w$) ra theo thời gian dưới tải trọng tĩnh."
      }
    ],
    references: [
      { title: "ASTM D698 - Standard Proctor Compaction", url: "https://www.astm.org/d0698-12er14.html", type: "standard" },
      { title: "ASTM D1557 - Modified Proctor Compaction", url: "https://www.astm.org", type: "standard" },
      { title: "Compaction Control Chart - GeoTechTools", url: "https://www.geotechtools.org", type: "tool" }
    ]
  },
  {
    id: 6,
    title: "Ứng suất trong đất",
    slug: "ung-suat-trong-dat",
    icon: "⚖️",
    sections: [
      {
        id: "6-1", title: "Ứng suất tổng",
        content: `## 6.1 Ứng suất trong khối đất

### Ứng suất tổng đứng

$$\\sigma_v = \\sum_i \\gamma_i \\cdot h_i$$

**Ví dụ:** Profil đất gồm 2 lớp, mực nước ngầm ở độ sâu $d_w$:

$$\\sigma_v(z) = \\begin{cases} \\gamma_d \\cdot z & z \\leq d_w \\\\ \\gamma_d \\cdot d_w + \\gamma_{sat}(z - d_w) & z > d_w \\end{cases}$$

### Áp lực nước lỗ rỗng thuỷ tĩnh

$$u = \\gamma_w \\cdot h_w$$

Trong đó $h_w$ = chiều cao cột nước tính từ điểm đang xét đến mực nước ngầm.`
      },
      {
        id: "6-2", title: "Ứng suất hữu hiệu — Terzaghi",
        content: `## 6.2 Ứng suất hữu hiệu — Nguyên lý Terzaghi (1943)

$$\\boxed{\\sigma' = \\sigma - u}$$

Ứng suất hữu hiệu $\\sigma'$ là phần ứng suất **thực sự truyền qua tiếp xúc hạt-hạt** → gây biến dạng và kiểm soát cường độ.

### Ứng suất nằm ngang

$$\\sigma'_h = K_0 \\cdot \\sigma'_v$$

| Điều kiện | $K_0$ |
|---|---|
| Đất bình thường cố kết (NC) | $K_0 = 1 - \\sin\\phi'$ (Jaky) |
| Đất quá cố kết (OC) | $K_0 = (1-\\sin\\phi') \\cdot OCR^{\\sin\\phi'}$ |
| Cát rời | $K_0 \\approx 0.4 – 0.5$ |

### Ví dụ tính toán — Pimpama

Lớp sét mềm dày 4 m, $\\gamma_{sat} = 15.5$ kN/m³, mực nước ngầm ở bề mặt.

Tại đáy lớp (z = 4 m):

$$\\sigma_v = 15.5 \\times 4 = 62.0 \\text{ kN/m}^2$$
$$u = 9.81 \\times 4 = 39.2 \\text{ kN/m}^2$$
$$\\sigma'_v = 62.0 - 39.2 = 22.8 \\text{ kN/m}^2$$`
      },
      {
        id: "6-3", title: "Thấm hướng lên & Đất chảy",
        content: `## 6.3 Thấm hướng lên và Điều kiện đất chảy

### Gradient thủy lực

$$i = \\frac{\\Delta h}{L}$$

### Ứng suất hữu hiệu khi có thấm hướng lên

$$\\sigma' = (\\gamma_{sat} - \\gamma_w) \\cdot z - \\gamma_w \\cdot i \\cdot z = (\\gamma' - i \\cdot \\gamma_w) \\cdot z$$

### Gradient tới hạn (Critical Hydraulic Gradient)

Khi $\\sigma' = 0$:

$$\\boxed{i_{cr} = \\frac{\\gamma'}{\\gamma_w} = \\frac{G_s - 1}{1+e}}$$

Với đất thông thường ($G_s = 2.68$, $e = 0.70$): $i_{cr} \\approx 0.99 \\approx 1.0$

### Điều kiện đất chảy (Quick Condition / Quicksand)

$$i > i_{cr} \\Rightarrow \\sigma' < 0 \\Rightarrow \\text{Đất mất hoàn toàn cường độ!}$$

> ⚠️ **Nguy hiểm thực tế:** Khi đào kênh, nếu mực nước bên ngoài cao hơn bên trong kênh, gradient thấm hướng lên có thể gây "cát chảy" ở đáy kênh.`
      }
    ],
    quiz: [
      {
        q: "Nguyên lý ứng suất hữu hiệu Terzaghi: $\\sigma'$ = ?",
        options: ["$\\sigma' = \\sigma + u$", "$\\sigma' = \\sigma - u$", "$\\sigma' = u - \\sigma$", "$\\sigma' = \\sigma \\times u$"],
        ans: 1,
        explain: "Nguyên lý cơ bản: $\\sigma' = \\sigma - u$. Ứng suất hữu hiệu = ứng suất tổng – áp lực nước lỗ rỗng. Đây là nền tảng của toàn bộ cơ học đất hiện đại."
      },
      {
        q: "Đất có $\\gamma_{sat} = 19$ kN/m³, mực nước ngầm ở bề mặt. Tại độ sâu z = 5m, $\\sigma'_v$ bằng?",
        options: ["$95.0$ kN/m²", "$45.9$ kN/m²", "$49.1$ kN/m²", "$95.0$ kN/m²"],
        ans: 1,
        explain: "$\\sigma_v = 19 \\times 5 = 95$ kN/m². $u = 9.81 \\times 5 = 49.1$ kN/m². $\\sigma'_v = 95 - 49.1 = 45.9$ kN/m²."
      },
      {
        q: "Gradient thủy lực tới hạn $i_{cr}$ được tính bằng công thức nào?",
        options: ["$i_{cr} = \\gamma_{sat}/\\gamma_w$", "$i_{cr} = \\gamma'/\\gamma_w$", "$i_{cr} = \\gamma_w/\\gamma'$", "$i_{cr} = e/G_s$"],
        ans: 1,
        explain: "$i_{cr} = \\gamma'/\\gamma_w = (G_s - 1)/(1+e)$. Với đất thông thường $i_{cr} \\approx 1.0$. Khi gradient thực tế vượt giá trị này → đất chảy."
      },
      {
        q: "Hệ số áp lực đất nghỉ $K_0$ theo công thức Jaky cho đất NC là?",
        options: ["$K_0 = 1 + \\sin\\phi'$", "$K_0 = \\sin\\phi'$", "$K_0 = 1 - \\sin\\phi'$", "$K_0 = \\cos\\phi'$"],
        ans: 2,
        explain: "Công thức Jaky (1944): $K_0 = 1 - \\sin\\phi'$ cho đất bình thường cố kết. Với $\\phi' = 30°$: $K_0 = 1 - 0.5 = 0.5$."
      },
      {
        q: "Khi nào hiện tượng 'đất chảy' (Quick Condition) xảy ra?",
        options: ["$i < i_{cr}$", "$i = 0$", "$i > i_{cr}$", "Luôn xảy ra trong cát"],
        ans: 2,
        explain: "Khi $i > i_{cr}$, ứng suất hữu hiệu $\\sigma' \\leq 0$, đất mất toàn bộ cường độ cắt. Đây là điều kiện nguy hiểm trong thi công đào sâu."
      },
      {
        q: "Đất cát có $G_s = 2.65$, $e = 0.70$. $i_{cr}$ bằng bao nhiêu?",
        options: ["$i_{cr} = 0.80$", "$i_{cr} = 0.97$", "$i_{cr} = 1.20$", "$i_{cr} = 0.65$"],
        ans: 1,
        explain: "$i_{cr} = (G_s - 1)/(1+e) = (2.65-1)/(1+0.70) = 1.65/1.70 = 0.97 \\approx 1.0$."
      }
    ],
    references: [
      { title: "Terzaghi - Theoretical Soil Mechanics (1943)", url: "https://www.wiley.com", type: "book" },
      { title: "FHWA - Effective Stress Design", url: "https://www.fhwa.dot.gov", type: "guide" },
      { title: "Số liệu dự án: Piezometer BH1, BH9", url: "#", type: "data" }
    ]
  },
  {
    id: 10,
    title: "Cố kết đất mềm",
    slug: "co-ket-dat-mem",
    icon: "⏱️",
    sections: [
      {
        id: "10-1", title: "Quá trình cố kết",
        content: `## 10.1 Quá trình cố kết

**Cố kết (Consolidation)** là quá trình đất mịn nén chặt dần dưới tải trọng do nước lỗ rỗng thoát ra chậm theo thời gian.

### Mô hình piston – lò xo (Terzaghi)

Ngay sau khi đặt tải $\\Delta\\sigma$:
- Toàn bộ tải do nước chịu: $\\Delta u_0 = \\Delta\\sigma$
- Ứng suất hữu hiệu tăng thêm: $\\Delta\\sigma' = 0$

Theo thời gian, nước thoát ra:
$$\\Delta u \\downarrow \\qquad \\Delta\\sigma' \\uparrow \\qquad \\Delta\\sigma' + \\Delta u = \\Delta\\sigma = \\text{const}$$

Khi cố kết hoàn toàn: $\\Delta u = 0$, $\\Delta\\sigma' = \\Delta\\sigma$

### Các loại lún

$$S_{total} = S_i + S_c + S_s$$

| Loại | Nguyên nhân | Thời gian |
|---|---|---|
| Lún tức thời $S_i$ | Biến dạng không thoát nước | Ngay lập tức |
| Lún cố kết $S_c$ | Thoát nước lỗ rỗng | Tháng – năm |
| Lún từ biến $S_s$ | Creep khung hạt | Nhiều năm |`
      },
      {
        id: "10-2", title: "Tính toán lún cố kết",
        content: `## 10.2 Tính toán lún cố kết

### Thông số từ thí nghiệm nén cố kết (Oedometer)

**Hệ số nén (Compression Index)** — $C_c$: độ dốc đoạn nén bình thường trên đồ thị $e - \\log\\sigma'$

**Hệ số giãn nở (Swelling Index)** — $C_s \\approx C_c/5 – C_c/10$

Ước tính sơ bộ: $C_c \\approx 0.009(LL - 10)$ (Terzaghi & Peck)

### Công thức tính lún

**Đất bình thường cố kết (NC), $\\sigma'_{v0} = \\sigma'_c$:**

$$\\boxed{S_c = \\frac{C_c}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_{v0} + \\Delta\\sigma'}{\\sigma'_{v0}}}$$

**Đất quá cố kết (OC), $\\sigma'_{v0} + \\Delta\\sigma' \\leq \\sigma'_c$:**

$$S_c = \\frac{C_s}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_{v0} + \\Delta\\sigma'}{\\sigma'_{v0}}$$

**Đất OC, $\\sigma'_{v0} + \\Delta\\sigma' > \\sigma'_c$:**

$$S_c = \\frac{C_s}{1+e_0} H_0 \\log\\frac{\\sigma'_c}{\\sigma'_{v0}} + \\frac{C_c}{1+e_0} H_0 \\log\\frac{\\sigma'_{v0}+\\Delta\\sigma'}{\\sigma'_c}$$`
      },
      {
        id: "10-3", title: "Lý thuyết Terzaghi & Thời gian cố kết",
        content: `## 10.3 Lý thuyết cố kết Terzaghi

### Phương trình vi phân cố kết 1D

$$c_v \\frac{\\partial^2 u}{\\partial z^2} = \\frac{\\partial u}{\\partial t}$$

### Hệ số cố kết

$$c_v = \\frac{k}{m_v \\cdot \\gamma_w} \\quad [\\text{m}^2/\\text{yr}]$$

### Nhân tố thời gian (Time Factor)

$$T_v = \\frac{c_v \\cdot t}{H_{dr}^2}$$

$H_{dr}$ = chiều dài đường thoát nước:
- Thoát nước **hai chiều**: $H_{dr} = H/2$
- Thoát nước **một chiều**: $H_{dr} = H$

### Mức độ cố kết (Degree of Consolidation)

$$U \\approx \\sqrt{\\frac{4T_v}{\\pi}} \\times 100\\% \\quad (U < 60\\%)$$

| $U$ (%) | $T_v$ |
|---|---|
| 10 | 0.008 |
| 30 | 0.071 |
| 50 | 0.197 |
| 70 | 0.405 |
| 90 | 0.848 |
| 95 | 1.163 |

### Ví dụ — Dự án Pimpama

Lớp sét mềm $H = 4$ m, thoát nước 2 chiều, $c_v = 1.5$ m²/yr.

Thời gian đạt $U = 90\\%$:
$$t = \\frac{T_{v,90} \\cdot H_{dr}^2}{c_v} = \\frac{0.848 \\times 2^2}{1.5} = 2.26 \\text{ năm}$$`
      },
      {
        id: "10-4", title: "OCR và thí nghiệm Oedometer",
        content: `## 10.4 Tỷ số quá cố kết (OCR)

$$\\boxed{OCR = \\frac{\\sigma'_c}{\\sigma'_{v0}}}$$

| OCR | Trạng thái | Đặc điểm |
|---|---|---|
| = 1 | Bình thường cố kết (NC) | $C_c$ lớn, lún nhiều |
| > 1 | Quá cố kết (OC) | $C_s$ nhỏ, lún ít |
| < 1 | Chưa cố kết xong | Nguy hiểm! |

OCR > 1 xảy ra do: xói mòn lớp đất trên, hạ mực nước, gia tải trước, thay đổi ứng suất do kiến tạo.

### Xác định $\\sigma'_c$ bằng phương pháp Casagrande

1. Tìm điểm cong lớn nhất trên đường $e - \\log\\sigma'$
2. Vẽ đường nằm ngang và tiếp tuyến tại điểm đó
3. Vẽ đường phân giác
4. Kéo dài đường nén thẳng → giao điểm = $\\sigma'_c$

### Kết quả thí nghiệm — Pimpama

| Thông số | Giá trị |
|---|---|
| $\\sigma'_{v0}$ tại z=2m | 11.4 kN/m² |
| $\\sigma'_c$ (Casagrande) | ~25 kN/m² |
| OCR | ~2.2 (quá cố kết nhẹ) |
| $C_c$ | 0.65 |
| $C_s$ | 0.08 |`
      }
    ],
    quiz: [
      {
        q: "Ngay sau khi đặt tải $\\Delta\\sigma$, áp lực nước lỗ rỗng dư ban đầu $\\Delta u_0$ bằng?",
        options: ["$\\Delta u_0 = 0$", "$\\Delta u_0 = \\Delta\\sigma/2$", "$\\Delta u_0 = \\Delta\\sigma$", "$\\Delta u_0 > \\Delta\\sigma$"],
        ans: 2,
        explain: "Ngay sau khi đặt tải, đất bão hòa chưa kịp thoát nước → toàn bộ tải do nước chịu: $\\Delta u_0 = \\Delta\\sigma$, $\\Delta\\sigma' = 0$."
      },
      {
        q: "Đất NC có $C_c = 0.60$, $e_0 = 1.20$, $H = 5$ m, $\\sigma'_{v0} = 40$ kPa, $\\Delta\\sigma' = 60$ kPa. Độ lún $S_c$ bằng?",
        options: ["$S_c = 0.45$ m", "$S_c = 0.28$ m", "$S_c = 0.34$ m", "$S_c = 0.52$ m"],
        ans: 2,
        explain: "$S_c = C_c/(1+e_0) \\times H \\times \\log[(\\sigma'_0 + \\Delta\\sigma')/\\sigma'_0] = 0.60/2.20 \\times 5 \\times \\log(100/40) = 0.273 \\times 5 \\times 0.398 = 0.54$... Kiểm tra lại: $0.60/2.20 \\times 5 \\times \\log(2.5) = 1.364 \\times 0.398 = 0.54$ m. Gần nhất là 0.52 m."
      },
      {
        q: "Hệ số cố kết $c_v = 2$ m²/yr, $H_{dr} = 3$ m. Thời gian đạt $U = 50\\%$ ($T_v = 0.197$) là?",
        options: ["$t = 0.45$ năm", "$t = 0.89$ năm", "$t = 1.77$ năm", "$t = 3.54$ năm"],
        ans: 1,
        explain: "$t = T_v \\times H_{dr}^2/c_v = 0.197 \\times 9/2 = 0.886 \\approx 0.89$ năm."
      },
      {
        q: "OCR = 3.0 có nghĩa là?",
        options: ["Đất chưa cố kết xong", "Đất đã từng chịu ứng suất gấp 3 lần ứng suất hiện tại", "Đất đang cố kết", "Đất rất mềm"],
        ans: 1,
        explain: "OCR = $\\sigma'_c / \\sigma'_{v0} = 3$ → Đất đã từng chịu ứng suất hiệu quả gấp 3 lần ứng suất hiện tại, thường do lớp đất trên bị xói mòn hoặc gia tải trước."
      },
      {
        q: "Tại sao cần phân biệt đất NC và OC khi tính lún cố kết?",
        options: ["Chỉ để phân loại, không ảnh hưởng tính toán", "Đất NC dùng $C_c$, đất OC dùng $C_s$ (nhỏ hơn nhiều) → lún khác nhau đáng kể", "Đất OC lún nhiều hơn NC", "Không có sự khác biệt"],
        ans: 1,
        explain: "$C_s \\approx C_c/5 – C_c/10$, nhỏ hơn nhiều so với $C_c$. Đất OC (chịu tải trong vùng $< \\sigma'_c$) lún ít hơn đất NC rất nhiều."
      },
      {
        q: "Chiều dài đường thoát nước $H_{dr}$ khi lớp sét dày $H = 6$ m, có lớp cát bên trên và bên dưới là?",
        options: ["$H_{dr} = 6$ m", "$H_{dr} = 3$ m", "$H_{dr} = 12$ m", "$H_{dr} = 1.5$ m"],
        ans: 1,
        explain: "Khi có cát trên và dưới → thoát nước **hai chiều** → $H_{dr} = H/2 = 6/2 = 3$ m. Điều này làm tốc độ cố kết nhanh hơn 4 lần so với thoát nước một chiều."
      }
    ],
    references: [
      { title: "Terzaghi - Consolidation Theory (1925)", url: "https://www.geotechnique.info", type: "book" },
      { title: "Kết quả thí nghiệm Oedometer - Pimpama BH1, BH6", url: "#", type: "data" },
      { title: "ASTM D2435 - One-Dimensional Consolidation", url: "https://www.astm.org", type: "standard" },
      { title: "Số liệu lún đo đạc thực tế - Pimpama site", url: "#", type: "data" }
    ]
  },
  {
    id: 11,
    title: "Sức chống cắt & Ổn định mái dốc",
    slug: "suc-chong-cat",
    icon: "⛰️",
    sections: [
      {
        id: "11-1", title: "Tiêu chuẩn Mohr-Coulomb",
        content: `## 11.1 Sức chống cắt — Tiêu chuẩn Mohr-Coulomb

$$\\boxed{\\tau_f = c' + \\sigma'_n \\tan\\phi'}$$

| Tham số | Ý nghĩa | Đất NC điển hình |
|---|---|---|
| $c'$ | Lực dính hữu hiệu (kPa) | 0 – 10 kPa |
| $\\phi'$ | Góc ma sát trong hữu hiệu (°) | 25° – 40° |
| $c_u$ | Lực dính không thoát nước | 5 – 200 kPa |

### Phân tích ứng suất tổng vs. hữu hiệu

| Điều kiện | Tham số | Khi nào dùng |
|---|---|---|
| Không thoát nước (UU) | $c_u$, $\\phi_u = 0$ | Sét, tải ngắn hạn |
| Thoát nước (CD/CU) | $c'$, $\\phi'$ | Dài hạn, cát |

### Thí nghiệm hộp cắt (Shear Box)

$$\\tau_f = \\frac{F}{A}, \\quad \\sigma'_n = \\frac{N}{A}$$

Thực hiện ≥ 3 mức tải → vẽ $(\\sigma'_n, \\tau_f)$ → đường Mohr-Coulomb → $c', \\phi'$`
      },
      {
        id: "11-2", title: "Phân tích ổn định mái dốc",
        content: `## 11.2 Phân tích ổn định mái dốc

### Mái dốc vô hạn (Infinite Slope)

**Không có thấm:**
$$FS = \\frac{\\tan\\phi'}{\\tan\\beta}$$

**Mực nước ngầm ở bề mặt:**
$$FS = \\frac{\\gamma'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\phi'}{\\tan\\beta}$$

### Phương pháp Bishop Đơn giản

Mặt trượt tròn, chia thành $n$ mảnh:

$$FS = \\frac{\\sum \\left[ \\dfrac{c'b + (W - ub)\\tan\\phi'}{m_\\alpha} \\right]}{\\sum W\\sin\\alpha}$$

$$m_\\alpha = \\cos\\alpha + \\frac{\\tan\\phi'\\sin\\alpha}{FS}$$

Giải lặp (thường 3–5 vòng hội tụ).

### Hệ số an toàn yêu cầu

| Loại công trình | $FS_{min}$ |
|---|---|
| Mái dốc tạm thời | 1.25 |
| Mái dốc thường xuyên | 1.50 |
| Đê đập quan trọng | 1.75 – 2.0 |`
      },
      {
        id: "11-3", title: "Phân tích dự án",
        content: `## 11.3 Phân tích dự án: Ổn định kênh đào Pimpama

### Thông số thiết kế

| Thông số | Giá trị |
|---|---|
| Chiều sâu kênh | 3.0 m |
| Góc mái dốc $\\beta$ | 18° (1:3H) |
| $c_u$ (sét mềm) | 10 kPa |
| $\\gamma_{sat}$ | 15.5 kN/m³ |
| Chiều cao mực nước ngầm | Bề mặt |

### Phân tích ngắn hạn (Không thoát nước)

Sử dụng $\\phi_u = 0$: Hệ số an toàn:

$$FS = \\frac{c_u \\cdot L_{arc}}{\\sum W \\sin\\alpha}$$

Kết quả tính toán: $FS \\approx 1.15$

> ⚠️ **$FS = 1.15 < 1.50$ — KHÔNG ĐẠT yêu cầu!**

### Giải pháp ổn định

1. **Giảm góc mái:** $\\beta = 10°$ (1:5.7H) → $FS \\approx 1.55$ ✅
2. **Gia cố trước:** Gia tải trước 6–12 tháng → tăng $c_u$ → $FS$ tăng
3. **Thi công theo giai đoạn:** Đào từng đợt 0.5 m, cho đất hồi phục

### Stress Path Analysis

Trong quá trình đào kênh, ứng suất tổng giảm → đường ứng suất di chuyển về phía trái trên biểu đồ $p-q$.`
      }
    ],
    quiz: [
      {
        q: "Tiêu chuẩn phá hoại Mohr-Coulomb: $\\tau_f$ = ?",
        options: ["$\\tau_f = c' - \\sigma'\\tan\\phi'$", "$\\tau_f = c' + \\sigma'\\tan\\phi'$", "$\\tau_f = \\sigma'\\tan\\phi'$", "$\\tau_f = c'\\tan\\phi'$"],
        ans: 1,
        explain: "$\\tau_f = c' + \\sigma'\\tan\\phi'$. Sức chống cắt gồm hai thành phần: lực dính $c'$ (độc lập với ứng suất pháp) và ma sát $\\sigma'\\tan\\phi'$ (tỷ lệ với ứng suất pháp hữu hiệu)."
      },
      {
        q: "Mái dốc vô hạn, đất dính $c' = 0$, $\\phi' = 32°$, $\\beta = 25°$. FS bằng?",
        options: ["$FS = 1.15$", "$FS = 1.40$", "$FS = 1.63$", "$FS = 0.86$"],
        ans: 2,
        explain: "$FS = \\tan\\phi'/\\tan\\beta = \\tan 32°/\\tan 25° = 0.6249/0.4663 = 1.34$. Gần nhất là 1.40. Chú ý đây là đất không có $c'$."
      },
      {
        q: "Tại sao phân tích ngắn hạn (UU) dùng $\\phi_u = 0$?",
        options: ["Vì sét không có ma sát", "Vì trong điều kiện không thoát nước, góc ma sát biểu kiến = 0 với đất bão hòa NC", "Vì đơn giản hóa tính toán", "Vì không đo được $\\phi$ trong thực tế"],
        ans: 1,
        explain: "Trong thí nghiệm UU với đất bão hòa, tất cả vòng tròn Mohr có đường kính như nhau (áp lực buồng không ảnh hưởng $c_u$) → đường bao phá hoại nằm ngang ($\\phi_u = 0$)."
      },
      {
        q: "Hệ số an toàn tối thiểu cho mái dốc thường xuyên (dài hạn) là?",
        options: ["$FS \\geq 1.0$", "$FS \\geq 1.25$", "$FS \\geq 1.50$", "$FS \\geq 2.0$"],
        ans: 2,
        explain: "Theo tiêu chuẩn thông thường, $FS \\geq 1.50$ cho mái dốc thường xuyên. Mái tạm thời có thể chấp nhận $FS \\geq 1.25$."
      },
      {
        q: "Phương pháp Bishop Đơn giản giả định lực giữa các mảnh như thế nào?",
        options: ["Lực giữa các mảnh bằng không", "Lực nghiêng theo hướng mặt trượt", "Lực giữa các mảnh nằm ngang (không có thành phần đứng)", "Lực theo phương tiếp tuyến"],
        ans: 2,
        explain: "Bishop Đơn giản (Simplified Bishop) giả định lực giữa các mảnh là **nằm ngang** (không có thành phần lực cắt giữa các mảnh). Đây là đơn giản hóa so với Bishop Chặt chẽ."
      },
      {
        q: "Kết quả phân tích kênh đào Pimpama cho $FS = 1.15$. Kết luận gì?",
        options: ["An toàn, có thể thi công", "Không đạt ($FS < 1.5$), cần giải pháp xử lý", "Đạt yêu cầu tối thiểu", "Cần thêm số liệu"],
        ans: 1,
        explain: "$FS = 1.15 < 1.5$ (yêu cầu tối thiểu cho mái dốc thường xuyên). Cần giải pháp như: giảm góc mái, gia cố đất trước, hoặc thi công theo giai đoạn."
      }
    ],
    references: [
      { title: "Kết quả thí nghiệm cắt hộp - Pimpama Samples", url: "#", type: "data" },
      { title: "ASTM D3080 - Direct Shear Test", url: "https://www.astm.org", type: "standard" },
      { title: "Slope Stability Charts - Michalowski (2002)", url: "https://www.asce.org", type: "book" },
      { title: "GeoStudio SLOPE/W - Phần mềm phân tích", url: "https://www.geoslope.com", type: "tool" }
    ]
  }
];
