import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

// ─── CHAPTER DATA ─────────────────────────────────────────────────────────────

const CHAPTERS = [
  {
    id: 1,
    title: "Giới Thiệu",
    icon: "🏗️",
    sections: [
      {
        id: "1-1", title: "Mô tả dự án",
        content: `## 1.1 Mô tả Dự án

Năm **2009**, một kênh đào dân cư được đề xuất tại **Khu phát triển Pimpama Riverside** và cuộc khảo sát địa kỹ thuật được thực hiện để đánh giá điều kiện địa kỹ thuật của khu vực.

Kết quả điều tra bao gồm:
- **Bản đồ khu vực** với đường đồng mức cao độ và vị trí hố khoan (BH1–BH10)
- **Nhật ký hố khoan**: thông tin về loại đất, độ ẩm, độ cứng
- **Báo cáo phòng thí nghiệm**: kết quả phân tích đất

Vấn đề địa kỹ thuật chính: **sét rất mềm (very soft clay)** phân bố rộng khắp, không phù hợp làm nền móng cho hầu hết công trình. Giải pháp đề xuất: cố kết đất bằng **phương pháp gia tải trước (pre-load)**.

> 💡 Mục tiêu: xác định tính chất đất và ước tính nguy cơ địa kỹ thuật có thể xảy ra trong quá trình thi công.`,
        quiz: [
          { q: "Dự án kênh đào Pimpama được đề xuất vào năm nào?", options: ["2005","2007","2009","2011"], ans: 2, explain: "Năm 2009, kênh đào dân cư được đề xuất tại Pimpama Riverside Development." },
          { q: "Vấn đề địa kỹ thuật chính tại khu vực dự án là gì?", options: ["Đá cứng khó đào","Sét rất mềm phân bố rộng","Cát chảy mạnh","Nước ngầm quá sâu"], ans: 1, explain: "Sét rất mềm (very soft clay) phân bố rộng khắp là vấn đề chính, không phù hợp làm nền móng." },
        ]
      },
      {
        id: "1-2", title: "Dữ liệu thực địa",
        content: `## 1.2 Dữ liệu Thực địa

### Hố khoan (Boreholes)

10 hố khoan (BH1–BH10) được thực hiện với các phương pháp:

| Ký hiệu | Phương pháp | Ứng dụng |
|---------|-------------|---------|
| AD | Auger Drilling | Đất mềm, nông |
| W | Washbore | Đất mềm đến cứng |
| T | TC bit | Đất cứng |

Mẫu không phá hoại **U50** (đường kính 50 mm) để phân tích tính chất nguyên trạng.

### Thí nghiệm xuyên động (DCPT)

Thực hiện gần BH9, kết quả số nhát búa $N_d$:

| Độ sâu (cm) | $N_d$ | Nhận xét |
|---|---|---|
| 0 – 230 | 1 – 6 | Đất rất mềm |
| 230 – 460 | 4 – 9 | Đất trung bình |
| 460 – 690 | 6 – 21 | Đất cứng hơn |

### Mô tả đất theo hố khoan

**Ký hiệu độ cứng:**
- **VS** — Very Soft (Rất mềm)
- **S** — Soft (Mềm)  
- **F** — Firm (Vừa)
- **St** — Stiff (Cứng)
- **VST** — Very Stiff (Rất cứng)`,
        quiz: [
          { q: "Thí nghiệm DCPT đo thông số nào?", options: ["Góc ma sát trong","Số nhát búa cần xuyên mỗi 10 cm","Hệ số thấm k","Giới hạn chảy LL"], ans: 1, explain: "DCPT (Dynamic Cone Penetration Test) đo số nhát búa $N_d$ cần để xuyên từng 10 cm vào đất." },
          { q: "Mẫu U50 có đường kính bao nhiêu?", options: ["25 mm","50 mm","75 mm","100 mm"], ans: 1, explain: "Mẫu U50 là mẫu không phá hoại (undisturbed) đường kính 50 mm, dùng để phân tích tính chất đất nguyên trạng." },
        ]
      },
      {
        id: "1-3", title: "Dữ liệu phòng thí nghiệm",
        content: `## 1.3 Dữ liệu Phòng thí nghiệm

Ba loại đất được thí nghiệm tại dự án Pimpama:

### 1. Sét pha bùn phù sa (Alluvial Silty Clay)
- Độ ẩm tự nhiên: $w \\approx 60{-}80\\%$ (rất cao!)
- Giới hạn chảy: $LL \\approx 65\\%$
- Chỉ số dẻo: $PI \\approx 35\\%$
- Trạng thái: Bão hòa hoàn toàn

### 2. Đất tàn tích (Residual Soil)
- Độ ẩm thấp hơn
- Tính chất thay đổi theo độ sâu

### 3. Cát từ hố thử (Sand – Pit 1)
- Hạt rời, thấm nhanh
- Phân tích bằng thí nghiệm rây

> ⚠️ Độ ẩm tự nhiên cao ($w > 60\\%$) của sét phù sa cho thấy đất ở trạng thái **rất mềm**, tiềm ẩn nguy cơ lún lớn khi chịu tải.`,
        quiz: [
          { q: "Sét phù sa tại Pimpama có độ ẩm tự nhiên khoảng bao nhiêu?", options: ["10–20%","30–40%","60–80%","90–100%"], ans: 2, explain: "Độ ẩm $w \\approx 60-80\\%$ rất cao, đặc trưng của sét rất mềm bão hòa nước." },
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Sự hình thành và Thăm dò Đất",
    icon: "🌍",
    sections: [
      {
        id: "2-1", title: "Phong hóa đá",
        content: `## 2.1 Phong hóa Đá và Sự hình thành Đất

Đất được hình thành từ quá trình **phong hóa đá gốc**. Có hai loại:

### Phong hóa Vật lý (Physical Weathering)
- Phá vỡ đá thành mảnh nhỏ hơn do: **nhiệt độ, áp lực, đóng băng – tan chảy**
- Không thay đổi thành phần hóa học
- Tạo ra: sỏi, cát, bột thô

### Phong hóa Hóa học (Chemical Weathering)
- Thay đổi thành phần khoáng vật
- Tạo ra **khoáng vật sét** mới
- Mạnh hơn ở vùng nhiệt đới ẩm (như Việt Nam, Australia)

### Tốc độ phong hóa phụ thuộc vào:

| Yếu tố | Ảnh hưởng |
|--------|-----------|
| Khí hậu | Nhiệt độ và độ ẩm cao → phong hóa mạnh |
| Loại đá | Đá vôi dễ hòa tan hơn đá granite |
| Thời gian | Phong hóa tích lũy theo thời gian |
| Địa hình | Sườn dốc → vật liệu bị cuốn trôi nhanh |`,
        quiz: [
          { q: "Loại phong hóa nào tạo ra khoáng vật sét mới?", options: ["Phong hóa vật lý","Phong hóa hóa học","Cả hai","Không loại nào"], ans: 1, explain: "Phong hóa hóa học thay đổi thành phần khoáng vật của đá, tạo ra các khoáng vật sét mới như kaolinite, montmorillonite." },
        ]
      },
      {
        id: "2-2", title: "Đất tàn tích và vận chuyển",
        content: `## 2.2 Đất Tàn tích và Đất Vận chuyển

### Đất tàn tích (Residual Soil)
Hình thành **tại chỗ** từ đá gốc bên dưới, chưa bị di chuyển.

**Đặc điểm:**
- Tính chất thay đổi dần theo độ sâu
- Thường có cấu trúc giữ lại từ đá gốc
- Phổ biến ở vùng nhiệt đới: Đông Nam Á, Australia

### Đất vận chuyển (Transported Soil)

| Loại | Tác nhân | Ví dụ thực tế |
|------|---------|---------------|
| **Phù sa (Alluvial)** | Nước chảy | ĐBSCL, đồng bằng sông Hồng |
| **Eolian** | Gió | Cồn cát Bình Thuận |
| **Băng hà (Glacial)** | Băng | Vùng ôn đới |
| **Sườn tích (Colluvial)** | Trọng lực | Chân núi |
| **Biển (Marine)** | Sóng biển | Đất ven biển |

> 💡 **Tại Pimpama:** Đất phù sa (alluvial) được vận chuyển bởi nước, lắng đọng thành lớp sét mềm dày. Điều này giải thích tại sao khu vực có vấn đề nền đất yếu.`,
        quiz: [
          { q: "Đất tàn tích khác đất vận chuyển ở điểm nào?", options: ["Màu sắc khác nhau","Đất tàn tích hình thành tại chỗ, không bị di chuyển","Đất tàn tích luôn chứa sét","Đất tàn tích không thể xây dựng được"], ans: 1, explain: "Đất tàn tích (residual soil) hình thành tại chỗ từ đá gốc bên dưới, không bị vận chuyển bởi nước, gió hay băng hà." },
          { q: "Đất phù sa (alluvial) được hình thành bởi tác nhân nào?", options: ["Gió","Băng hà","Nước chảy","Trọng lực"], ans: 2, explain: "Đất phù sa hình thành do nước chảy vận chuyển và lắng đọng hạt đất." },
        ]
      },
      {
        id: "2-3", title: "Khoáng vật học đất",
        content: `## 2.3 Khoáng vật học Đất

### Các khoáng vật sét chính

| Khoáng vật | Cấu trúc | Tính trương nở | Đặc điểm |
|------------|---------|---------------|---------|
| **Kaolinite** | 1:1 | Thấp | Ổn định, phổ biến vùng nhiệt đới |
| **Illite** | 2:1 | Trung bình | Phổ biến nhất |
| **Montmorillonite** | 2:1 | **Rất cao** | Nguy hiểm! Trương nở mạnh |

### Tại sao khoáng vật quan trọng?

**Montmorillonite (Smectite):**
- Hút nước và trương nở rất mạnh
- Gây nứt vỡ móng nhà, đường
- Thể tích có thể tăng **10–15 lần** khi gặp nước

**Kaolinite:**
- Ổn định hơn, ít trương nở
- Phổ biến ở đất đỏ bazan vùng Tây Nguyên

### Diện tích bề mặt riêng

$$S_{specific} = \\frac{\\text{Tổng diện tích bề mặt}}{\\text{Khối lượng}}$$

Sét mịn có $S_{specific}$ rất lớn → khả năng giữ nước cao → ảnh hưởng nhiều đến tính chất cơ học.`,
        quiz: [
          { q: "Khoáng vật sét nào nguy hiểm nhất do trương nở mạnh?", options: ["Kaolinite","Illite","Montmorillonite","Chlorite"], ans: 2, explain: "Montmorillonite có cấu trúc 2:1, hút nước và trương nở rất mạnh, thể tích tăng 10-15 lần, gây hư hỏng công trình." },
        ]
      },
      {
        id: "2-4", title: "Thăm dò đất",
        content: `## 2.4 Thăm dò Đất

### Quy trình thăm dò địa kỹ thuật

**Bước 1 — Nghiên cứu sơ bộ (Desk Study):**
- Thu thập bản đồ địa chất, địa hình
- Xem xét công trình lân cận
- Ảnh vệ tinh, ảnh hàng không

**Bước 2 — Khảo sát thực địa:**
- Quan sát địa hình, lấy mẫu lộ đầu
- Xác định vị trí hố khoan

**Bước 3 — Khoan lấy mẫu (Boreholes):**

| Phương pháp | Ký hiệu | Ưu điểm | Nhược điểm |
|-------------|---------|---------|------------|
| Khoan guger | AD | Nhanh, rẻ | Chỉ đất mềm nông |
| Washbore | W | Đất mềm–cứng | Mẫu kém chất lượng |
| Xoay TC bit | T | Đất cứng | Chậm, đắt |

**Bước 4 — Thí nghiệm hiện trường:**
- **SPT** (Standard Penetration Test): $N_{SPT}$ = số nhát búa/30cm
- **DCPT** (Dynamic Cone Penetration): $N_d$ = số nhát/10cm
- **CPT** (Cone Penetration Test): liên tục, chính xác cao

**Bước 5 — Thí nghiệm phòng thí nghiệm:**
- Phân tích thành phần hạt
- Giới hạn Atterberg  
- Nén cố kết, cắt trực tiếp, ba trục`,
        quiz: [
          { q: "Thứ tự đúng của quy trình thăm dò địa kỹ thuật?", options: ["Khoan → Desk Study → Thí nghiệm","Desk Study → Khảo sát → Khoan → Thí nghiệm","Thí nghiệm → Khoan → Desk Study","Khảo sát → Desk Study → Thí nghiệm"], ans: 1, explain: "Quy trình chuẩn: Desk Study (thu thập tài liệu) → Khảo sát thực địa → Khoan lấy mẫu → Thí nghiệm hiện trường & PTN." },
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Thành Phần Đất",
    icon: "⚗️",
    sections: [
      {
        id: "3-1", title: "Ba pha trong đất",
        content: `## 3.1 Ba Pha trong Đất

Đất là vật liệu đa pha gồm **ba thành phần** cơ bản:

| Pha | Ký hiệu | Thể tích | Khối lượng |
|-----|---------|---------|------------|
| Hạt rắn | $s$ | $V_s$ | $M_s$ |
| Nước | $w$ | $V_w$ | $M_w$ |
| Khí | $a$ | $V_a$ | $\\approx 0$ |
| **Tổng** | | $V = V_s + V_v$ | $M = M_s + M_w$ |

Trong đó: $V_v = V_w + V_a$ là **thể tích lỗ rỗng**

### Sơ đồ ba pha

Mô hình lý tưởng tách riêng từng pha:
- Phần **rắn** ($V_s$, $M_s$): khung hạt chịu lực
- Phần **lỗ rỗng** ($V_v$): chứa nước và/hoặc khí
- Nước ($V_w$): truyền tải áp lực thủy tĩnh
- Khí ($V_a$): nén được, ảnh hưởng đến đầm chặt`,
        quiz: [
          { q: "Thể tích lỗ rỗng $V_v$ bao gồm những gì?", options: ["Chỉ nước","Chỉ khí","Nước + Khí","Hạt rắn + Nước"], ans: 2, explain: "$V_v = V_w + V_a$: thể tích lỗ rỗng gồm cả thể tích nước ($V_w$) và thể tích khí ($V_a$)." },
        ]
      },
      {
        id: "3-2", title: "Tỷ số thể tích",
        content: `## 3.2 Tỷ số Thể tích

### Tỷ lệ rỗng (Void Ratio) — $e$

$$e = \\frac{V_v}{V_s}$$

- Phạm vi: $e \\approx 0.3$ (cát chặt) đến $e > 1.5$ (sét rất mềm)
- Không có đơn vị; **không có giới hạn trên**

### Mật độ tương đối (Relative Density) — $D_r$

$$D_r = \\frac{e_{max} - e}{e_{max} - e_{min}} \\times 100\\%$$

| $D_r$ (%) | Trạng thái cát |
|-----------|----------------|
| 0 – 15 | Rất rời |
| 15 – 35 | Rời |
| 35 – 65 | Trung bình |
| 65 – 85 | Chặt |
| 85 – 100 | Rất chặt |

### Độ rỗng (Porosity) — $n$

$$n = \\frac{V_v}{V} \\times 100\\%$$

**Mối quan hệ $e$ và $n$:**

$$n = \\frac{e}{1+e} \\qquad \\Leftrightarrow \\qquad e = \\frac{n}{1-n}$$

### Độ bão hòa (Degree of Saturation) — $S$

$$S = \\frac{V_w}{V_v} \\times 100\\%$$

| $S$ | Trạng thái |
|-----|-----------|
| $0\\%$ | Đất khô hoàn toàn |
| $0\\% < S < 100\\%$ | Đất bán bão hòa |
| $100\\%$ | Đất bão hòa hoàn toàn |`,
        quiz: [
          { q: "Công thức tính tỷ lệ rỗng $e$ là?", options: ["$e = V_s/V_v$","$e = V_v/V_s$","$e = V_v/V$","$e = V/V_s$"], ans: 1, explain: "Tỷ lệ rỗng $e = V_v/V_s$ = tỷ số giữa thể tích lỗ rỗng và thể tích hạt rắn." },
          { q: "Khi $S = 100\\%$, đất ở trạng thái nào?", options: ["Khô hoàn toàn","Bán bão hòa","Bão hòa hoàn toàn","Đóng băng"], ans: 2, explain: "$S = 100\\%$ nghĩa là $V_w = V_v$: toàn bộ lỗ rỗng chứa đầy nước — đất bão hòa hoàn toàn." },
          { q: "Mối quan hệ giữa $n$ và $e$ là?", options: ["$n = e/(1-e)$","$n = e/(1+e)$","$n = (1+e)/e$","$n = 1-e$"], ans: 1, explain: "$n = e/(1+e)$. Ví dụ: $e=1.0 \\Rightarrow n = 1/2 = 50\\%$." },
        ]
      },
      {
        id: "3-3", title: "Tỷ số khối lượng",
        content: `## 3.3 Tỷ số Khối lượng

### Mật độ (Density) — $\\rho$

$$\\rho = \\frac{M}{V} \\quad [\\text{g/cm}^3 \\text{ hoặc Mg/m}^3]$$

| Loại | Công thức | Điển hình |
|------|-----------|----------|
| Mật độ tự nhiên | $\\rho = M/V$ | 1.4 – 2.2 g/cm³ |
| Mật độ khô | $\\rho_d = M_s/V$ | 1.1 – 2.0 g/cm³ |
| Mật độ bão hòa | $\\rho_{sat}$ | 1.7 – 2.3 g/cm³ |

### Trọng lượng đơn vị (Unit Weight) — $\\gamma$

$$\\gamma = \\rho \\cdot g \\quad [\\text{kN/m}^3]$$

Trọng lượng đơn vị nổi:
$$\\gamma' = \\gamma_{sat} - \\gamma_w$$

Với $\\gamma_w = 9.81 \\approx 10 \\text{ kN/m}^3$

### Độ ẩm (Water Content) — $w$

$$w = \\frac{M_w}{M_s} \\times 100\\%$$

### Trọng lượng riêng hạt (Specific Gravity) — $G_s$

$$G_s = \\frac{\\rho_s}{\\rho_w}$$

Phần lớn đất: $G_s = \\mathbf{2.65 – 2.72}$

### Các quan hệ hữu ích

$$\\gamma_d = \\frac{\\gamma}{1+w} \\qquad S \\cdot e = G_s \\cdot w$$

$$\\gamma_{sat} = \\frac{(G_s + e)\\,\\gamma_w}{1+e} \\qquad \\rho_d = \\frac{G_s\\,\\rho_w}{1+e}$$`,
        quiz: [
          { q: "Công thức tính độ ẩm $w$ là?", options: ["$w = M_s/M_w$","$w = M_w/M_s \\times 100\\%$","$w = M_w/M \\times 100\\%$","$w = V_w/V \\times 100\\%$"], ans: 1, explain: "$w = M_w/M_s \\times 100\\%$ — tỷ lệ khối lượng nước trên khối lượng hạt rắn (không phải tổng khối lượng)." },
          { q: "Trọng lượng riêng hạt $G_s$ của đất thông thường nằm trong khoảng?", options: ["1.5 – 2.0","2.65 – 2.72","3.0 – 3.5","1.0 – 1.5"], ans: 1, explain: "Phần lớn các loại đất có $G_s = 2.65-2.72$, gần với giá trị của thạch anh ($G_s = 2.65$)." },
          { q: "Quan hệ $S \\cdot e = G_s \\cdot w$ dùng để làm gì?", options: ["Tính lún","Liên kết các chỉ tiêu vật lý của ba pha","Phân loại đất","Tính ứng suất"], ans: 1, explain: "Đây là phương trình cơ bản nối $S$, $e$, $G_s$, $w$ với nhau — cho phép tính một thông số khi biết các thông số còn lại." },
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Phân Loại Đất",
    icon: "🗂️",
    sections: [
      {
        id: "4-1", title: "Kích thước hạt đất",
        content: `## 4.1 Kích thước Hạt Đất

### Thang phân loại hạt (USCS/ASTM)

| Loại đất | Kích thước |
|----------|-----------|
| Đá tảng (Boulder) | $> 300$ mm |
| Cuội (Cobble) | $75 – 300$ mm |
| Sỏi (Gravel) | $4.75 – 75$ mm |
| Cát thô | $2.0 – 4.75$ mm |
| Cát vừa | $0.425 – 2.0$ mm |
| Cát mịn | $0.075 – 0.425$ mm |
| Bột (Silt) | $0.002 – 0.075$ mm |
| **Sét (Clay)** | **$< 0.002$ mm** |

### Đường cong cấp phối hạt

Từ thí nghiệm rây, vẽ đường cong: trục X là kích thước hạt (thang log), trục Y là % lọt qua.

**Các thông số quan trọng:**

$$C_u = \\frac{D_{60}}{D_{10}} \\quad \\text{(Hệ số đồng đều)}$$

$$C_c = \\frac{D_{30}^2}{D_{10} \\times D_{60}} \\quad \\text{(Hệ số độ cong)}$$

| Điều kiện | Phân loại cát |
|-----------|-------------|
| $C_u \\geq 6$ và $1 \\leq C_c \\leq 3$ | Phân loại tốt (SW) |
| Không đạt | Phân loại kém (SP) |`,
        quiz: [
          { q: "Theo USCS, hạt sét có kích thước nhỏ hơn bao nhiêu?", options: ["0.075 mm","0.02 mm","0.002 mm","0.0002 mm"], ans: 2, explain: "Theo USCS, hạt sét có kích thước $D < 0.002$ mm (2 micromet)." },
          { q: "Hệ số đồng đều $C_u = D_{60}/D_{10}$. Cát phân loại tốt cần $C_u$ bằng bao nhiêu?", options: ["$C_u < 2$","$C_u \\geq 6$","$C_u = 1$","$C_u > 20$"], ans: 1, explain: "Cát phân loại tốt (SW) cần $C_u \\geq 6$ VÀ $1 \\leq C_c \\leq 3$." },
        ]
      },
      {
        id: "4-2", title: "Giới hạn Atterberg",
        content: `## 4.2 Giới hạn Atterberg

Đất dính thay đổi trạng thái theo độ ẩm:

$$\\text{Rắn} \\xrightarrow{\\text{SL}} \\text{Nửa cứng} \\xrightarrow{\\text{PL}} \\text{Dẻo} \\xrightarrow{\\text{LL}} \\text{Lỏng}$$

### Giới hạn chảy (Liquid Limit — LL)
Độ ẩm tại ranh giới **lỏng ↔ dẻo**. Xác định bằng thí nghiệm Casagrande.

### Giới hạn dẻo (Plastic Limit — PL)  
Độ ẩm tại ranh giới **dẻo ↔ nửa cứng**. Xác định bằng cách se sợi đất $\\emptyset 3$ mm.

### Chỉ số dẻo (Plasticity Index — PI)

$$PI = LL - PL$$

| PI | Tính dẻo |
|----|---------|
| $< 7$ | Thấp |
| $7 – 17$ | Vừa |
| $> 17$ | Cao |

### Chỉ số lỏng (Liquidity Index — LI)

$$LI = \\frac{w - PL}{LL - PL} = \\frac{w - PL}{PI}$$

| LI | Trạng thái |
|----|-----------|
| $< 0$ | Rắn (quá cố kết) |
| $0 – 1$ | Dẻo (bình thường) |
| $> 1$ | **Lỏng — nguy hiểm!** |

> ⚠️ Sét mềm Pimpama: $LL \\approx 65\\%$, $PL \\approx 30\\%$, $PI = 35$ → sét plasticity cao (**CH**)`,
        quiz: [
          { q: "Chỉ số dẻo PI được tính như thế nào?", options: ["PI = LL + PL","PI = LL - PL","PI = PL - LL","PI = LL × PL"], ans: 1, explain: "$PI = LL - PL$. PI thể hiện khoảng độ ẩm mà đất ở trạng thái dẻo. PI càng lớn, đất càng dẻo." },
          { q: "Khi LI > 1, đất ở trạng thái nào?", options: ["Rắn","Dẻo","Lỏng — nguy hiểm","Bán cứng"], ans: 2, explain: "$LI > 1$ nghĩa là độ ẩm tự nhiên $w > LL$ — đất ở trạng thái lỏng, cường độ rất thấp, nguy hiểm cho thi công." },
        ]
      },
      {
        id: "4-3", title: "Phân loại đất USCS",
        content: `## 4.3 Phân loại Đất — Hệ thống USCS

### Đất thô (> 50% giữ lại trên rây 0.075 mm)

**Sỏi (G)** — > 50% phần thô là sỏi:
- **GW**: Sỏi phân loại tốt ($C_u \\geq 4$, $1 \\leq C_c \\leq 3$)
- **GP**: Sỏi phân loại kém
- **GM**: Sỏi pha bột ($PI < 4$ hoặc dưới đường A)
- **GC**: Sỏi pha sét ($PI > 7$ và trên đường A)

**Cát (S)** — > 50% phần thô là cát:
- **SW**: Cát phân loại tốt ($C_u \\geq 6$, $1 \\leq C_c \\leq 3$)
- **SP**: Cát phân loại kém
- **SM**: Cát pha bột
- **SC**: Cát pha sét

### Đất mịn (> 50% lọt qua rây 0.075 mm)

Phân loại dựa trên **biểu đồ dẻo** (Plasticity Chart):

**Đường A:** $PI = 0.73(LL - 20)$

| Vị trí | LL | Ký hiệu |
|--------|-----|---------|
| Trên đường A, $PI > 7$ | $< 50$ | **CL** — Sét plasticity thấp |
| Trên đường A, $PI > 7$ | $\\geq 50$ | **CH** — Sét plasticity cao |
| Dưới đường A hoặc $PI < 4$ | $< 50$ | **ML** — Bột plasticity thấp |
| Dưới đường A hoặc $PI < 4$ | $\\geq 50$ | **MH** — Bột plasticity cao |

> 💡 **Sét Pimpama:** $LL = 65\\% \\geq 50$, trên đường A → **CH** (High plasticity Clay)`,
        quiz: [
          { q: "Sét plasticity cao theo USCS được ký hiệu là?", options: ["CL","CH","ML","MH"], ans: 1, explain: "CH (High plasticity Clay): đất mịn nằm trên đường A của biểu đồ dẻo, có $LL \\geq 50\\%$." },
          { q: "Đường A trong biểu đồ dẻo có phương trình?", options: ["$PI = 0.9(LL-8)$","$PI = 0.73(LL-20)$","$PI = LL/2$","$PI = LL - 30$"], ans: 1, explain: "Đường A: $PI = 0.73(LL-20)$. Đây là ranh giới phân loại giữa sét (C) và bột/đất hữu cơ (M/O) trên biểu đồ dẻo." },
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Đầm Chặt Đất",
    icon: "🔨",
    sections: [
      {
        id: "5-1", title: "Quá trình đầm chặt",
        content: `## 5.1 Quá trình Đầm Chặt

**Đầm chặt (Compaction):** Tăng mật độ đất bằng năng lượng cơ học — giảm thể tích **khí** trong lỗ rỗng.

> ⚠️ **Phân biệt:** Đầm chặt loại bỏ **khí** ↔ Cố kết loại bỏ **nước**

### Mục đích đầm chặt
- Tăng khả năng chịu tải của nền
- Giảm độ lún và biến dạng
- Giảm hệ số thấm
- Tăng ổn định mái dốc
- Giảm trương nở khi gặp nước

### Các yếu tố ảnh hưởng

| Yếu tố | Ảnh hưởng |
|--------|-----------|
| Loại đất | Đất hạt thô dễ đầm hơn đất sét |
| Độ ẩm | Có giá trị tối ưu $w_{opt}$ |
| Năng lượng đầm | Tăng năng lượng → tăng $\\rho_{d,max}$, giảm $w_{opt}$ |
| Số lớp đầm | Càng nhiều lớp càng đồng đều |`,
        quiz: [
          { q: "Đầm chặt đất chủ yếu loại bỏ gì ra khỏi lỗ rỗng?", options: ["Nước","Khí (không khí)","Cả nước và khí","Hạt đất mịn"], ans: 1, explain: "Đầm chặt loại bỏ **khí** (không khí) ra khỏi lỗ rỗng để tăng mật độ đất. Cố kết mới là quá trình loại bỏ nước." },
        ]
      },
      {
        id: "5-2", title: "Thí nghiệm đầm chặt Proctor",
        content: `## 5.2 Thí nghiệm Đầm chặt Proctor

### So sánh hai loại thí nghiệm

| Thông số | Standard Proctor | Modified Proctor |
|---------|-----------------|------------------|
| Khối lượng búa | 2.5 kg | 4.5 kg |
| Chiều cao rơi | 305 mm | 457 mm |
| Số lớp | 3 | 5 |
| Số chày/lớp | 25 | 25 |
| Năng lượng | 600 kJ/m³ | 2700 kJ/m³ |

### Kết quả — Đường cong đầm chặt

Thay đổi độ ẩm $w$ → đầm chặt → tính $\\rho_d$:

$$\\rho_d = \\frac{\\rho}{1 + w}$$

Đường cong dạng **hình chuông**, cho:
- **Mật độ khô tối đa:** $\\rho_{d,max}$
- **Độ ẩm tối ưu:** $w_{opt}$

### Đường không khí rỗng (ZAV — Zero Air Void)

$$\\rho_{d,ZAV} = \\frac{G_s \\cdot \\rho_w}{1 + G_s \\cdot w}$$

ZAV là giới hạn lý thuyết tối đa ($S = 100\\%$). **Đường cong Proctor luôn nằm dưới ZAV.**

### Yêu cầu kiểm tra hiện trường

$$RC = \\frac{\\rho_{d,field}}{\\rho_{d,max}} \\times 100\\% \\geq 95\\%$$

$RC$ = Relative Compaction (Mức độ đầm chặt tương đối)`,
        quiz: [
          { q: "Thí nghiệm Proctor Tiêu chuẩn sử dụng búa nặng bao nhiêu?", options: ["1.0 kg","2.5 kg","4.5 kg","10 kg"], ans: 1, explain: "Proctor tiêu chuẩn: búa 2.5 kg, rơi cao 305 mm, 3 lớp, 25 chày/lớp. Proctor cải tiến dùng búa 4.5 kg." },
          { q: "Đường ZAV biểu thị điều gì?", options: ["Mật độ khô tối đa đo được","Giới hạn lý thuyết khi $S=100\\%$ (không còn khí)","Giới hạn dẻo của đất","Đường cố kết"], ans: 1, explain: "ZAV (Zero Air Void): trạng thái đất bão hòa hoàn toàn $S=100\\%$ — không còn khí trong lỗ rỗng. Là giới hạn lý thuyết mà đầm chặt thực tế không thể đạt được." },
          { q: "Mức độ đầm chặt yêu cầu thông thường ngoài công trường là?", options: ["RC ≥ 85%","RC ≥ 90%","RC ≥ 95%","RC ≥ 100%"], ans: 2, explain: "$RC \\geq 95\\%$ là yêu cầu phổ biến cho nền đường và công trình dân dụng." },
        ]
      },
      {
        id: "5-3", title: "Đầm chặt ngoài hiện trường",
        content: `## 5.3 Đầm chặt ngoài Hiện trường

### Thiết bị đầm

| Loại lu | Cơ chế | Phù hợp |
|---------|--------|---------|
| Lu bánh lốp | Áp lực tĩnh | Cát, sỏi, đất dính |
| Lu chân cừu | Áp lực tĩnh + kneading | Đất dính, sét |
| Lu rung | Rung động | Cát, sỏi |
| Đầm cóc (Rammer) | Va đập | Khu vực chật hẹp |
| Lu bánh thép nhẵn | Áp lực tĩnh | Đất hạt thô |

### Kiểm tra chất lượng đầm chặt

**Phương pháp bình cát (Sand Cone):**
1. Đào hố nhỏ ở hiện trường
2. Xác định thể tích hố bằng cát chuẩn
3. Cân đất đào ra → tính $\\rho_d$

**Phương pháp bơm nước (Rubber Balloon):** tương tự, dùng bóng cao su

**Hạt nhân phóng xạ (Nuclear Densometer):** nhanh, không phá hoại`,
        quiz: [
          { q: "Lu rung phù hợp nhất với loại đất nào?", options: ["Sét mềm","Bùn","Cát và sỏi","Đất hữu cơ"], ans: 2, explain: "Lu rung hiệu quả nhất với cát và sỏi vì rung động làm các hạt tự sắp xếp lại chặt hơn. Với đất sét dùng lu chân cừu." },
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Ứng Suất trong Đất",
    icon: "⚖️",
    sections: [
      {
        id: "6-1", title: "Ứng suất trong khối đất",
        content: `## 6.1 Ứng suất trong Khối Đất

### Ứng suất tổng đứng (Total Vertical Stress) — $\\sigma_v$

$$\\sigma_v = \\sum_{i} \\gamma_i \\cdot h_i$$

**Ví dụ:** Mực nước ngầm ở độ sâu $H_w$, điểm xét ở độ sâu $z > H_w$:

$$\\sigma_v = \\gamma_d \\cdot H_w + \\gamma_{sat} \\cdot (z - H_w)$$

### Áp lực nước lỗ rỗng (Pore Water Pressure) — $u$

$$u = \\gamma_w \\cdot h_w$$

Khi không có dòng thấm, $h_w = z - H_w$ (chiều sâu dưới MNN).

### Ứng suất hữu hiệu — $\\sigma'$

**Nguyên lý Terzaghi (1943) — nền tảng của Cơ học Đất hiện đại:**

$$\\boxed{\\sigma' = \\sigma - u}$$

> 💡 **Ý nghĩa:** Chỉ có ứng suất hữu hiệu $\\sigma'$ (truyền qua tiếp xúc giữa các hạt) mới gây ra biến dạng và thay đổi cường độ đất. Áp lực nước $u$ không làm thay đổi hình dạng đất.

### Ứng suất nằm ngang — $\\sigma'_h$

$$\\sigma'_h = K_0 \\cdot \\sigma'_v$$

Với đất bình thường cố kết (Jaky, 1944):

$$K_0 = 1 - \\sin\\phi'$$`,
        quiz: [
          { q: "Nguyên lý ứng suất hữu hiệu của Terzaghi: $\\sigma' = ?$", options: ["$\\sigma + u$","$\\sigma - u$","$u - \\sigma$","$\\sigma \\cdot u$"], ans: 1, explain: "$\\sigma' = \\sigma - u$ là nguyên lý cơ bản nhất của Cơ học Đất. Ứng suất hữu hiệu = ứng suất tổng trừ áp lực nước lỗ rỗng." },
          { q: "Hệ số áp lực đất tĩnh $K_0$ theo Jaky cho đất bình thường cố kết?", options: ["$K_0 = 1$","$K_0 = 1 - \\sin\\phi'$","$K_0 = \\sin\\phi'$","$K_0 = 1 + \\sin\\phi'$"], ans: 1, explain: "$K_0 = 1 - \\sin\\phi'$ (Jaky 1944). Ví dụ: $\\phi' = 30° \\Rightarrow K_0 = 0.5$." },
        ]
      },
      {
        id: "6-2", title: "Thấm hướng lên và đất chảy",
        content: `## 6.2 Thấm hướng lên và Điều kiện Đất Chảy

### Dòng thấm và gradient thủy lực

$$i = \\frac{\\Delta h}{L}$$

### Ảnh hưởng của thấm hướng lên

Khi nước thấm **hướng lên**, áp lực nước tăng, ứng suất hữu hiệu giảm:

$$\\sigma'_v = \\gamma' \\cdot z - \\gamma_w \\cdot i \\cdot z = (\\gamma' - i \\cdot \\gamma_w) \\cdot z$$

### Điều kiện đất chảy (Quick Condition)

Khi $\\sigma'_v = 0$:

$$i_{cr} = \\frac{\\gamma'}{\\gamma_w} = \\frac{G_s - 1}{1 + e}$$

Với đất thông thường: $i_{cr} \\approx 0.9 – 1.1$

> ⚠️ **Khi $i > i_{cr}$:** Đất mất hoàn toàn cường độ → **"Cát chảy" / "Quicksand"**  
> Đây là nguy cơ nghiêm trọng khi đào hố móng gần nguồn nước!

### Ứng dụng tại dự án Pimpama

- Lớp sét bão hòa: $\\gamma_{sat} \\approx 16$ kN/m³, $\\gamma' \\approx 6$ kN/m³
- $i_{cr} = 6/9.81 \\approx 0.61$
- Cần kiểm tra gradient thấm xung quanh kênh đào`,
        quiz: [
          { q: "Gradient thủy lực tới hạn $i_{cr}$ gây đất chảy được tính bằng?", options: ["$i_{cr} = \\gamma_w/\\gamma'$","$i_{cr} = \\gamma'/\\gamma_w$","$i_{cr} = (G_s+1)/(1+e)$","$i_{cr} = 1.5$"], ans: 1, explain: "$i_{cr} = \\gamma'/\\gamma_w = (G_s-1)/(1+e)$. Khi gradient thực tế $i > i_{cr}$, ứng suất hữu hiệu về 0 → đất chảy." },
          { q: "Hiện tượng đất chảy (quicksand) xảy ra khi?", options: ["$i < i_{cr}$","$i = 0$","$i \\geq i_{cr}$","Khi trời mưa to"], ans: 2, explain: "Đất chảy xảy ra khi gradient thủy lực $i \\geq i_{cr}$: áp lực thấm hướng lên đủ lớn để triệt tiêu ứng suất hữu hiệu." },
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Dòng Thấm trong Đất",
    icon: "💧",
    sections: [
      {
        id: "7-1", title: "Định luật Darcy và hệ số thấm",
        content: `## 7.1 Định luật Darcy và Hệ số Thấm

### Hệ số thấm — $k$

| Loại đất | $k$ (m/s) | Tính thấm |
|----------|----------|----------|
| Sỏi sạch | $10^{-1} – 1$ | Rất cao |
| Cát thô | $10^{-4} – 10^{-2}$ | Cao |
| Cát mịn | $10^{-6} – 10^{-4}$ | Vừa |
| Bột | $10^{-9} – 10^{-5}$ | Thấp |
| Sét | $10^{-11} – 10^{-8}$ | Rất thấp |

### Định luật Darcy

$$v = k \\cdot i \\qquad q = v \\cdot A = k \\cdot i \\cdot A$$

- $v$ = vận tốc thấm (m/s) — **không phải vận tốc thực của nước**
- $k$ = hệ số thấm (m/s)
- $i = \\Delta h / L$ = gradient thủy lực
- $q$ = lưu lượng thấm (m³/s)

> ⚠️ Định luật Darcy chỉ áp dụng cho **chảy tầng** (laminar), tức $Re < 10$.

### Vận tốc thực của nước

$$v_{actual} = \\frac{v}{n} = \\frac{k \\cdot i}{n}$$

Vận tốc thực lớn hơn vận tốc Darcy vì nước chỉ chảy qua tiết diện lỗ rỗng $n \\cdot A$.`,
        quiz: [
          { q: "Định luật Darcy: lưu lượng thấm $q = ?$", options: ["$q = k/i$","$q = k \\cdot i \\cdot A$","$q = i/(k \\cdot A)$","$q = k \\cdot A/i$"], ans: 1, explain: "$q = k \\cdot i \\cdot A$: lưu lượng thấm bằng hệ số thấm × gradient thủy lực × diện tích tiết diện." },
          { q: "Loại đất nào có hệ số thấm $k$ nhỏ nhất?", options: ["Sỏi","Cát thô","Bột","Sét"], ans: 3, explain: "Sét có $k = 10^{-11} – 10^{-8}$ m/s — thấm rất kém. Đây là lý do sét được dùng làm lõi đập ngăn nước." },
        ]
      },
      {
        id: "7-2", title: "Thí nghiệm xác định hệ số thấm",
        content: `## 7.2 Thí nghiệm Xác định Hệ số Thấm

### Thí nghiệm cột nước không đổi (Constant Head Test)

**Dùng cho đất thô** (cát, sỏi) — $k > 10^{-4}$ m/s

$$k = \\frac{q \\cdot L}{A \\cdot \\Delta h}$$

Trong đó:
- $q$ = lưu lượng đo được (m³/s)
- $L$ = chiều dài mẫu (m)
- $A$ = diện tích tiết diện (m²)
- $\\Delta h$ = chênh lệch cột nước (m)

### Thí nghiệm cột nước thay đổi (Falling Head Test)

**Dùng cho đất mịn** (sét, bột) — $k < 10^{-4}$ m/s

$$k = \\frac{a \\cdot L}{A \\cdot (t_2 - t_1)} \\cdot \\ln\\frac{h_1}{h_2}$$

Trong đó:
- $a$ = diện tích ống đứng (m²)
- $h_1, h_2$ = cột nước đầu và cuối (m)
- $t_1, t_2$ = thời điểm đo

### Thấm trong đất phân lớp

**Thấm ngang** (song song lớp) — dòng thấm qua lớp dày trước:

$$k_H = \\frac{\\sum k_i \\cdot h_i}{\\sum h_i}$$

**Thấm đứng** (vuông góc lớp) — hạn chế bởi lớp thấm kém nhất:

$$k_V = \\frac{\\sum h_i}{\\sum h_i/k_i}$$

Luôn luôn: $k_H \\geq k_V$`,
        quiz: [
          { q: "Thí nghiệm Falling Head dùng cho loại đất nào?", options: ["Cát thô sạch","Sỏi","Đất mịn (sét, bột)","Đá nứt nẻ"], ans: 2, explain: "Falling Head Test cho đất mịn có $k < 10^{-4}$ m/s. Constant Head Test cho đất thô $k > 10^{-4}$ m/s." },
          { q: "Tại sao $k_H \\geq k_V$ trong đất phân lớp?", options: ["Do thấm ngang dễ hơn","Thấm đứng bị hạn chế bởi lớp thấm kém nhất","Do trọng lực","Không đúng, $k_H < k_V$"], ans: 1, explain: "Thấm đứng qua lớp nối tiếp — bị kiểm soát bởi lớp thấm kém nhất (như điện trở mắc nối tiếp). Thấm ngang qua lớp song song — lớp thấm tốt đóng góp nhiều nhất." },
        ]
      },
      {
        id: "7-3", title: "Lưới thấm (Flow Net)",
        content: `## 7.3 Lưới Thấm (Flow Net)

### Định nghĩa

Lưới thấm gồm hai họ đường:
- **Đường dòng (Flow lines):** quỹ đạo di chuyển của nước
- **Đường đẳng thế (Equipotential lines):** tổng cột nước bằng nhau

Hai họ đường này **vuông góc nhau** và tạo thành các ô gần vuông.

### Lưu lượng thấm

$$q = k \\cdot H \\cdot \\frac{N_f}{N_d}$$

- $N_f$ = số ô dòng (flow channels)
- $N_d$ = số ô đẳng thế (potential drops)  
- $H$ = chênh lệch cột nước tổng

### Áp lực nước lỗ rỗng

Tại điểm có $n_d$ ô đẳng thế đã tiêu tán từ thượng lưu:

$$h_p = H - n_d \\cdot \\frac{H}{N_d} \\qquad u = \\gamma_w \\cdot h_p$$

### Lực đẩy thủy tĩnh dưới công trình

$$U = u_{avg} \\cdot B$$

$B$ = chiều rộng công trình; $u_{avg}$ = áp lực nước trung bình.`,
        quiz: [
          { q: "Công thức tính lưu lượng thấm qua lưới thấm là?", options: ["$q = k \\cdot H \\cdot N_d/N_f$","$q = k \\cdot H \\cdot N_f/N_d$","$q = k \\cdot N_f \\cdot N_d$","$q = H \\cdot N_f/N_d$"], ans: 1, explain: "$q = k \\cdot H \\cdot N_f/N_d$. Lưu lượng tăng khi có nhiều ô dòng ($N_f$ lớn) và giảm khi có nhiều bậc tiêu tán ($N_d$ lớn)." },
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Vòng Tròn Mohr",
    icon: "⭕",
    sections: [
      {
        id: "8-1", title: "Cơ sở lý thuyết",
        content: `## 8.1 Cơ sở Lý thuyết — Ứng suất trên mặt phẳng nghiêng

Tại một điểm trong khối đất, xét mặt phẳng nghiêng góc $\\theta$ với phương ngang:

$$\\sigma_\\theta = \\frac{\\sigma_1 + \\sigma_3}{2} + \\frac{\\sigma_1 - \\sigma_3}{2} \\cos 2\\theta$$

$$\\tau_\\theta = \\frac{\\sigma_1 - \\sigma_3}{2} \\sin 2\\theta$$

$\\sigma_1, \\sigma_3$: ứng suất chính lớn và nhỏ (trên các mặt phẳng không có ứng suất cắt).

### Ứng suất cắt lớn nhất

$$\\tau_{max} = \\frac{\\sigma_1 - \\sigma_3}{2} \\quad \\text{tại } \\theta = 45°$$

### Ứng suất trên mặt phẳng phá hoại

Mặt phẳng phá hoại nghiêng góc $\\theta_f$ với mặt phẳng ngang:

$$\\theta_f = 45° + \\frac{\\phi'}{2}$$`,
        quiz: [
          { q: "Ứng suất cắt lớn nhất xảy ra trên mặt phẳng nghiêng bao nhiêu độ?", options: ["$\\theta = 30°$","$\\theta = 45°$","$\\theta = 60°$","$\\theta = \\phi/2$"], ans: 1, explain: "$\\tau_{max}$ xảy ra tại $\\theta = 45°$ so với mặt phẳng ứng suất chính. Nhưng phá hoại xảy ra tại $\\theta_f = 45° + \\phi'/2$." },
        ]
      },
      {
        id: "8-2", title: "Vòng tròn Mohr và phương pháp cực",
        content: `## 8.2 Vòng Tròn Mohr và Phương pháp Cực

### Vòng tròn Mohr

Tập hợp điểm $\\{\\sigma_\\theta, \\tau_\\theta\\}$ cho mọi $\\theta$ tạo thành **vòng tròn** trên hệ $\\sigma-\\tau$:

**Tâm:** $C = \\left(\\frac{\\sigma_1 + \\sigma_3}{2},\\ 0\\right)$

**Bán kính:** $R = \\frac{\\sigma_1 - \\sigma_3}{2} = \\tau_{max}$

### Cách vẽ vòng tròn Mohr

1. Xác định $\\sigma_1$ và $\\sigma_3$
2. Đánh dấu điểm $A(\\sigma_3, 0)$ và $B(\\sigma_1, 0)$ trên trục $\\sigma$
3. Tâm $C$ = trung điểm $AB$; bán kính $R = (\\sigma_1 - \\sigma_3)/2$
4. Vẽ vòng tròn tâm $C$, bán kính $R$

### Phương pháp Cực (Pole Method)

**Quy tắc:** Từ **điểm cực P** vẽ đường song song với mặt phẳng xét → cắt vòng tròn tại điểm cho ứng suất trên mặt phẳng đó.

**Xác định điểm cực P:**
- Từ điểm $A(\\sigma_3, 0)$: vẽ đường ngang → giao với vòng tròn = $P$
- Hoặc từ điểm $B(\\sigma_1, 0)$: vẽ đường đứng → giao với vòng tròn = $P$

> 💡 Phương pháp cực cho phép tìm ứng suất trên bất kỳ mặt phẳng nào chỉ bằng thước kẻ, không cần tính.`,
        quiz: [
          { q: "Bán kính của vòng tròn Mohr bằng?", options: ["$(\\sigma_1+\\sigma_3)/2$","$(\\sigma_1-\\sigma_3)/2$","$\\sigma_1 \\cdot \\sigma_3$","$\\sqrt{\\sigma_1^2+\\sigma_3^2}$"], ans: 1, explain: "Bán kính $R = (\\sigma_1-\\sigma_3)/2 = \\tau_{max}$. Tâm $C = (\\sigma_1+\\sigma_3)/2$." },
          { q: "Phương pháp cực (Pole Method) dùng để làm gì?", options: ["Tính lún","Xác định đồ họa ứng suất trên mặt phẳng bất kỳ","Phân tích dòng thấm","Tính hệ số cố kết"], ans: 1, explain: "Phương pháp cực cho phép xác định ứng suất $(\\sigma_\\theta, \\tau_\\theta)$ trên mặt phẳng bất kỳ chỉ bằng cách vẽ đường song song từ điểm cực." },
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Biến Dạng Đất",
    icon: "📐",
    sections: [
      {
        id: "9-1", title: "Thí nghiệm xác định cường độ",
        content: `## 9.1 Thí nghiệm Xác định Cường độ

### Thí nghiệm nén không hạn chế (UCT — Unconfined Compression Test)

Mẫu hình trụ nén đứng **không có áp lực buồng** ($\\sigma_3 = 0$):

$$q_u = \\frac{P}{A} \\qquad c_u = \\frac{q_u}{2}$$

Nhanh, đơn giản nhưng chỉ dùng cho **đất dính bão hòa** (sét không thoát nước).

### Thí nghiệm Ba trục (Triaxial Compression Test)

Mẫu chịu **áp lực buồng** $\\sigma_3$ + tải dọc trục $\\Delta\\sigma$:

$$\\sigma_1 = \\sigma_3 + \\Delta\\sigma$$

| Ký hiệu | Tên đầy đủ | Điều kiện | Kết quả |
|---------|-----------|-----------|---------|
| **UU** | Unconsolidated Undrained | Không cố kết, không thoát | $c_u$, $\\phi_u \\approx 0$ |
| **CU** | Consolidated Undrained | Cố kết, không thoát | $c'$, $\\phi'$ + đo $u$ |
| **CD** | Consolidated Drained | Cố kết, thoát nước | $c'$, $\\phi'$ chính xác |

### Hệ số áp lực nước lỗ rỗng Skempton

$$\\Delta u = B[\\Delta\\sigma_3 + A(\\Delta\\sigma_1 - \\Delta\\sigma_3)]$$

- Đất bão hòa: $B = 1$
- Sét NC tại phá hoại: $A_f \\approx 0.5 – 1.0$
- Sét OC tại phá hoại: $A_f < 0$ (giảm áp lực khi cắt)`,
        quiz: [
          { q: "Thí nghiệm UCT (nén không hạn chế) chỉ áp dụng cho loại đất nào?", options: ["Cát bão hòa","Đất sét bão hòa","Sỏi","Tất cả loại đất"], ans: 1, explain: "UCT chỉ dùng cho đất dính bão hòa (sét). Mẫu cát không thể đứng không có áp lực buồng." },
          { q: "Thí nghiệm CU ba trục cho biết thông số nào?", options: ["Chỉ $c_u$","Chỉ $k$","Cả $c'$ và $\\phi'$ hữu hiệu (khi đo áp lực nước)","Chỉ $e$ và $n$"], ans: 2, explain: "CU với đo áp lực nước lỗ rỗng $u$ cho phép xác định thông số hữu hiệu $c'$ và $\\phi'$." },
        ]
      },
      {
        id: "9-2", title: "Đặc tính ứng suất – biến dạng",
        content: `## 9.2 Đặc tính Ứng suất – Biến dạng

### Biến dạng dọc trục

$$\\varepsilon_1 = \\frac{\\Delta L}{L_0}$$

### Ứng suất lệch (Deviator Stress)

$$q = \\sigma_1 - \\sigma_3 = \\frac{P}{A_{corrected}}$$

**Diện tích mẫu hiệu chỉnh** (khi mẫu phình ra):

$$A_{corrected} = \\frac{A_0}{1 - \\varepsilon_1}$$

### Dạng phá hoại điển hình

**Sét bình thường cố kết (NC):**
- Biến dạng lớn trước khi phá hoại
- Đường ứng suất – biến dạng tăng chậm
- Áp lực nước $u > 0$ trong thí nghiệm CU

**Sét quá cố kết (OC):**
- Đỉnh ứng suất rõ ràng rồi giảm
- Thể hiện giòn hơn
- Áp lực nước $u < 0$ (hút nước khi cắt)

### Biến dạng tức thời và biến dạng theo thời gian

$$S_{total} = S_i + S_c + S_{creep}$$

- $S_i$: Lún tức thời (đàn hồi hoặc không thoát nước)
- $S_c$: Lún cố kết sơ cấp (thoát nước từ lỗ rỗng)
- $S_{creep}$: Lún từ biến (thứ cấp)`,
        quiz: [
          { q: "Sét quá cố kết (OC) có áp lực nước lỗ rỗng $u$ như thế nào trong thí nghiệm CU?", options: ["$u > 0$ luôn luôn","$u < 0$ (hút nước)","$u = 0$ luôn","$u$ bằng $\\sigma_3$"], ans: 1, explain: "Sét OC có cấu trúc 'muốn nở ra' khi bị cắt → $u < 0$ (negative pore pressure). Sét NC có $u > 0$." },
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Cố Kết Đất Mềm",
    icon: "⏱️",
    sections: [
      {
        id: "10-1", title: "Quá trình cố kết",
        content: `## 10.1 Quá trình Cố kết

**Cố kết (Consolidation):** Quá trình đất mịn (sét, bùn) nén chặt dần dưới tải do **nước thoát ra chậm** theo thời gian.

### Mô hình lò xo – piston của Terzaghi

Mô hình đơn giản để hiểu cố kết:

| Phần | Tương đương với |
|------|----------------|
| Lò xo | Khung hạt đất |
| Nước trong xilanh | Nước lỗ rỗng |
| Lỗ nhỏ trên piston | Tính thấm của đất |
| Ép piston | Đặt tải trọng |

**Khi đặt tải:**
1. Ngay lập tức: toàn bộ tải do nước lỗ rỗng chịu → $\\Delta u = \\Delta\\sigma$
2. Theo thời gian: nước thoát dần, tải chuyển sang hạt rắn → $\\sigma'$ tăng
3. Cuối cùng: $\\Delta u = 0$, toàn bộ tải do hạt chịu

### Điều kiện cố kết

| Điều kiện | Mô tả |
|-----------|-------|
| Bình thường cố kết (NC) | $\\sigma'_0 = \\sigma'_{c,max}$ — chưa từng chịu tải lớn hơn |
| Quá cố kết (OC) | $\\sigma'_0 < \\sigma'_{c,max}$ — từng bị nén chặt hơn mức hiện tại |`,
        quiz: [
          { q: "Ngay khi đặt tải lên đất sét bão hòa, tải được chịu bởi?", options: ["Hạt rắn","Nước lỗ rỗng (áp lực nước tăng)","Chia đều cả hai","Phụ thuộc loại đất"], ans: 1, explain: "Ngay lập tức, nước không kịp thoát → toàn bộ tải truyền vào áp lực nước lỗ rỗng dư: $\\Delta u = \\Delta\\sigma$. Theo thời gian, $u$ giảm dần, $\\sigma'$ tăng dần." },
        ]
      },
      {
        id: "10-2", title: "Tính lún cố kết",
        content: `## 10.2 Tính Lún Cố kết

### Thí nghiệm nén cố kết (Oedometer)

Từ thí nghiệm, vẽ đồ thị $e – \\log\\sigma'$:

- **Hệ số nén (Compression Index):** $C_c$ — độ dốc đường gia tải
- **Hệ số giãn nở (Swelling Index):** $C_s \\approx C_c/5 – C_c/10$
- **Áp lực tiền cố kết:** $\\sigma'_c$ (xác định bằng phương pháp Casagrande)

$$OCR = \\frac{\\sigma'_c}{\\sigma'_{v0}}$$

### Tính lún cố kết

**Đất bình thường cố kết** (NC, $OCR = 1$):

$$S_c = \\frac{C_c}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$

**Đất quá cố kết** (OC), khi $\\sigma'_0 + \\Delta\\sigma' \\leq \\sigma'_c$:

$$S_c = \\frac{C_s}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$

**Đất quá cố kết**, khi $\\sigma'_0 + \\Delta\\sigma' > \\sigma'_c$:

$$S_c = \\frac{C_s}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_c}{\\sigma'_0} + \\frac{C_c}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_c}$$

> 💡 **Dự án Pimpama:** $C_c \\approx 0.7$, $H = 4$ m → Lún dự kiến **0.8–1.5 m**!`,
        quiz: [
          { q: "Tỷ số quá cố kết $OCR = ?$", options: ["$\\sigma'_{v0}/\\sigma'_c$","$\\sigma'_c/\\sigma'_{v0}$","$e_0/e$","$C_c/C_s$"], ans: 1, explain: "$OCR = \\sigma'_c/\\sigma'_{v0}$: áp lực tiền cố kết chia ứng suất hữu hiệu hiện tại. $OCR=1$: NC; $OCR>1$: OC." },
          { q: "Khi tính lún cho đất NC, dùng hệ số nào?", options: ["$C_s$ (swelling index)","$C_c$ (compression index)","Cả hai","$C_v$ (consolidation)"], ans: 1, explain: "Đất NC chưa từng bị nén quá giá trị hiện tại → dùng $C_c$ (compression index, độ dốc đường gia tải)." },
        ]
      },
      {
        id: "10-3", title: "Lý thuyết cố kết Terzaghi",
        content: `## 10.3 Lý thuyết Cố kết Terzaghi

### Phương trình vi phân cố kết 1D

$$c_v \\frac{\\partial^2 u}{\\partial z^2} = \\frac{\\partial u}{\\partial t}$$

### Hệ số cố kết — $c_v$

$$c_v = \\frac{k}{m_v \\cdot \\gamma_w} \\quad [\\text{m}^2/\\text{năm}]$$

Trong đó $m_v = \\Delta\\varepsilon_v / \\Delta\\sigma'$ = hệ số thể tích nén.

### Nhân tố thời gian (Time Factor) — $T_v$

$$T_v = \\frac{c_v \\cdot t}{H_{dr}^2}$$

$H_{dr}$ = chiều dài đường thoát nước:
- Thoát nước **hai chiều**: $H_{dr} = H/2$
- Thoát nước **một chiều**: $H_{dr} = H$

### Mức độ cố kết — $U$

| $T_v$ | $U$ (%) |
|-------|---------|
| 0.008 | 10 |
| 0.031 | 20 |
| 0.197 | 50 |
| 0.405 | 70 |
| 0.848 | 90 |
| 1.163 | 95 |

**Công thức gần đúng** (khi $U < 60\\%$):

$$U \\approx \\sqrt{\\frac{4 T_v}{\\pi}} \\times 100\\%$$

### Ứng dụng thực tế

Khi biết $U$ mục tiêu → tính $T_v$ → tính $t$:

$$t = \\frac{T_v \\cdot H_{dr}^2}{c_v}$$`,
        quiz: [
          { q: "Chiều dài đường thoát nước $H_{dr}$ khi lớp đất thoát nước hai chiều là?", options: ["$H_{dr} = H$","$H_{dr} = H/2$","$H_{dr} = 2H$","$H_{dr} = H/4$"], ans: 1, explain: "Thoát nước hai chiều (trên và dưới): $H_{dr} = H/2$ vì nước chỉ cần đi tối đa nửa chiều dày để thoát." },
          { q: "Hệ số cố kết $c_v$ liên quan đến $k$ như thế nào?", options: ["$c_v = k \\cdot m_v \\cdot \\gamma_w$","$c_v = k/(m_v \\cdot \\gamma_w)$","$c_v = k + m_v$","$c_v = m_v/k$"], ans: 1, explain: "$c_v = k/(m_v \\cdot \\gamma_w)$. $k$ lớn → thoát nước nhanh → $c_v$ lớn → cố kết nhanh." },
          { q: "Đất đạt $U = 50\\%$ cố kết khi $T_v \\approx ?$", options: ["0.031","0.197","0.405","0.848"], ans: 1, explain: "$T_v = 0.197$ tương ứng $U = 50\\%$ — thường dùng làm mốc đánh giá tốc độ cố kết." },
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Sức Chống Cắt & Ổn định Mái dốc",
    icon: "⛰️",
    sections: [
      {
        id: "11-1", title: "Tiêu chuẩn phá hoại Mohr-Coulomb",
        content: `## 11.1 Tiêu chuẩn Phá hoại Mohr-Coulomb

### Công thức

$$\\tau_f = c' + \\sigma'_n \\tan\\phi'$$

| Tham số | Ý nghĩa | Điển hình |
|---------|---------|-----------|
| $c'$ | Lực dính hữu hiệu (kPa) | 0–30 kPa (sét); 0 (cát) |
| $\\phi'$ | Góc ma sát trong hữu hiệu (°) | 25°–45° (cát); 20°–35° (sét) |
| $c_u$ | Lực dính không thoát nước | 5–200 kPa |

### Phân tích Tổng vs Hữu hiệu

**Ngắn hạn (thi công)** — Phân tích tổng ứng suất:
$$\\tau_f = c_u \\quad (\\phi_u = 0 \\text{ cho sét bão hòa})$$

**Dài hạn (ổn định)** — Phân tích hữu hiệu:
$$\\tau_f = c' + \\sigma'_n \\tan\\phi'$$

### Thí nghiệm hộp cắt (Shear Box)

$$\\tau_f = \\frac{F_{shear}}{A} \\qquad \\sigma'_n = \\frac{N}{A}$$

Vẽ 3+ điểm $\\{\\sigma'_n, \\tau_f\\}$ → đường thẳng → xác định $c'$ và $\\phi'$.`,
        quiz: [
          { q: "Tiêu chuẩn phá hoại Mohr-Coulomb: $\\tau_f = ?$", options: ["$c' - \\sigma'\\tan\\phi'$","$c' + \\sigma'\\tan\\phi'$","$\\sigma'\\tan\\phi'$","$c'/(1+\\tan\\phi')$"], ans: 1, explain: "$\\tau_f = c' + \\sigma'\\tan\\phi'$: sức chống cắt gồm hai thành phần — lực dính $c'$ (nội lực hút giữa hạt) và ma sát $\\sigma'\\tan\\phi'$." },
          { q: "Phân tích ổn định ngắn hạn (ngay sau thi công) dùng tham số nào?", options: ["$c', \\phi'$ hữu hiệu","$c_u, \\phi_u = 0$","$c_u, \\phi' = 30°$","Không cần tham số"], ans: 1, explain: "Ngắn hạn dùng $c_u, \\phi_u = 0$ (phân tích tổng ứng suất). Áp lực nước chưa kịp tiêu tán → dùng sức chống cắt không thoát nước." },
        ]
      },
      {
        id: "11-2", title: "Phân tích ổn định mái dốc",
        content: `## 11.2 Phân tích Ổn định Mái dốc

### Mái dốc vô hạn (Infinite Slope)

**Trường hợp khô, không thấm:**

$$FS = \\frac{\\tan\\phi'}{\\tan\\beta}$$

**Mực nước ngầm ở mặt đất (thấm bão hòa):**

$$FS = \\frac{\\gamma'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\phi'}{\\tan\\beta}$$

Với $\\gamma'/\\gamma_{sat} \\approx 0.5$ → mực nước ngầm làm giảm $FS$ đi khoảng **50%**!

### Phương pháp Bishops Đơn giản (Circular Slip)

Mặt trượt tròn, chia thành $n$ mảnh:

$$FS = \\frac{\\sum_{i}\\left[\\dfrac{c'b_i + (W_i - u_ib_i)\\tan\\phi'}{m_{\\alpha,i}}\\right]}{\\sum_{i} W_i \\sin\\alpha_i}$$

$$m_{\\alpha,i} = \\cos\\alpha_i + \\frac{\\tan\\phi'\\sin\\alpha_i}{FS}$$

**Giải lặp:**
1. Giả sử $FS_0 = 1.5$
2. Tính $m_\\alpha$ và $FS$ mới
3. Lặp đến $|FS_{n+1} - FS_n| < 0.001$

### Yêu cầu thiết kế

| Loại công trình | $FS$ tối thiểu |
|----------------|---------------|
| Mái dốc tạm | 1.3 |
| Mái dốc lâu dài | **1.5** |
| Đập đất | 1.5 – 2.0 |

> ⚠️ **Dự án Pimpama:** Mái dốc $\\beta = 18°$, $c_u = 10$ kPa → $FS \\approx 1.1$ — **KHÔNG ĐẠT!** Cần giảm độ dốc hoặc cải tạo đất.`,
        quiz: [
          { q: "Mái dốc vô hạn trên đất rời khô ổn định khi nào?", options: ["$\\beta > \\phi'$","$\\beta = 45°$","$\\beta < \\phi'$","$\\beta < 30°$"], ans: 2, explain: "$FS = \\tan\\phi'/\\tan\\beta > 1$ khi $\\beta < \\phi'$. Góc mái dốc phải nhỏ hơn góc ma sát trong để ổn định." },
          { q: "Phương pháp Bishop đơn giản giải theo cách nào?", options: ["Giải trực tiếp","Giải lặp (iterative)","Phương pháp số","Giải đồ họa"], ans: 1, explain: "Bishop đơn giản cần giải lặp vì $m_\\alpha$ phụ thuộc $FS$ — thường hội tụ sau 3–5 vòng lặp." },
          { q: "Hệ số an toàn $FS$ tối thiểu cho mái dốc lâu dài thường là?", options: ["FS ≥ 1.0","FS ≥ 1.3","FS ≥ 1.5","FS ≥ 2.5"], ans: 2, explain: "$FS \\geq 1.5$ là yêu cầu tiêu chuẩn cho mái dốc lâu dài. Nếu $FS < 1$: mái dốc đã phá hoại rồi!" },
        ]
      }
    ]
  }
];

// Flatten all sections for navigation
const ALL_SECTIONS = CHAPTERS.flatMap(ch =>
  ch.sections.map(s => ({ ...s, chapterId: ch.id, chapterTitle: ch.title, chapterIcon: ch.icon }))
);

// ─── QUIZ COMPONENT ───────────────────────────────────────────────────────────

function Quiz({ questions }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.reduce((acc, q, i) => acc + (answers[i] === q.ans ? 1 : 0), 0)
    : 0;

  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div className="quiz-wrap">
      <div className="quiz-head">
        <span>🎯</span>
        <span>Kiểm tra kiến thức</span>
        {submitted && <span className="score-badge">{score}/{questions.length}</span>}
      </div>
      {questions.map((q, i) => (
        <div key={i} className={`q-item${submitted ? answers[i] === q.ans ? " q-correct" : " q-wrong" : ""}`}>
          <p className="q-text">{i + 1}. {q.q}</p>
          <div className="q-opts">
            {q.options.map((opt, j) => (
              <label
                key={j}
                className={`q-opt${answers[i] === j ? " selected" : ""}${submitted && j === q.ans ? " correct-opt" : ""}`}
              >
                <input
                  type="radio" name={`q${i}-${q.q.slice(0,10)}`}
                  disabled={submitted}
                  checked={answers[i] === j}
                  onChange={() => !submitted && setAnswers(p => ({ ...p, [i]: j }))}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {submitted && (
            <div className={`q-explain${answers[i] === q.ans ? " exp-ok" : " exp-err"}`}>
              {answers[i] === q.ans ? "✅" : "❌"} <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{q.explain}</ReactMarkdown>
            </div>
          )}
        </div>
      ))}
      <div className="quiz-footer">
        {!submitted ? (
          <button
            className="btn-submit"
            disabled={Object.keys(answers).length < questions.length}
            onClick={() => setSubmitted(true)}
          >Nộp bài ✓</button>
        ) : (
          <>
            <div className="result-msg">
              {score === questions.length ? "🎉 Xuất sắc!" : score >= questions.length * 0.7 ? "👍 Làm tốt lắm!" : "📖 Ôn lại nhé!"}
            </div>
            <button className="btn-reset" onClick={reset}>↺ Làm lại</button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────

export default function App() {
  const [dark, setDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);
  const [activeSectionId, setActiveSectionId] = useState("1-1");
  const [expandedChapters, setExpandedChapters] = useState({ 1: true });
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const contentRef = useRef(null);
  const searchRef = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const activeSection = useMemo(
    () => ALL_SECTIONS.find(s => s.id === activeSectionId) || ALL_SECTIONS[0],
    [activeSectionId]
  );
  const activeIdx = useMemo(
    () => ALL_SECTIONS.findIndex(s => s.id === activeSectionId),
    [activeSectionId]
  );

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return ALL_SECTIONS.filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.chapterTitle.toLowerCase().includes(q) ||
      s.content.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [search]);

  const navigate = useCallback((sectionId) => {
    setActiveSectionId(sectionId);
    setShowQuiz(false);
    setSidebarOpen(false);
    setSearch("");
    setSearchOpen(false);
    if (contentRef.current) contentRef.current.scrollTop = 0;
    // Auto-expand the chapter
    const sec = ALL_SECTIONS.find(s => s.id === sectionId);
    if (sec) setExpandedChapters(p => ({ ...p, [sec.chapterId]: true }));
  }, []);

  const toggleChapter = useCallback((id) => {
    setExpandedChapters(p => ({ ...p, [id]: !p[id] }));
  }, []);

  // Close sidebar on outside click
  useEffect(() => {
    const handler = (e) => {
      if (sidebarOpen && !e.target.closest(".sidebar") && !e.target.closest(".topbar-menu-btn")) {
        setSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sidebarOpen]);

  const prevSection = activeIdx > 0 ? ALL_SECTIONS[activeIdx - 1] : null;
  const nextSection = activeIdx < ALL_SECTIONS.length - 1 ? ALL_SECTIONS[activeIdx + 1] : null;

  return (
    <div className={`root ${dark ? "dark" : "light"}`}>
      <style>{STYLES}</style>

      {/* ── TOPBAR ── */}
      <header className="topbar">
        <button className="topbar-menu-btn" onClick={() => setSidebarOpen(o => !o)}>
          <span /><span /><span />
        </button>

        <div className="topbar-brand">
          <span className="brand-icon">📚</span>
          <span className="brand-text">Cơ Học Đất</span>
        </div>

        <div className={`topbar-search-wrap ${searchOpen ? "open" : ""}`}>
          <button className="search-toggle-btn" onClick={() => { setSearchOpen(o => !o); setTimeout(() => searchRef.current?.focus(), 50); }}>🔍</button>
          <div className="search-box">
            <span className="search-ico">🔍</span>
            <input
              ref={searchRef}
              type="search"
              placeholder="Tìm kiếm bài học..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              onBlur={() => setTimeout(() => { setSearch(""); setSearchOpen(false); }, 150)}
            />
            {search && (
              <div className="search-results">
                {searchResults.length > 0 ? searchResults.map((r, i) => (
                  <button key={i} className="search-result-item" onMouseDown={() => navigate(r.id)}>
                    <span className="sr-chapter">{r.chapterIcon} {r.chapterTitle}</span>
                    <span className="sr-title">§ {r.title}</span>
                  </button>
                )) : (
                  <div className="search-empty">Không tìm thấy kết quả</div>
                )}
              </div>
            )}
          </div>
        </div>

        <button className="topbar-theme-btn" onClick={() => setDark(d => !d)} title="Đổi chế độ">
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="layout">
        {/* ── SIDEBAR OVERLAY ── */}
        {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}

        {/* ── SIDEBAR ── */}
        <nav className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
          <div className="sidebar-top">
            <div className="sidebar-logo">📚 Cơ Học Đất</div>
            <div className="sidebar-sub">Gratchev · Jeng · Oh (2019)</div>
          </div>
          <div className="chapter-list">
            {CHAPTERS.map(ch => {
              const isExpanded = !!expandedChapters[ch.id];
              const isActiveChapter = ch.sections.some(s => s.id === activeSectionId);
              return (
                <div key={ch.id} className="chapter-item">
                  <button
                    className={`chapter-btn ${isActiveChapter ? "ch-active" : ""}`}
                    onClick={() => toggleChapter(ch.id)}
                  >
                    <span className="ch-icon">{ch.icon}</span>
                    <span className="ch-num">{String(ch.id).padStart(2, "0")}</span>
                    <span className="ch-title">{ch.title}</span>
                    <span className={`ch-arrow ${isExpanded ? "expanded" : ""}`}>›</span>
                  </button>
                  {isExpanded && (
                    <div className="section-list">
                      {ch.sections.map(s => (
                        <button
                          key={s.id}
                          className={`section-btn ${activeSectionId === s.id ? "sec-active" : ""}`}
                          onClick={() => navigate(s.id)}
                        >
                          <span className="sec-dot" />
                          {s.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="sidebar-footer">
            <div className="progress-info">
              Bài {activeIdx + 1} / {ALL_SECTIONS.length}
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${((activeIdx + 1) / ALL_SECTIONS.length) * 100}%` }} />
            </div>
          </div>
        </nav>

        {/* ── CONTENT ── */}
        <main className="content" ref={contentRef}>
          <div className="content-inner">
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <span>{activeSection.chapterIcon} Chương {activeSection.chapterId}</span>
              <span className="bc-sep">›</span>
              <span>{activeSection.chapterTitle}</span>
            </div>

            {/* Markdown Content */}
            <article className="article">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  h2: ({ children }) => <h2 className="art-h2">{children}</h2>,
                  h3: ({ children }) => <h3 className="art-h3">{children}</h3>,
                  p: ({ children }) => <p className="art-p">{children}</p>,
                  ul: ({ children }) => <ul className="art-ul">{children}</ul>,
                  ol: ({ children }) => <ol className="art-ol">{children}</ol>,
                  li: ({ children }) => <li className="art-li">{children}</li>,
                  blockquote: ({ children }) => <blockquote className="art-blockquote">{children}</blockquote>,
                  table: ({ children }) => <div className="art-table-wrap"><table className="art-table">{children}</table></div>,
                  th: ({ children }) => <th className="art-th">{children}</th>,
                  td: ({ children }) => <td className="art-td">{children}</td>,
                  code: ({ inline, children }) => inline
                    ? <code className="art-code">{children}</code>
                    : <pre className="art-pre"><code>{children}</code></pre>,
                  strong: ({ children }) => <strong className="art-strong">{children}</strong>,
                }}
              >
                {activeSection.content}
              </ReactMarkdown>
            </article>

            {/* Quiz Toggle */}
            {activeSection.quiz && (
              <button className="quiz-toggle-btn" onClick={() => setShowQuiz(q => !q)}>
                <span>🎯</span>
                <span>{showQuiz ? "Ẩn kiểm tra kiến thức" : "Kiểm tra kiến thức"}</span>
                <span className="quiz-count">{activeSection.quiz.length} câu</span>
                <span className={`toggle-arrow ${showQuiz ? "open" : ""}`}>›</span>
              </button>
            )}
            {showQuiz && activeSection.quiz && <Quiz key={activeSectionId} questions={activeSection.quiz} />}

            {/* Prev / Next */}
            <div className="nav-row">
              <button
                className="nav-btn nav-prev"
                disabled={!prevSection}
                onClick={() => prevSection && navigate(prevSection.id)}
              >
                <span className="nav-arrow">‹</span>
                <span className="nav-label">
                  <span className="nav-hint">Bài trước</span>
                  <span className="nav-title">{prevSection?.title || ""}</span>
                </span>
              </button>
              <button
                className="nav-btn nav-next"
                disabled={!nextSection}
                onClick={() => nextSection && navigate(nextSection.id)}
              >
                <span className="nav-label">
                  <span className="nav-hint">Bài tiếp</span>
                  <span className="nav-title">{nextSection?.title || ""}</span>
                </span>
                <span className="nav-arrow">›</span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;600;700&family=IBM+Plex+Sans:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body, #root { height: 100%; }

.light {
  --bg: #f8f6f1;
  --bg2: #f0ece3;
  --surface: #ffffff;
  --sidebar-bg: #1c1917;
  --sidebar-text: #e7e0d5;
  --sidebar-muted: #78716c;
  --sidebar-hover: rgba(255,255,255,0.06);
  --sidebar-active-bg: rgba(214,142,72,0.15);
  --accent: #c07c38;
  --accent-dark: #a0621e;
  --text: #1c1917;
  --text2: #57534e;
  --text3: #a8a29e;
  --border: #e5ddd4;
  --border2: #d4c9bc;
  --math-bg: #fdf4e7;
  --math-border: #e5c98a;
  --blockquote-border: #c07c38;
  --blockquote-bg: #fdf5ec;
  --table-head: #c07c38;
  --code-bg: #f0ece3;
  --quiz-bg: #fff9f2;
  --quiz-border: #c07c38;
  --correct: #15803d;
  --correct-bg: #f0fdf4;
  --wrong: #dc2626;
  --wrong-bg: #fef2f2;
  --shadow: 0 1px 3px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.06);
  --topbar-bg: #1c1917;
}
.dark {
  --bg: #0f0e0d;
  --bg2: #1a1816;
  --surface: #1e1c19;
  --sidebar-bg: #0a0908;
  --sidebar-text: #e7e0d5;
  --sidebar-muted: #6b6560;
  --sidebar-hover: rgba(255,255,255,0.05);
  --sidebar-active-bg: rgba(214,142,72,0.12);
  --accent: #d4924a;
  --accent-dark: #b87434;
  --text: #e7e0d5;
  --text2: #a8a29e;
  --text3: #57534e;
  --border: #2a2725;
  --border2: #3a3530;
  --math-bg: #1e1c19;
  --math-border: #4a3a20;
  --blockquote-border: #d4924a;
  --blockquote-bg: #1e1c19;
  --table-head: #4a3520;
  --code-bg: #1a1816;
  --quiz-bg: #1e1c19;
  --quiz-border: #d4924a;
  --correct: #22c55e;
  --correct-bg: #052e16;
  --wrong: #ef4444;
  --wrong-bg: #2d0a0a;
  --shadow: 0 1px 3px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.2);
  --topbar-bg: #0a0908;
}

.root {
  font-family: 'IBM Plex Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ── TOPBAR ── */
.topbar {
  height: 52px;
  background: var(--topbar-bg);
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 14px;
  flex-shrink: 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  position: relative;
  z-index: 200;
}
.topbar-menu-btn {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 6px;
  flex-shrink: 0;
}
.topbar-menu-btn span {
  display: block;
  width: 18px;
  height: 2px;
  background: var(--sidebar-text);
  border-radius: 1px;
  transition: all 0.2s;
}
.topbar-menu-btn:hover { background: rgba(255,255,255,0.08); }
.topbar-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.brand-icon { font-size: 18px; }
.brand-text {
  font-family: 'Lora', serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--accent);
  white-space: nowrap;
}
.topbar-search-wrap {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 480px;
  margin: 0 auto;
}
.search-toggle-btn {
  display: none;
  background: rgba(255,255,255,0.08);
  border: none;
  width: 34px; height: 34px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
}
.search-box {
  position: relative;
  width: 100%;
}
.search-ico {
  position: absolute;
  left: 12px; top: 50%;
  transform: translateY(-50%);
  font-size: 13px;
  pointer-events: none;
}
.search-box input {
  width: 100%;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 22px;
  padding: 7px 14px 7px 34px;
  color: var(--sidebar-text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: all 0.2s;
}
.search-box input:focus {
  border-color: var(--accent);
  background: rgba(255,255,255,0.12);
}
.search-box input::placeholder { color: var(--sidebar-muted); }
.search-results {
  position: absolute;
  top: calc(100% + 8px);
  left: 0; right: 0;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  overflow: hidden;
  z-index: 300;
  max-height: 320px;
  overflow-y: auto;
}
.search-result-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 14px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid var(--border);
  transition: background 0.12s;
  width: 100%;
}
.search-result-item:hover { background: var(--bg2); }
.sr-chapter { font-size: 11px; color: var(--accent); font-weight: 600; letter-spacing: 0.05em; }
.sr-title { font-size: 13px; color: var(--text); }
.search-empty { padding: 12px 14px; color: var(--text2); font-size: 13px; }
.topbar-theme-btn {
  background: rgba(255,255,255,0.08);
  border: none;
  width: 34px; height: 34px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.15s;
}
.topbar-theme-btn:hover { background: rgba(255,255,255,0.15); }

/* ── LAYOUT ── */
.layout {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 90;
  display: none;
}

/* ── SIDEBAR ── */
.sidebar {
  width: 272px;
  flex-shrink: 0;
  background: var(--sidebar-bg);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-right: 1px solid rgba(255,255,255,0.05);
  transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
}
.sidebar-top {
  padding: 18px 16px 14px;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  flex-shrink: 0;
}
.sidebar-logo {
  font-family: 'Lora', serif;
  font-size: 14px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 3px;
}
.sidebar-sub { font-size: 11px; color: var(--sidebar-muted); }
.chapter-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0 12px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255,255,255,0.1) transparent;
}
.chapter-list::-webkit-scrollbar { width: 3px; }
.chapter-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
.chapter-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 14px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--sidebar-text);
  font-size: 13px;
  font-family: inherit;
  border-left: 2px solid transparent;
  transition: all 0.15s;
}
.chapter-btn:hover { background: var(--sidebar-hover); }
.chapter-btn.ch-active {
  background: var(--sidebar-active-bg);
  border-left-color: var(--accent);
  color: var(--accent);
}
.ch-icon { font-size: 15px; flex-shrink: 0; }
.ch-num { font-size: 10px; color: var(--sidebar-muted); font-weight: 700; letter-spacing: 0.08em; min-width: 20px; }
.ch-title { flex: 1; line-height: 1.35; font-weight: 500; }
.ch-arrow {
  font-size: 16px;
  color: var(--sidebar-muted);
  transition: transform 0.2s;
  line-height: 1;
}
.ch-arrow.expanded { transform: rotate(90deg); }
.section-list {
  padding: 2px 0 4px 44px;
}
.section-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 6px 12px 6px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  color: var(--sidebar-muted);
  font-size: 12px;
  font-family: inherit;
  line-height: 1.4;
  border-radius: 4px;
  transition: color 0.15s;
}
.section-btn:hover { color: var(--sidebar-text); }
.section-btn.sec-active { color: var(--accent); font-weight: 600; }
.sec-dot {
  width: 4px; height: 4px;
  border-radius: 50%;
  background: currentColor;
  flex-shrink: 0;
}
.sidebar-footer {
  padding: 12px 16px;
  border-top: 1px solid rgba(255,255,255,0.07);
  flex-shrink: 0;
}
.progress-info { font-size: 11px; color: var(--sidebar-muted); margin-bottom: 6px; }
.progress-track {
  height: 2px;
  background: rgba(255,255,255,0.1);
  border-radius: 1px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: var(--accent);
  border-radius: 1px;
  transition: width 0.4s ease;
}

/* ── CONTENT ── */
.content {
  flex: 1;
  overflow-y: auto;
  background: var(--bg);
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
.content::-webkit-scrollbar { width: 4px; }
.content::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px; }
.content-inner {
  max-width: 740px;
  margin: 0 auto;
  padding: 24px 20px 60px;
}
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--text3);
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.bc-sep { color: var(--border2); }

/* ── ARTICLE MARKDOWN ── */
.article { margin-bottom: 28px; }
.art-h2 {
  font-family: 'Lora', serif;
  font-size: 22px;
  font-weight: 700;
  color: var(--text);
  margin: 8px 0 18px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--border);
  line-height: 1.3;
}
.art-h3 {
  font-family: 'Lora', serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--accent);
  margin: 22px 0 10px;
}
.art-p { font-size: 15px; line-height: 1.8; color: var(--text2); margin-bottom: 12px; }
.art-ul, .art-ol { padding-left: 22px; margin: 10px 0 14px; }
.art-li { font-size: 15px; line-height: 1.75; color: var(--text2); margin-bottom: 5px; }
.art-strong { color: var(--text); font-weight: 600; }
.art-blockquote {
  border-left: 3px solid var(--blockquote-border);
  background: var(--blockquote-bg);
  padding: 12px 16px;
  border-radius: 0 8px 8px 0;
  margin: 16px 0;
  font-style: italic;
  color: var(--text2);
}
.art-blockquote p { margin: 0; font-size: 14px; }
.art-code {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 1px 6px;
  font-family: 'IBM Plex Mono', 'Courier New', monospace;
  font-size: 13px;
  color: var(--accent);
}
.art-pre {
  background: var(--code-bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px 16px;
  overflow-x: auto;
  font-size: 13px;
  line-height: 1.6;
  margin: 14px 0;
}
.art-table-wrap { overflow-x: auto; margin: 16px 0; border-radius: 8px; border: 1px solid var(--border); }
.art-table { width: 100%; border-collapse: collapse; font-size: 14px; }
.art-th {
  background: var(--table-head);
  color: #fff;
  padding: 9px 13px;
  text-align: left;
  font-weight: 600;
  white-space: nowrap;
}
.art-td {
  padding: 8px 13px;
  border-bottom: 1px solid var(--border);
  color: var(--text2);
  vertical-align: top;
}
.art-table tr:last-child .art-td { border-bottom: none; }
.art-table tr:nth-child(even) .art-td { background: var(--bg2); }

/* KaTeX display math override */
.katex-display {
  background: var(--math-bg);
  border-left: 3px solid var(--math-border);
  border-radius: 0 8px 8px 0;
  padding: 14px 18px;
  margin: 16px 0;
  overflow-x: auto;
}
.katex { font-size: 1em; }

/* ── QUIZ ── */
.quiz-toggle-btn {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--surface);
  border: 2px dashed var(--quiz-border);
  border-radius: 10px;
  padding: 13px 16px;
  cursor: pointer;
  color: var(--accent);
  font-weight: 600;
  font-size: 14px;
  font-family: inherit;
  margin-bottom: 16px;
  transition: all 0.15s;
}
.quiz-toggle-btn:hover { background: var(--quiz-bg); }
.quiz-count {
  margin-left: auto;
  background: var(--accent);
  color: #fff;
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: 700;
}
.toggle-arrow {
  font-size: 18px;
  transition: transform 0.2s;
  line-height: 1;
}
.toggle-arrow.open { transform: rotate(90deg); }
.quiz-wrap {
  background: var(--quiz-bg);
  border: 1.5px solid var(--quiz-border);
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 28px;
}
.quiz-head {
  background: var(--accent);
  color: #fff;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 14px;
}
.score-badge {
  margin-left: auto;
  background: rgba(255,255,255,0.25);
  padding: 2px 10px;
  border-radius: 10px;
  font-size: 13px;
}
.q-item {
  padding: 14px 16px;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}
.q-item:last-of-type { border-bottom: none; }
.q-correct { background: var(--correct-bg); }
.q-wrong { background: var(--wrong-bg); }
.q-text { font-size: 14px; font-weight: 600; color: var(--text); margin-bottom: 10px; line-height: 1.5; }
.q-opts { display: flex; flex-direction: column; gap: 6px; }
.q-opt {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 8px 12px;
  border: 1.5px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
  font-size: 13.5px;
  color: var(--text2);
  background: var(--surface);
  transition: all 0.12s;
  user-select: none;
}
.q-opt input { accent-color: var(--accent); flex-shrink: 0; }
.q-opt:hover:not([disabled]) { border-color: var(--accent); }
.q-opt.selected { border-color: var(--accent); color: var(--accent); background: rgba(192,124,56,0.08); }
.q-opt.correct-opt { border-color: var(--correct); color: var(--correct); background: var(--correct-bg); }
.q-explain {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.6;
  padding: 8px 12px;
  border-radius: 6px;
  display: flex;
  gap: 6px;
  align-items: flex-start;
}
.q-explain p { margin: 0; }
.exp-ok { background: var(--correct-bg); color: var(--correct); }
.exp-err { background: var(--wrong-bg); color: var(--wrong); }
.quiz-footer {
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-top: 1px solid var(--border);
}
.btn-submit {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 700;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-submit:hover:not(:disabled) { background: var(--accent-dark); }
.btn-submit:disabled { opacity: 0.4; cursor: default; }
.result-msg { font-size: 15px; color: var(--text); flex: 1; }
.btn-reset {
  background: none;
  border: 1.5px solid var(--accent);
  color: var(--accent);
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-reset:hover { background: rgba(192,124,56,0.08); }

/* ── NAVIGATION ── */
.nav-row {
  display: flex;
  gap: 10px;
  margin-top: 28px;
}
.nav-btn {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: var(--surface);
  border: 1.5px solid var(--border);
  border-radius: 10px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.15s;
  text-decoration: none;
  min-width: 0;
}
.nav-btn:hover:not(:disabled) { border-color: var(--accent); }
.nav-btn:disabled { opacity: 0.3; cursor: default; }
.nav-prev { justify-content: flex-start; }
.nav-next { justify-content: flex-end; }
.nav-arrow { font-size: 22px; color: var(--accent); line-height: 1; flex-shrink: 0; }
.nav-label { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
.nav-prev .nav-label { text-align: left; }
.nav-next .nav-label { text-align: right; }
.nav-hint { font-size: 10px; color: var(--text3); letter-spacing: 0.05em; text-transform: uppercase; }
.nav-title { font-size: 13px; color: var(--text2); font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ── MOBILE ── */
@media (max-width: 768px) {
  .topbar-menu-btn { display: flex; }
  .topbar-search-wrap { max-width: 100%; flex: 1; }
  .search-toggle-btn { display: flex; align-items: center; justify-content: center; }
  .search-box { display: none; }
  .topbar-search-wrap.open .search-toggle-btn { display: none; }
  .topbar-search-wrap.open .search-box { display: block; }
  .brand-text { display: none; }
  .sidebar {
    position: fixed;
    left: 0; top: 52px; bottom: 0;
    width: 82vw; max-width: 300px;
    transform: translateX(-100%);
    z-index: 100;
    box-shadow: 4px 0 24px rgba(0,0,0,0.4);
  }
  .sidebar-open { transform: translateX(0) !important; }
  .overlay { display: block; }
  .content-inner { padding: 16px 14px 60px; }
  .art-h2 { font-size: 18px; }
  .art-h3 { font-size: 15px; }
  .art-p { font-size: 14.5px; }
  .katex-display { padding: 10px 12px; font-size: 0.9em; }
  .nav-row { flex-direction: column; }
  .nav-btn { width: 100%; }
}
@media (min-width: 769px) {
  .topbar-menu-btn { display: none; }
  .search-toggle-btn { display: none !important; }
  .search-box { display: block !important; }
  .overlay { display: none !important; }
}
`;
