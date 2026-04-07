
import { useState, useEffect, useRef, useMemo } from "react";

// ─── DATA ───────────────────────────────────────────────────────────────────

const CHAPTERS = [
  {
    id: 1,
    title: "Giới thiệu",
    icon: "🏗️",
    sections: [
      { id: "1.1", title: "Mô tả dự án" },
      { id: "1.2", title: "Dữ liệu thực địa" },
      { id: "1.3", title: "Dữ liệu phòng thí nghiệm" },
    ],
    quiz: [
      { q: "Dự án kênh đào Pimpama được đề xuất vào năm nào?", options: ["2005","2007","2009","2011"], ans: 2 },
      { q: "Mục tiêu chính của khảo sát địa kỹ thuật là gì?", options: ["Xây dựng cầu","Xác định tính chất đất & đánh giá nguy cơ địa kỹ thuật","Khảo sát khí hậu","Quy hoạch đô thị"], ans: 1 },
      { q: "Vấn đề địa kỹ thuật chính ở khu vực dự án là gì?", options: ["Đá cứng","Sét rất mềm phân bố rộng","Cát chảy","Nước ngầm quá nông"], ans: 1 },
    ],
    content: `
## Chương 1: Giới thiệu

### Phương pháp học tập dựa trên dự án

Cuốn sách này được viết cho sinh viên muốn học các nguyên lý cơ bản và ứng dụng thực tế của **Cơ học Đất** theo cách tiếp cận thực hành, khác với các sách giáo khoa truyền thống.

Khác với các sách Cơ học Đất hiện có, cuốn sách này sử dụng **phương pháp học dựa trên dự án (Project-Based Learning)**, trong đó người đọc được giới thiệu về một dự án địa kỹ thuật thực tế — được thực hiện để lựa chọn địa điểm thích hợp nhất cho việc xây dựng kênh đào.

> 💡 **Kinh nghiệm giảng dạy cho thấy:** Hiểu biết về tính chất đất cơ bản và hành vi đất quan trọng hơn nhiều so với việc nhớ cách suy dẫn các phương trình lý thuyết.

### 1.1 Mô tả Dự án

Năm 2009, một kênh đào dân cư được đề xuất tại **Khu phát triển Pimpama Riverside** và cuộc khảo sát địa kỹ thuật được thực hiện để đánh giá điều kiện địa kỹ thuật của khu vực.

Kết quả của cuộc điều tra này bao gồm:
- **Bản đồ khu vực dự án** (Hình 1.1) với các đường đồng mức cao độ bề mặt
- **Nhật ký hố khoan** (BH1 – BH10): thông tin về loại đất, độ ẩm, độ cứng
- **Báo cáo phòng thí nghiệm** (Bảng 1.1–1.3)

Mục tiêu chính là xác định tính chất đất và ước tính nguy cơ thiên tai cũng như các vấn đề địa kỹ thuật có thể xảy ra trong quá trình thi công.

Các công trình kỹ thuật trước đây trong khu vực đã phát hiện ra vấn đề liên quan đến **sét rất mềm phân bố rộng**, không phải là nền móng phù hợp cho hầu hết các công trình kỹ thuật. Để giải quyết vấn đề này, người ta đề xuất cố kết vật liệu mềm này bằng **phương pháp gia tải trước (pre-load)**.

### 1.2 Dữ liệu Thực địa

Dữ liệu thực địa bao gồm:

**Bản đồ công trường** cho thấy các đường đồng mức cao độ bề mặt và vị trí các hố khoan. Khu vực công trường có cao độ từ -0.97 m đến -2.4 m.

**Thí nghiệm xuyên động (Dynamic Cone Penetration Test - DCPT)** thực hiện gần BH9 cho thấy:
- Ở độ sâu 10–100 cm: số nhát búa $N_d$ từ 1–6 (đất rất mềm)
- Ở độ sâu 400–690 cm: số nhát búa tăng lên 7–21 (đất cứng hơn)

| Độ sâu (cm) | $N_d$ | Nhận xét |
|---|---|---|
| 0 – 230 | 1 – 6 | Đất rất mềm |
| 230 – 460 | 4 – 9 | Đất trung bình |
| 460 – 690 | 6 – 21 | Đất cứng hơn |

### 1.3 Dữ liệu Phòng thí nghiệm

Dữ liệu phòng thí nghiệm bao gồm kết quả thí nghiệm phân phối cỡ hạt và giới hạn Atterberg, cũng như thông tin về mật độ và độ ẩm tại chỗ.

Ba loại đất khác nhau được thí nghiệm:
1. **Sét pha bùn phù sa (alluvial silty clay)**
2. **Đất tàn tích (residual soil)**
3. **Cát từ hố thử (Pit 1)**
    `
  },
  {
    id: 2,
    title: "Sự hình thành và thăm dò đất",
    icon: "🌍",
    sections: [
      { id: "2.1", title: "Phong hóa đá và sự hình thành đất" },
      { id: "2.2", title: "Đất tàn tích và đất vận chuyển" },
      { id: "2.3", title: "Khoáng vật học đất" },
      { id: "2.4", title: "Thăm dò đất" },
      { id: "2.5", title: "Phân tích dự án: dữ liệu thực địa và phòng TN" },
    ],
    quiz: [
      { q: "Quá trình nào tạo ra đất từ đá gốc?", options: ["Bốc hơi","Phong hóa","Kết tủa","Kết tinh"], ans: 1 },
      { q: "Đất tàn tích được hình thành như thế nào?", options: ["Do gió vận chuyển","Tại chỗ do phong hóa đá gốc","Do nước vận chuyển","Do băng hà"], ans: 1 },
      { q: "Thí nghiệm xuyên động (DCPT) đo thông số nào?", options: ["Góc ma sát","Số nhát búa cần để xuyên 10 cm","Hệ số thấm","Giới hạn chảy"], ans: 1 },
    ],
    content: `
## Chương 2: Sự hình thành và thăm dò đất

### 2.1 Phong hóa đá và sự hình thành đất

Đất được hình thành từ quá trình phong hóa đá gốc. Có hai loại phong hóa chính:

**Phong hóa vật lý (Physical Weathering):**
- Phá vỡ đá thành các mảnh nhỏ hơn do nhiệt độ, áp lực, đóng băng-tan chảy
- Không thay đổi thành phần hóa học của khoáng vật
- Tạo ra các hạt sỏi, cát, bột thô

**Phong hóa hóa học (Chemical Weathering):**
- Thay đổi thành phần hóa học của khoáng vật
- Tạo ra các khoáng vật sét mới
- Quan trọng hơn ở vùng nhiệt đới ẩm

### 2.2 Đất tàn tích và đất vận chuyển

**Đất tàn tích (Residual Soil):**
- Hình thành tại chỗ từ đá gốc bên dưới
- Thường có tính chất thay đổi theo độ sâu
- Phổ biến ở vùng nhiệt đới như Đông Nam Á và Australia

**Đất vận chuyển (Transported Soil):**
| Loại | Tác nhân vận chuyển | Ví dụ |
|------|---------------------|-------|
| Đất phù sa | Nước | Đồng bằng sông Cửu Long |
| Đất eolian | Gió | Sa mạc, cồn cát |
| Đất băng hà | Băng | Vùng ôn đới |
| Đất sườn tích | Trọng lực | Chân núi |

#### 2.2.2 Phân tích dự án: Nguồn gốc đất

Tại khu vực dự án Pimpama, đất được xác định là **đất phù sa** (alluvial deposits) — được vận chuyển và lắng đọng bởi dòng nước. Điều này giải thích tại sao khu vực có lớp sét mềm dày.

### 2.3 Khoáng vật học đất

Các khoáng vật sét chính:

- **Kaolinite**: ít trương nở, ổn định, phổ biến ở vùng nhiệt đới
- **Illite**: tính chất trung gian
- **Montmorillonite (Smectite)**: trương nở mạnh, giữ nước nhiều, gây nguy hiểm cho công trình

### 2.4 Thăm dò đất

#### 2.4.1 Nghiên cứu sơ bộ (Desk Study)
Thu thập bản đồ địa chất, dữ liệu công trình lân cận trước khi khảo sát thực địa.

#### 2.4.2 Hố khoan (Boreholes)
- **Khoan guger (Auger Drilling - AD)**: phù hợp đất mềm
- **Khoan washbore (W)**: bơm nước để lấy mẫu đất
- **Mẫu không phá hoại U50**: đường kính 50 mm, dùng phân tích tính chất đất nguyên trạng

#### 2.4.3 Thí nghiệm phòng thí nghiệm
Sau khi khoan lấy mẫu, các thí nghiệm thực hiện bao gồm:
- Phân tích thành phần hạt
- Giới hạn Atterberg
- Mật độ và độ ẩm tự nhiên

### 2.5 Phân tích dự án: Dữ liệu thực địa và phòng thí nghiệm

Nhật ký hố khoan BH1, BH6, BH9 cho thấy profil địa chất điển hình:
1. **Lớp trên (0–3 m)**: Sét pha bùn rất mềm (VS), màu xám, bão hòa nước
2. **Lớp giữa (3–6 m)**: Sét cứng hơn (F-St), màu nâu
3. **Lớp dưới (>6 m)**: Đất sét cứng đến rất cứng
    `
  },
  {
    id: 3,
    title: "Thành phần đất",
    icon: "⚗️",
    sections: [
      { id: "3.1", title: "Ba pha trong đất" },
      { id: "3.2", title: "Tỷ số thể tích" },
      { id: "3.3", title: "Tỷ số khối lượng" },
      { id: "3.4", title: "Thêm về thành phần đất" },
      { id: "3.5", title: "Phân tích dự án: Thành phần đất" },
    ],
    quiz: [
      { q: "Đất gồm bao nhiêu pha?", options: ["1","2","3","4"], ans: 2 },
      { q: "Công thức tính tỷ lệ rỗng (void ratio) e là gì?", options: ["e = Vs/Vv","e = Vv/Vs","e = Vv/V","e = V/Vs"], ans: 1 },
      { q: "Khi độ bão hòa S = 100%, đất ở trạng thái nào?", options: ["Khô hoàn toàn","Bão hòa hoàn toàn","Bán bão hòa","Trạng thái tự nhiên"], ans: 1 },
      { q: "Trọng lượng riêng hạt (Gs) của phần lớn các loại đất nằm trong khoảng nào?", options: ["1.5 – 2.0","2.6 – 2.8","3.0 – 3.5","1.0 – 1.5"], ans: 1 },
    ],
    content: `
## Chương 3: Thành phần đất

### 3.1 Ba pha trong đất

Đất là vật liệu đa pha gồm **ba thành phần**:

\`\`\`
┌─────────────────────────────┐
│  Đất tự nhiên               │
│  ┌────────┐ ┌─────────────┐ │
│  │ Hạt   │ │  Lỗ rỗng    │ │
│  │ Rắn   │ │  (Nước +    │ │
│  │  Vs   │ │   Khí)      │ │
│  └────────┘ └─────────────┘ │
└─────────────────────────────┘
\`\`\`

| Pha | Ký hiệu | Thể tích | Khối lượng |
|-----|---------|---------|------------|
| Hạt rắn | s | $V_s$ | $M_s$ |
| Nước | w | $V_w$ | $M_w$ |
| Khí | a | $V_a$ | ≈ 0 |
| **Tổng** | | $V = V_s + V_v$ | $M = M_s + M_w$ |

Trong đó: $V_v = V_w + V_a$ (thể tích lỗ rỗng)

### 3.2 Tỷ số thể tích

#### 3.2.1 Tỷ lệ rỗng (Void Ratio) — $e$

$$e = \\frac{V_v}{V_s}$$

- $e$ thường từ **0.3 – 1.5** với đất tự nhiên
- Sét mềm có thể $e > 1.0$
- Cát chặt có $e \\approx 0.4$

#### 3.2.2 Mật độ tương đối (Relative Density) — $D_r$

$$D_r = \\frac{e_{max} - e}{e_{max} - e_{min}} \\times 100\\%$$

| $D_r$ (%) | Trạng thái cát |
|-----------|---------------|
| 0 – 15 | Rất rời |
| 15 – 35 | Rời |
| 35 – 65 | Trung bình |
| 65 – 85 | Chặt |
| 85 – 100 | Rất chặt |

#### 3.2.3 Độ rỗng (Porosity) — $n$

$$n = \\frac{V_v}{V} \\times 100\\%$$

Mối quan hệ giữa $e$ và $n$:

$$n = \\frac{e}{1+e} \\qquad e = \\frac{n}{1-n}$$

#### 3.2.4 Độ bão hòa (Degree of Saturation) — $S$

$$S = \\frac{V_w}{V_v} \\times 100\\%$$

- $S = 0\\%$: Đất khô hoàn toàn
- $S = 100\\%$: Đất bão hòa hoàn toàn

### 3.3 Tỷ số khối lượng

#### 3.3.1 Mật độ (Density)

$$\\rho = \\frac{M}{V} \\quad (\\text{g/cm}^3 \\text{ hoặc } \\text{Mg/m}^3)$$

#### 3.3.2 Trọng lượng đơn vị (Unit Weight)

$$\\gamma = \\rho \\cdot g \\quad (\\text{kN/m}^3)$$

| Loại đất | $\\gamma$ (kN/m³) |
|----------|---------|
| Cát khô | 14 – 17 |
| Cát bão hòa | 18 – 21 |
| Sét mềm | 15 – 18 |
| Sét cứng | 18 – 21 |

#### 3.3.3 Độ ẩm (Water Content) — $w$

$$w = \\frac{M_w}{M_s} \\times 100\\%$$

#### 3.3.4 Trọng lượng riêng hạt (Specific Gravity) — $G_s$

$$G_s = \\frac{\\rho_s}{\\rho_w} = \\frac{M_s}{V_s \\cdot \\rho_w}$$

Với phần lớn các loại đất: $G_s \\approx \\mathbf{2.65 – 2.72}$

### 3.4 Thêm về thành phần đất — Các mối quan hệ hữu ích

$$\\gamma_d = \\frac{\\gamma}{1+w} \\qquad S \\cdot e = G_s \\cdot w$$

$$\\gamma_{sat} = \\frac{(G_s + e) \\cdot \\gamma_w}{1+e} \\qquad \\gamma' = \\gamma_{sat} - \\gamma_w$$

> 💡 **Lưu ý:** $\\gamma_w = 9.81 \\text{ kN/m}^3 \\approx 10 \\text{ kN/m}^3$

### 3.5 Phân tích dự án: Thành phần đất

Từ dữ liệu phòng thí nghiệm của dự án Pimpama, sét pha bùn phù sa có:
- Độ ẩm tự nhiên: $w \\approx 60 – 80\\%$ (rất cao!)
- Mật độ tự nhiên: $\\rho \\approx 1.4 – 1.6$ g/cm³
- Trạng thái: Bão hòa hoàn toàn ($S \\approx 100\\%$)

Độ ẩm cao cho thấy đây là **sét rất mềm** với tỷ lệ rỗng lớn.
    `
  },
  {
    id: 4,
    title: "Phân loại đất",
    icon: "🗂️",
    sections: [
      { id: "4.1", title: "Kích thước các phần hạt đất" },
      { id: "4.2", title: "Thí nghiệm rây và phân tích" },
      { id: "4.3", title: "Thành phần hạt đất" },
      { id: "4.4", title: "Phần sét và giới hạn Atterberg" },
      { id: "4.5", title: "Phân loại đất (USCS)" },
    ],
    quiz: [
      { q: "Kích thước hạt sét theo tiêu chuẩn USCS là bao nhiêu?", options: ["< 0.075 mm","< 0.002 mm","< 0.425 mm","< 0.06 mm"], ans: 1 },
      { q: "Giới hạn chảy (LL) là gì?", options: ["Ranh giới giữa trạng thái dẻo và rắn","Ranh giới giữa trạng thái lỏng và dẻo","Ranh giới giữa trạng thái rắn và lỏng","Độ ẩm tối ưu"], ans: 1 },
      { q: "Chỉ số dẻo được tính theo công thức nào?", options: ["PI = LL + PL","PI = LL - PL","PI = PL - LL","PI = LL × PL"], ans: 1 },
      { q: "Đất có Cu > 6 và Cc = 1-3 được phân loại là?", options: ["Cát phân loại kém","Cát phân loại tốt","Sét","Bột"], ans: 1 },
    ],
    content: `
## Chương 4: Phân loại đất

### 4.1 Kích thước các phần hạt đất

Đất được phân loại theo kích thước hạt:

| Loại đất | Kích thước hạt |
|----------|---------------|
| Đá cuội (Gravel) | > 4.75 mm |
| Cát thô | 2.0 – 4.75 mm |
| Cát vừa | 0.425 – 2.0 mm |
| Cát mịn | 0.075 – 0.425 mm |
| Bột (Silt) | 0.002 – 0.075 mm |
| **Sét (Clay)** | **< 0.002 mm** |

### 4.2 Thí nghiệm rây (Sieve Test)

Thí nghiệm rây xác định sự phân bố cỡ hạt của đất thô (cát, sỏi):

**Quy trình:**
1. Sấy khô mẫu đất
2. Đặt các rây theo thứ tự lỗ giảm dần
3. Rây bằng máy rung 10–15 phút
4. Cân khối lượng đất còn lại trên mỗi rây
5. Tính % lọt qua từng rây

**Đường cong cấp phối hạt (Gradation Curve):**
- Trục X: cỡ hạt (mm) — thang logarit
- Trục Y: % khối lượng lọt qua (%)

### 4.3 Thành phần hạt đất

Từ đường cong cấp phối, xác định các thông số:

**Hệ số đồng đều (Coefficient of Uniformity):**
$$C_u = \\frac{D_{60}}{D_{10}}$$

**Hệ số độ cong (Coefficient of Curvature):**
$$C_c = \\frac{D_{30}^2}{D_{60} \\times D_{10}}$$

Trong đó $D_{10}, D_{30}, D_{60}$ là đường kính hạt ứng với 10%, 30%, 60% lọt qua.

| Điều kiện | Phân loại |
|-----------|-----------|
| $C_u > 6$ và $1 \\leq C_c \\leq 3$ | Cát phân loại tốt (SW) |
| Không đạt một trong hai | Cát phân loại kém (SP) |

### 4.4 Phần sét và giới hạn Atterberg

Đất dính (sét, bột) có tính dẻo phụ thuộc độ ẩm:

$$\\text{Rắn} \\xrightarrow{PL} \\text{Dẻo} \\xrightarrow{LL} \\text{Lỏng}$$

**Giới hạn chảy (Liquid Limit - LL):** Độ ẩm tại ranh giới giữa trạng thái lỏng và dẻo

**Giới hạn dẻo (Plastic Limit - PL):** Độ ẩm tại ranh giới giữa trạng thái dẻo và nửa cứng

**Chỉ số dẻo (Plasticity Index - PI):**
$$PI = LL - PL$$

| PI | Tính dẻo |
|----|---------|
| < 7 | Thấp |
| 7 – 17 | Vừa |
| > 17 | Cao |

#### Chỉ số lỏng (Liquidity Index - LI)

$$LI = \\frac{w - PL}{LL - PL} = \\frac{w - PL}{PI}$$

| LI | Trạng thái |
|----|-----------|
| < 0 | Rắn (quá cố kết) |
| 0 – 1 | Dẻo |
| > 1 | Lỏng (nguy hiểm!) |

### 4.5 Phân loại đất (USCS)

Hệ thống phân loại đất thống nhất (Unified Soil Classification System):

**Đất thô** (> 50% giữ lại trên rây 0.075 mm):
- **GW, GP**: Sỏi phân loại tốt/kém
- **SW, SP**: Cát phân loại tốt/kém
- **GM, SM**: Sỏi/Cát pha bột
- **GC, SC**: Sỏi/Cát pha sét

**Đất mịn** (> 50% lọt qua rây 0.075 mm):
- **ML**: Bột plasticity thấp
- **MH**: Bột plasticity cao
- **CL**: Sét plasticity thấp (A-line, PI > 7)
- **CH**: Sét plasticity cao (A-line, PI > 7)
- **OL/OH**: Đất hữu cơ

**Biểu đồ dẻo (Plasticity Chart):**
- Đường A: $PI = 0.73(LL - 20)$
- Phía trên đường A: Sét (C)
- Phía dưới đường A: Bột (M) và đất hữu cơ

> 💡 **Ứng dụng thực tế:** Từ dữ liệu dự án, sét pha bùn phù sa tại Pimpama được phân loại là **CH** (sét plasticity cao), với $LL \\approx 65\\%$, $PI \\approx 35\\%$.
    `
  },
  {
    id: 5,
    title: "Đầm chặt đất",
    icon: "🔨",
    sections: [
      { id: "5.1", title: "Quá trình đầm chặt" },
      { id: "5.2", title: "Thí nghiệm đầm chặt" },
      { id: "5.3", title: "Đầm chặt ngoài hiện trường" },
      { id: "5.4", title: "Phân tích dự án: Đầm chặt đất" },
    ],
    quiz: [
      { q: "Mục đích của đầm chặt đất là gì?", options: ["Tăng độ ẩm","Tăng mật độ khô, giảm lỗ rỗng","Giảm cường độ","Tăng hệ số thấm"], ans: 1 },
      { q: "Thí nghiệm đầm chặt Proctor tiêu chuẩn sử dụng búa nặng bao nhiêu?", options: ["1.0 kg","2.5 kg","4.5 kg","10 kg"], ans: 1 },
      { q: "Đường ZAV (Zero Air Void) biểu thị điều gì?", options: ["Đất khô hoàn toàn","Đất bão hòa hoàn toàn (S=100%)","Giới hạn chảy","Mật độ tối đa"], ans: 1 },
    ],
    content: `
## Chương 5: Đầm chặt đất

### 5.1 Quá trình đầm chặt

**Đầm chặt (Compaction)** là quá trình làm tăng mật độ đất bằng cơ học — giảm thể tích lỗ rỗng chứa **khí** (không phải nước).

> ⚠️ Phân biệt đầm chặt và cố kết: Đầm chặt loại bỏ khí; Cố kết loại bỏ nước.

**Mục đích đầm chặt:**
- Tăng khả năng chịu tải
- Giảm độ lún
- Giảm hệ số thấm
- Tăng độ ổn định mái dốc

### 5.2 Thí nghiệm đầm chặt (Proctor Test)

**Thí nghiệm Proctor Tiêu chuẩn (Standard Proctor):**
- Khuôn: thể tích 944 cm³
- Búa: 2.5 kg, chiều cao rơi 305 mm
- Số lớp: 3, số chày/lớp: 25

**Quy trình:** Thay đổi độ ẩm đất → Đầm chặt → Xác định $\\rho_d$ → Vẽ đường cong đầm chặt

**Kết quả:**

$$\\rho_d = \\frac{\\rho}{1+w}$$

Đường cong đầm chặt có dạng hình chuông, cho phép xác định:
- **Mật độ khô tối đa** $\\rho_{d,max}$
- **Độ ẩm tối ưu** $w_{opt}$

**Đường không khí rỗng (Zero Air Void - ZAV):**
$$\\rho_{d,ZAV} = \\frac{G_s \\cdot \\rho_w}{1 + G_s \\cdot w}$$

Đường ZAV là giới hạn lý thuyết tối đa ($S = 100\\%$).

### 5.3 Đầm chặt ngoài hiện trường

**Thiết bị đầm:**
| Loại | Thích hợp |
|------|-----------|
| Lu bánh lốp | Cát, sỏi |
| Lu chân cừu | Đất dính |
| Lu rung | Cát, sỏi |
| Đầm cóc | Khu vực chật hẹp |

**Kiểm tra chất lượng:**
- **Phương pháp bình cát (Sand Cone):** đo mật độ tại chỗ
- **Yêu cầu:** $\\rho_d \\geq 95\\%$ × $\\rho_{d,max}$ (Proctor)

### 5.4 Phân tích dự án: Đầm chặt đất

Đối với dự án Pimpama, khi sử dụng vật liệu đắp đất, cần đầm chặt để đảm bảo:

$$RC = \\frac{\\rho_{d,field}}{\\rho_{d,max}} \\times 100\\% \\geq 95\\%$$

Đất sét phù sa có $w_{opt} \\approx 20 – 25\\%$ và $\\rho_{d,max} \\approx 1.65$ g/cm³.
    `
  },
  {
    id: 6,
    title: "Ứng suất trong đất",
    icon: "⚖️",
    sections: [
      { id: "6.1", title: "Ứng suất trong khối đất" },
      { id: "6.2", title: "Ứng suất hữu hiệu và áp lực nước lỗ rỗng" },
      { id: "6.3", title: "Áp lực nước lỗ rỗng dư" },
      { id: "6.4", title: "Phân tích dự án: Ứng suất và thấm hướng lên" },
    ],
    quiz: [
      { q: "Nguyên lý ứng suất hữu hiệu của Terzaghi: σ' = ?", options: ["σ + u","σ - u","u - σ","σ × u"], ans: 1 },
      { q: "Gradient thủy lực tới hạn (i_cr) gây ra điều kiện đất chảy là?", options: ["i_cr = γ'/γ_w","i_cr = γ_w/γ'","i_cr = γ/γ_w","i_cr = 1.0"], ans: 0 },
      { q: "Hiện tượng 'đất chảy' (Quick condition) xảy ra khi?", options: ["i < i_cr","i = 0","i > i_cr","Luôn luôn xảy ra"], ans: 2 },
    ],
    content: `
## Chương 6: Ứng suất trong đất

### 6.1 Ứng suất trong khối đất

**Ứng suất tổng đứng (Total Vertical Stress):**

$$\\sigma_v = \\sum \\gamma_i \\cdot h_i$$

Ví dụ: Mực nước ngầm ở độ sâu $H_w$:

$$\\sigma_v = \\gamma_d \\cdot H_w + \\gamma_{sat} \\cdot (z - H_w)$$

### 6.2 Ứng suất hữu hiệu và áp lực nước lỗ rỗng

**Nguyên lý Terzaghi (1943):**

$$\\boxed{\\sigma' = \\sigma - u}$$

Trong đó:
- $\\sigma'$ = ứng suất hữu hiệu (kN/m²) — gây biến dạng đất
- $\\sigma$ = ứng suất tổng (kN/m²)
- $u$ = áp lực nước lỗ rỗng (kN/m²)

**Áp lực nước lỗ rỗng:**

$$u = \\gamma_w \\cdot h_w$$

**Ứng suất nằm ngang hữu hiệu:**

$$\\sigma'_h = K_0 \\cdot \\sigma'_v$$

Với đất bình thường cố kết: $K_0 = 1 - \\sin\\phi'$

### 6.3 Áp lực nước lỗ rỗng dư — Thấm hướng lên

#### 6.3.1 Dòng thấm và Gradient thủy lực

$$i = \\frac{\\Delta h}{L}$$

#### 6.3.2 Thấm hướng lên (Upward Seepage)

Khi nước thấm hướng lên, áp lực nước lỗ rỗng tăng → ứng suất hữu hiệu giảm:

$$u = \\gamma_w \\cdot (h_w + \\Delta h)$$

$$\\sigma' = \\sigma - u = \\gamma' \\cdot z - \\gamma_w \\cdot i \\cdot z = (\\gamma' - i \\cdot \\gamma_w) \\cdot z$$

#### 6.3.3 Điều kiện đất chảy (Quick Condition)

Khi $\\sigma' = 0$:

$$i_{cr} = \\frac{\\gamma'}{\\gamma_w} = \\frac{G_s - 1}{1+e}$$

Với đất thông thường: $i_{cr} \\approx 0.9 – 1.1$

> ⚠️ **Nguy hiểm!** Khi $i > i_{cr}$, đất mất hoàn toàn cường độ — hiện tượng "cát chảy" hay "đất chảy" (quicksand).

### 6.4 Phân tích dự án: Ứng suất và Thấm hướng lên

Tại khu vực dự án Pimpama với mực nước ngầm cao:

- Lớp sét bão hòa: $\\gamma_{sat} \\approx 16$ kN/m³, $\\gamma' \\approx 6$ kN/m³
- Gradient thủy lực tới hạn: $i_{cr} = 6/9.81 \\approx 0.61$

Cần kiểm tra điều kiện thấm hướng lên xung quanh kênh đào khi mực nước trong kênh thấp hơn mực nước ngầm.
    `
  },
  {
    id: 7,
    title: "Nguyên lý dòng thấm trong đất",
    icon: "💧",
    sections: [
      { id: "7.1", title: "Tính thấm của đất" },
      { id: "7.2", title: "Vận tốc và lưu lượng thấm" },
      { id: "7.3", title: "Thí nghiệm xác định hệ số thấm" },
      { id: "7.4", title: "Thấm trong đất phân lớp" },
      { id: "7.5", title: "Lưới thấm (Flow Net)" },
    ],
    quiz: [
      { q: "Định luật Darcy: v = ?", options: ["v = k/i","v = k × i","v = i/k","v = k + i"], ans: 1 },
      { q: "Đơn vị của hệ số thấm k là gì?", options: ["m²","kN/m²","m/s","kN/s"], ans: 2 },
      { q: "Thí nghiệm cột nước không đổi (Constant Head) dùng cho loại đất nào?", options: ["Đất sét","Đất cát, thấm nhanh","Đất hữu cơ","Đất bùn"], ans: 1 },
    ],
    content: `
## Chương 7: Nguyên lý dòng thấm trong đất

### 7.1 Tính thấm của đất

**Hệ số thấm $k$** (Coefficient of Permeability / Hydraulic Conductivity):

| Loại đất | $k$ (m/s) |
|----------|----------|
| Sỏi sạch | $10^{-1} – 1$ |
| Cát thô sạch | $10^{-4} – 10^{-2}$ |
| Cát mịn | $10^{-6} – 10^{-4}$ |
| Bột | $10^{-9} – 10^{-5}$ |
| Sét | $10^{-11} – 10^{-8}$ |

### 7.2 Định luật Darcy

$$v = k \\cdot i \\qquad q = v \\cdot A = k \\cdot i \\cdot A$$

Trong đó:
- $v$ = vận tốc thấm (m/s)
- $k$ = hệ số thấm (m/s)
- $i$ = gradient thủy lực
- $q$ = lưu lượng thấm (m³/s)

Định luật Darcy chỉ áp dụng cho chảy **tầng (laminar flow)**, tức $Re < 10$.

### 7.3 Thí nghiệm xác định hệ số thấm

#### 7.3.1 Thí nghiệm cột nước không đổi (Constant Head Test)

Dùng cho **đất thô** (cát, sỏi):

$$k = \\frac{q \\cdot L}{A \\cdot \\Delta h}$$

#### 7.3.2 Thí nghiệm cột nước thay đổi (Falling Head Test)

Dùng cho **đất mịn** (sét, bột):

$$k = \\frac{a \\cdot L}{A \\cdot (t_2 - t_1)} \\cdot \\ln\\frac{h_1}{h_2}$$

### 7.4 Thấm ngang và thấm đứng trong đất phân lớp

**Thấm ngang** (song song với lớp):
$$k_H = \\frac{\\sum k_i \\cdot h_i}{\\sum h_i}$$

**Thấm đứng** (vuông góc với lớp):
$$k_V = \\frac{\\sum h_i}{\\sum h_i/k_i}$$

Luôn luôn: $k_H \\geq k_V$

### 7.5 Lưới thấm (Flow Net)

Lưới thấm là tập hợp:
- **Đường dòng** (Flow lines): đường di chuyển của nước
- **Đường đẳng thế** (Equipotential lines): áp lực thủy lực bằng nhau

**Lưu lượng thấm:**
$$q = k \\cdot H \\cdot \\frac{N_f}{N_d}$$

Trong đó:
- $N_f$ = số ô dòng (flow channels)
- $N_d$ = số ô đẳng thế (equipotential drops)
- $H$ = chênh lệch cột nước tổng

**Áp lực nước lỗ rỗng tại một điểm:**
$$u = (h_p) \\cdot \\gamma_w$$
    `
  },
  {
    id: 8,
    title: "Vòng tròn Mohr và ứng suất",
    icon: "⭕",
    sections: [
      { id: "8.1", title: "Cơ sở lý thuyết" },
      { id: "8.2", title: "Vòng tròn Mohr" },
      { id: "8.3", title: "Xác định ứng suất trên mặt phẳng" },
      { id: "8.4", title: "Phương pháp cực (Pole Method)" },
    ],
    quiz: [
      { q: "Vòng tròn Mohr được dùng để làm gì?", options: ["Phân tích dòng thấm","Xác định ứng suất trên các mặt phẳng khác nhau","Tính độ lún","Xác định hệ số thấm"], ans: 1 },
      { q: "Trên vòng tròn Mohr, ứng suất cắt lớn nhất bằng bao nhiêu?", options: ["(σ₁+σ₃)/2","(σ₁-σ₃)/2","σ₁×σ₃","σ₁/σ₃"], ans: 1 },
    ],
    content: `
## Chương 8: Vòng tròn Mohr và Ứng suất

### 8.1 Cơ sở lý thuyết

Tại một điểm trong khối đất, ứng suất trên mặt phẳng nghiêng góc $\\theta$ với mặt phẳng ngang:

$$\\sigma_\\theta = \\frac{\\sigma_1 + \\sigma_3}{2} + \\frac{\\sigma_1 - \\sigma_3}{2} \\cos 2\\theta$$

$$\\tau_\\theta = \\frac{\\sigma_1 - \\sigma_3}{2} \\sin 2\\theta$$

Trong đó $\\sigma_1$ và $\\sigma_3$ là ứng suất chính lớn và nhỏ.

### 8.2 Vòng tròn Mohr

Vòng tròn Mohr biểu diễn trạng thái ứng suất:

- **Tâm:** $O = \\left(\\frac{\\sigma_1 + \\sigma_3}{2}, 0\\right)$
- **Bán kính:** $R = \\frac{\\sigma_1 - \\sigma_3}{2}$

$$R = \\tau_{max} = \\frac{\\sigma_1 - \\sigma_3}{2}$$

### 8.3 Xác định ứng suất trên mặt phẳng

Để tìm ứng suất trên mặt phẳng nghiêng góc $\\theta$:
1. Vẽ vòng tròn Mohr với hai điểm $A(\\sigma_3, 0)$ và $B(\\sigma_1, 0)$
2. Xoay góc $2\\theta$ từ tâm O trên vòng tròn
3. Tọa độ điểm kết quả = $(\\ sigma_\\theta, \\tau_\\theta)$

### 8.4 Phương pháp Cực (Pole Method)

**Phương pháp cực** cho phép tìm ứng suất trên bất kỳ mặt phẳng nào một cách đồ họa:

1. Vẽ vòng tròn Mohr
2. Xác định điểm cực $P$ (Pole): vẽ đường ngang từ điểm $(\\ sigma_3, 0)$ → giao điểm với vòng tròn
3. Từ điểm cực $P$, vẽ đường song song với mặt phẳng cần xét
4. Giao điểm với vòng tròn → ứng suất cần tìm

> 💡 **Ứng dụng thực tế:** Phân tích ổn định mái dốc, tính toán áp lực đất lên tường chắn.
    `
  },
  {
    id: 9,
    title: "Biến dạng đất",
    icon: "📐",
    sections: [
      { id: "9.1", title: "Biến dạng đất trong thực tế" },
      { id: "9.2", title: "Thí nghiệm phòng thí nghiệm" },
      { id: "9.3", title: "Đặc tính ứng suất – biến dạng" },
      { id: "9.4", title: "Phân tích dự án: Biến dạng sét mềm" },
    ],
    quiz: [
      { q: "Thí nghiệm nén không hạn chế (UCT) xác định thông số nào?", options: ["Góc ma sát φ","Lực dính không thoát nước cu","Hệ số thấm","Giới hạn chảy"], ans: 1 },
      { q: "Thí nghiệm ba trục thoát nước (CD) cho phép xác định?", options: ["Tham số hữu hiệu c', φ'","Chỉ số dẻo","Hệ số thấm","Mật độ hạt"], ans: 0 },
      { q: "Hệ số áp lực nước lỗ rỗng A của Skempton cho biết điều gì?", options: ["Độ bão hòa của đất","Sự thay đổi áp lực nước khi ứng suất lệch thay đổi","Gradient thủy lực","Hệ số cố kết"], ans: 1 },
    ],
    content: `
## Chương 9: Biến dạng đất

### 9.1 Biến dạng đất trong thực tế

Khi đất chịu tải trọng, xảy ra hai loại biến dạng:

**Biến dạng tức thời (Immediate Settlement):** Xảy ra ngay lập tức khi đặt tải, do biến dạng đàn hồi và biến dạng không thoát nước.

**Biến dạng theo thời gian (Time-dependent Settlement):** Do cố kết (thoát nước từ lỗ rỗng) và từ biến.

### 9.2 Thí nghiệm phòng thí nghiệm

#### 9.2.1 Thí nghiệm nén không hạn chế (UCT)

$$q_u = \\frac{P}{A} \\qquad c_u = \\frac{q_u}{2}$$

Trong đó $c_u$ là lực dính không thoát nước (kN/m²).

#### 9.2.2 Thí nghiệm Ba trục (Triaxial Compression Test)

Ba điều kiện thí nghiệm:
| Ký hiệu | Tên | Điều kiện |
|---------|-----|-----------|
| UU | Không cố kết – Không thoát nước | Nhanh, đo ứng suất tổng |
| CU | Cố kết – Không thoát nước | Đo ứng suất hữu hiệu + áp lực nước |
| CD | Cố kết – Thoát nước | Chậm, đo tham số hữu hiệu |

#### 9.2.3 So sánh Thoát nước và Không thoát nước

- **Đất sét bão hòa, tải ngắn hạn** → Phân tích không thoát nước (UU/CU)
- **Dài hạn, đất cát** → Phân tích thoát nước (CD, hữu hiệu)

### 9.3 Đặc tính Ứng suất – Biến dạng

**Biến dạng dọc trục:**
$$\\varepsilon_1 = \\frac{\\Delta L}{L_0}$$

**Ứng suất lệch (Deviator Stress):**
$$q = \\sigma_1 - \\sigma_3 = \\frac{P}{A}$$

**Hệ số áp lực nước lỗ rỗng Skempton:**

$$\\Delta u = B[\\Delta\\sigma_3 + A(\\Delta\\sigma_1 - \\Delta\\sigma_3)]$$

- Đất bão hòa hoàn toàn: $B = 1$
- Sét bình thường cố kết: $A \\approx 0.5 – 1.0$ (tại phá hoại)
- Sét quá cố kết: $A < 0$ (giảm áp lực khi cắt)

### 9.4 Phân tích dự án: Biến dạng sét mềm

Sét mềm Pimpama dưới tải đắp:
- $c_u \\approx 5 – 15$ kN/m² (rất thấp!)
- Nguy cơ mất ổn định cao khi thi công nhanh
- Cần thi công theo giai đoạn hoặc gia cố trước
    `
  },
  {
    id: 10,
    title: "Cố kết đất mềm",
    icon: "⏱️",
    sections: [
      { id: "10.1", title: "Quá trình cố kết" },
      { id: "10.2", title: "Các loại lún trong cố kết" },
      { id: "10.3", title: "Cố kết 1D và tính lún" },
      { id: "10.4", title: "Lý thuyết cố kết Terzaghi" },
      { id: "10.5", title: "Tỷ số quá cố kết (OCR)" },
    ],
    quiz: [
      { q: "Cố kết là quá trình gì?", options: ["Đầm chặt đất bằng máy móc","Thoát nước chậm từ lỗ rỗng dưới tải trọng, làm đất lún theo thời gian","Đóng băng đất","Tăng cường độ đất tức thời"], ans: 1 },
      { q: "Hệ số thể tích nén (mv) có đơn vị là?", options: ["kN/m²","m²/kN","m/s","kN/m³"], ans: 1 },
      { q: "Tỷ số quá cố kết OCR = σ'c/σ'v0. Đất bình thường cố kết có OCR bằng bao nhiêu?", options: ["OCR < 1","OCR = 1","OCR > 1","OCR = 0"], ans: 1 },
      { q: "Tốc độ cố kết tăng khi?", options: ["Chiều dày lớp đất tăng","Hệ số thấm k tăng","Tải trọng giảm","Nhiệt độ giảm"], ans: 1 },
    ],
    content: `
## Chương 10: Cố kết đất mềm

### 10.1 Quá trình cố kết

**Cố kết (Consolidation)** là quá trình đất mịn (sét, bùn) nén chặt dần dưới tải trọng do nước lỗ rỗng thoát ra theo thời gian.

**Mô hình lò xo – piston (Terzaghi):**
- Lò xo = khung hạt đất
- Piston = bề mặt đất
- Nước trong xilanh = nước lỗ rỗng
- Lỗ nhỏ trên piston = tính thấm của đất

### 10.2 Các loại lún trong cố kết

$$S_{total} = S_i + S_c + S_s$$

| Loại | Ký hiệu | Nguyên nhân |
|------|---------|-------------|
| Lún tức thời | $S_i$ | Biến dạng không thoát nước |
| Lún cố kết sơ cấp | $S_c$ | Thoát nước lỗ rỗng |
| Lún từ biến | $S_s$ | Biến dạng từ biến của khung hạt |

### 10.3 Cố kết 1D và tính lún

**Từ thí nghiệm nén cố kết (Oedometer):**

**Hệ số nén (Compression Index):** $C_c$ — độ dốc đường cố kết trên biểu đồ $e – \\log\\sigma'$

**Hệ số giãn nở (Swelling Index):** $C_s \\approx C_c/5 – C_c/10$

**Tính lún cố kết:**

*Đất bình thường cố kết ($OCR = 1$):*
$$S_c = \\frac{C_c}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$

*Đất quá cố kết ($\\sigma'_0 + \\Delta\\sigma' \\leq \\sigma'_c$):*
$$S_c = \\frac{C_s}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$

### 10.4 Lý thuyết cố kết Terzaghi

**Phương trình cố kết 1D:**

$$c_v \\frac{\\partial^2 u}{\\partial z^2} = \\frac{\\partial u}{\\partial t}$$

**Hệ số cố kết:**

$$c_v = \\frac{k}{m_v \\cdot \\gamma_w}$$

**Nhân tố thời gian (Time Factor):**

$$T_v = \\frac{c_v \\cdot t}{H_{dr}^2}$$

$H_{dr}$ = chiều dài đường thoát nước:
- Thoát nước hai chiều: $H_{dr} = H/2$
- Thoát nước một chiều: $H_{dr} = H$

**Mức độ cố kết (Degree of Consolidation):**

| $T_v$ | $U$ (%) |
|-------|---------|
| 0.008 | 10 |
| 0.031 | 20 |
| 0.197 | 50 |
| 0.405 | 70 |
| 0.848 | 90 |
| 1.163 | 95 |

$$U \\approx \\frac{4 T_v}{\\pi} \\times 100\\% \\quad \\text{(khi } U < 60\\%)$$

### 10.5 Tỷ số quá cố kết (OCR)

$$OCR = \\frac{\\sigma'_c}{\\sigma'_{v0}}$$

| OCR | Trạng thái |
|-----|----------|
| = 1 | Bình thường cố kết (NC) |
| > 1 | Quá cố kết (OC) |
| < 1 | Chưa cố kết xong (rare) |

> 💡 **Dự án Pimpama:** Sét mềm với $C_c \\approx 0.6 – 0.8$, $H = 4$ m, $c_v \\approx 1.5$ m²/yr. Lún cố kết dự kiến **0.8 – 1.5 m**, thời gian đạt 90%U ≈ **5–10 năm** nếu không gia cố!
    `
  },
  {
    id: 11,
    title: "Sức chống cắt và ổn định mái dốc",
    icon: "⛰️",
    sections: [
      { id: "11.1", title: "Sức chống cắt trong thực tế" },
      { id: "11.2", title: "Thí nghiệm hộp cắt và ba trục" },
      { id: "11.3", title: "Đường bao phá hoại Mohr-Coulomb" },
      { id: "11.4", title: "Khái niệm đường ứng suất" },
      { id: "11.5", title: "Phân tích ổn định mái dốc" },
    ],
    quiz: [
      { q: "Tiêu chuẩn phá hoại Mohr-Coulomb: τf = ?", options: ["τf = c' + σ' tan φ'","τf = c' - σ' tan φ'","τf = σ' / tan φ'","τf = c' × σ'"], ans: 0 },
      { q: "Mái dốc vô hạn (infinite slope) trên đất dính, điều kiện ổn định tới hạn?", options: ["β > φ","β = φ","β < φ/2","β = 45°"], ans: 1 },
      { q: "Phương pháp phân mảnh Bishop đơn giản giả định gì?", options: ["Lực giữa các mảnh nằm ngang","Lực giữa các mảnh bằng không","Mặt trượt phẳng","Tải trọng đều"], ans: 0 },
      { q: "Hệ số an toàn FS tối thiểu cho mái dốc thường là bao nhiêu?", options: ["FS ≥ 1.0","FS ≥ 1.5","FS ≥ 3.0","FS ≥ 0.5"], ans: 1 },
    ],
    content: `
## Chương 11: Sức chống cắt và Ổn định mái dốc

### 11.1 Sức chống cắt trong thực tế

Sức chống cắt của đất là khả năng chống lại biến dạng cắt, quyết định:
- Khả năng chịu tải của nền móng
- Ổn định mái dốc
- Áp lực đất lên tường chắn

### 11.2 Tiêu chuẩn phá hoại Mohr-Coulomb

$$\\tau_f = c' + \\sigma'_n \\tan\\phi'$$

| Tham số | Ý nghĩa | Điển hình |
|---------|---------|-----------|
| $c'$ | Lực dính hữu hiệu (kPa) | 0–50 kPa |
| $\\phi'$ | Góc ma sát trong hữu hiệu (°) | 20°–40° |
| $c_u$ | Lực dính không thoát nước | 5–200 kPa |

### 11.3 Thí nghiệm xác định sức chống cắt

**Thí nghiệm hộp cắt (Shear Box):**
$$\\tau_f = \\frac{F}{A} \\qquad \\sigma'_n = \\frac{N}{A}$$

Vẽ 3 điểm $(\\ sigma'_n, \\tau_f)$ → đường thẳng Mohr-Coulomb → $c'$ và $\\phi'$

**Thí nghiệm ba trục:**
- Vẽ vòng tròn Mohr cho ≥ 3 mức áp suất buồng $\\sigma_3$
- Đường bao tiếp tuyến = đường Mohr-Coulomb
- Xác định $c', \\phi'$ (hoặc $c_u, \\phi_u = 0$ cho UU)

### 11.4 Phân tích ổn định mái dốc

#### 11.7.1 Mái dốc vô hạn (Infinite Slope)

**Thoát nước (Drained), không có thấm:**
$$FS = \\frac{\\tan\\phi'}{\\tan\\beta}$$

**Có mực nước ngầm ở bề mặt:**
$$FS = \\frac{\\gamma'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\phi'}{\\tan\\beta}$$

#### 11.7.2 Phương pháp giới hạn cân bằng — Bishop Đơn giản

Mặt trượt tròn, chia thành $n$ mảnh:

$$FS = \\frac{\\sum \\left[\\frac{c' b + (W - ub)\\tan\\phi'}{m_{\\alpha}}\\right]}{\\sum W \\sin\\alpha}$$

$$m_{\\alpha} = \\cos\\alpha + \\frac{\\tan\\phi' \\sin\\alpha}{FS}$$

**Quy trình lặp:**
1. Giả sử $FS = 1.5$
2. Tính $m_{\\alpha}$ cho từng mảnh
3. Tính $FS$ mới
4. Lặp đến hội tụ (thường 3–5 vòng)

### 11.5 Phân tích dự án: Ổn định mái dốc kênh đào

Mái dốc kênh đào Pimpama:
- Độ dốc thiết kế: $\\beta = 18°$
- Sét mềm: $c_u = 10$ kPa, $\\phi_u = 0°$
- $\\gamma_{sat} = 16$ kN/m³

Phân tích ngắn hạn (không thoát nước):
$$FS = \\frac{c_u \\cdot L_{arc}}{\\sum W \\sin\\alpha} \\geq 1.5 \\text{ (yêu cầu)}$$

> ⚠️ **Kết quả:** $FS \\approx 1.1 – 1.3$ — **KHÔNG ĐẠT!** Cần giảm độ dốc hoặc gia cố đất trước khi đào.
    `
  }
];

// ─── MARKDOWN RENDERER (no external lib, manual) ─────────────────────────────
function renderMarkdown(text) {
  if (!text) return "";
  let html = text
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    // headers
    .replace(/^### (.+)$/gm, '<h3 class="md-h3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="md-h2">$1</h2>')
    // bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // inline code
    .replace(/`([^`]+)`/g, '<code class="md-code">$1</code>')
    // code block (triple backtick) — strip
    .replace(/```[\s\S]*?```/g, '')
    // blockquote
    .replace(/^&gt; (.+)$/gm, '<blockquote class="md-blockquote">$1</blockquote>')
    // horizontal rule
    .replace(/^---$/gm, '<hr class="md-hr"/>')
    // tables
    .replace(/(\|.+\|\n)(\|[-| :]+\|\n)((?:\|.+\|\n?)*)/g, (_, head, sep, body) => {
      const parseRow = r => r.trim().split('|').filter((_, i, a) => i > 0 && i < a.length - 1);
      const hCells = parseRow(head).map(c => `<th>${c.trim()}</th>`).join('');
      const bRows = body.trim().split('\n').filter(Boolean).map(r =>
        `<tr>${parseRow(r).map(c => `<td>${c.trim()}</td>`).join('')}</tr>`
      ).join('');
      return `<div class="md-table-wrap"><table class="md-table"><thead><tr>${hCells}</tr></thead><tbody>${bRows}</tbody></table></div>`;
    })
    // unordered list items
    .replace(/^[-*] (.+)$/gm, '<li class="md-li">$1</li>')
    .replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="md-ul">$1</ul>')
    // ordered list
    .replace(/^\d+\. (.+)$/gm, '<oli>$1</oli>')
    .replace(/((?:<oli>.*<\/oli>\n?)+)/g, m =>
      `<ol class="md-ol">${m.replace(/<oli>/g,'<li class="md-li">').replace(/<\/oli>/g,'</li>')}</ol>`
    )
    // LaTeX inline math: $...$ and $$...$$
    .replace(/\$\$(.+?)\$\$/gs, (_, m) => `<span class="math-block">\\[${m}\\]</span>`)
    .replace(/\$(.+?)\$/g, (_, m) => `<span class="math-inline">\\(${m}\\)</span>`)
    // paragraphs
    .replace(/\n\n/g, '</p><p class="md-p">')
    .replace(/^(?!<[hbtuoqlp]|<\/|<div)(.+)$/gm, '$1');
  return `<p class="md-p">${html}</p>`;
}

// ─── QUIZ COMPONENT ───────────────────────────────────────────────────────────
function Quiz({ questions, chapterTitle }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    if (!submitted) return 0;
    return questions.reduce((acc, q, i) => acc + (answers[i] === q.ans ? 1 : 0), 0);
  }, [submitted, answers, questions]);

  const reset = () => { setAnswers({}); setSubmitted(false); };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <span className="quiz-icon">🎯</span>
        <span>Kiểm tra kiến thức — {chapterTitle}</span>
      </div>
      {questions.map((q, i) => (
        <div key={i} className={`quiz-question ${submitted ? (answers[i] === q.ans ? 'correct' : 'wrong') : ''}`}>
          <p className="q-text">{i + 1}. {q.q}</p>
          <div className="q-options">
            {q.options.map((opt, j) => (
              <label key={j} className={`q-option ${answers[i] === j ? 'selected' : ''} ${submitted && j === q.ans ? 'correct-ans' : ''}`}>
                <input
                  type="radio"
                  name={`q${i}`}
                  disabled={submitted}
                  checked={answers[i] === j}
                  onChange={() => setAnswers(prev => ({ ...prev, [i]: j }))}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          {submitted && answers[i] !== q.ans && (
            <p className="q-explain">✅ Đáp án đúng: {q.options[q.ans]}</p>
          )}
        </div>
      ))}
      {!submitted ? (
        <button
          className="quiz-btn submit"
          disabled={Object.keys(answers).length < questions.length}
          onClick={() => setSubmitted(true)}
        >
          Nộp bài
        </button>
      ) : (
        <div className="quiz-result">
          <span className="score">{score}/{questions.length}</span>
          <span className="score-label">{score === questions.length ? '🎉 Xuất sắc!' : score >= questions.length/2 ? '👍 Khá tốt!' : '📖 Ôn lại nhé!'}</span>
          <button className="quiz-btn reset" onClick={reset}>Làm lại</button>
        </div>
      )}
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(false);
  const [activeChapter, setActiveChapter] = useState(1);
  const [activeSection, setActiveSection] = useState(null);
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const contentRef = useRef(null);

  const chapter = useMemo(() => CHAPTERS.find(c => c.id === activeChapter), [activeChapter]);

  const searchResults = useMemo(() => {
    if (!search.trim()) return [];
    const q = search.toLowerCase();
    return CHAPTERS.flatMap(ch =>
      ch.sections
        .filter(s => s.title.toLowerCase().includes(q) || ch.title.toLowerCase().includes(q))
        .map(s => ({ chId: ch.id, chTitle: ch.title, secTitle: s.title, secId: s.id }))
    );
  }, [search]);

  const selectChapter = (id) => {
    setActiveChapter(id);
    setActiveSection(null);
    setShowQuiz(false);
    setSidebarOpen(false);
    if (contentRef.current) contentRef.current.scrollTop = 0;
  };

  const progress = useMemo(() => {
    return Math.round(((activeChapter - 1) / CHAPTERS.length) * 100);
  }, [activeChapter]);

  return (
    <div className={`app-root ${dark ? 'dark' : 'light'}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=Source+Sans+3:wght@300;400;500;600&display=swap');

        :root {
          --bg: #faf8f4;
          --bg2: #f2ede4;
          --surface: #ffffff;
          --sidebar: #1a1a2e;
          --sidebar-text: #e8e4dc;
          --sidebar-muted: #9e9a94;
          --accent: #c17f3e;
          --accent2: #8b5e2c;
          --text: #2a2319;
          --text2: #5c5347;
          --border: #ddd5c8;
          --math-bg: #fdf6ec;
          --quiz-bg: #fff8ef;
          --correct: #2d7a4f;
          --wrong: #c0392b;
          --shadow: 0 2px 12px rgba(60,40,10,0.10);
        }
        .dark {
          --bg: #0f0e0c;
          --bg2: #1a1815;
          --surface: #1e1c18;
          --sidebar: #0f0e0c;
          --sidebar-text: #e8e0d0;
          --sidebar-muted: #6b6560;
          --accent: #d4954e;
          --accent2: #b87d3a;
          --text: #e8e0d0;
          --text2: #a09a90;
          --border: #2e2b25;
          --math-bg: #1e1c18;
          --quiz-bg: #1e1c18;
          --correct: #3aaf6b;
          --wrong: #e05454;
          --shadow: 0 2px 12px rgba(0,0,0,0.4);
        }

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { height: 100%; }

        .app-root {
          font-family: 'Source Sans 3', sans-serif;
          background: var(--bg);
          color: var(--text);
          height: 100dvh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* ── TOP BAR ── */
        .topbar {
          height: 52px;
          background: var(--sidebar);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 10px;
          flex-shrink: 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          z-index: 100;
        }
        .topbar-logo {
          font-family: 'Lora', serif;
          font-weight: 700;
          font-size: 15px;
          color: var(--accent);
          white-space: nowrap;
          letter-spacing: 0.02em;
        }
        .topbar-search {
          flex: 1;
          position: relative;
        }
        .topbar-search input {
          width: 100%;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 20px;
          padding: 6px 14px 6px 32px;
          color: var(--sidebar-text);
          font-size: 13px;
          outline: none;
          font-family: inherit;
        }
        .topbar-search input::placeholder { color: var(--sidebar-muted); }
        .topbar-search .search-icon {
          position: absolute; left: 10px; top: 50%; transform: translateY(-50%);
          color: var(--sidebar-muted); font-size: 13px; pointer-events: none;
        }
        .search-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0; right: 0;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          box-shadow: var(--shadow);
          z-index: 200;
          max-height: 280px;
          overflow-y: auto;
        }
        .search-item {
          padding: 10px 14px;
          cursor: pointer;
          border-bottom: 1px solid var(--border);
          font-size: 13px;
          transition: background 0.15s;
        }
        .search-item:hover { background: var(--bg2); }
        .search-item .s-ch { color: var(--accent); font-weight: 600; font-size: 11px; text-transform: uppercase; }
        .search-item .s-sec { color: var(--text); }
        .topbar-btn {
          background: rgba(255,255,255,0.08);
          border: none;
          border-radius: 8px;
          width: 34px; height: 34px;
          cursor: pointer;
          color: var(--sidebar-text);
          font-size: 16px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: background 0.15s;
        }
        .topbar-btn:hover { background: rgba(255,255,255,0.15); }
        .menu-btn { display: flex; }

        /* ── LAYOUT ── */
        .layout {
          display: flex;
          flex: 1;
          overflow: hidden;
          position: relative;
        }

        /* ── SIDEBAR ── */
        .sidebar {
          width: 280px;
          background: var(--sidebar);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
          z-index: 50;
        }
        @media (max-width: 768px) {
          .sidebar {
            position: absolute; top: 0; left: 0; bottom: 0;
            width: 80vw; max-width: 300px;
            transform: translateX(-100%);
            box-shadow: 4px 0 20px rgba(0,0,0,0.3);
          }
          .sidebar.open { transform: translateX(0); }
          .sidebar-overlay {
            position: absolute; inset: 0;
            background: rgba(0,0,0,0.5);
            z-index: 40;
            display: none;
          }
          .sidebar-overlay.visible { display: block; }
          .menu-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .menu-btn { display: none !important; }
        }

        .sidebar-header {
          padding: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .sidebar-title {
          font-family: 'Lora', serif;
          font-size: 13px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .sidebar-subtitle {
          font-size: 11px;
          color: var(--sidebar-muted);
        }
        .progress-bar {
          margin-top: 10px;
          height: 3px;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
          transition: width 0.4s ease;
        }
        .progress-label {
          font-size: 10px;
          color: var(--sidebar-muted);
          margin-top: 4px;
        }

        .chapter-list {
          flex: 1;
          overflow-y: auto;
          padding: 8px 0;
        }
        .chapter-list::-webkit-scrollbar { width: 3px; }
        .chapter-list::-webkit-scrollbar-track { background: transparent; }
        .chapter-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }

        .chapter-item {
          cursor: pointer;
          user-select: none;
        }
        .chapter-label {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 16px;
          font-size: 13px;
          color: var(--sidebar-text);
          transition: all 0.15s;
          border-left: 3px solid transparent;
        }
        .chapter-label:hover { background: rgba(255,255,255,0.04); }
        .chapter-label.active {
          background: rgba(193,127,62,0.12);
          border-left-color: var(--accent);
          color: var(--accent);
        }
        .ch-icon { font-size: 16px; flex-shrink: 0; }
        .ch-num {
          font-size: 10px;
          color: var(--sidebar-muted);
          font-weight: 600;
          letter-spacing: 0.08em;
          min-width: 18px;
        }
        .ch-title { flex: 1; line-height: 1.3; }

        .section-list {
          padding-left: 44px;
          padding-bottom: 4px;
        }
        .section-item {
          padding: 6px 12px;
          font-size: 12px;
          color: var(--sidebar-muted);
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.15s;
          line-height: 1.4;
        }
        .section-item:hover { color: var(--sidebar-text); }
        .section-item.active { color: var(--accent); }

        /* ── CONTENT ── */
        .content-area {
          flex: 1;
          overflow-y: auto;
          background: var(--bg);
          scroll-behavior: smooth;
        }
        .content-area::-webkit-scrollbar { width: 4px; }
        .content-area::-webkit-scrollbar-track { background: transparent; }
        .content-area::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }

        .content-inner {
          max-width: 720px;
          margin: 0 auto;
          padding: 24px 20px 60px;
        }

        /* chapter hero */
        .chapter-hero {
          background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
          border-radius: 12px;
          padding: 24px 20px;
          margin-bottom: 28px;
          position: relative;
          overflow: hidden;
        }
        .chapter-hero::before {
          content: '';
          position: absolute;
          top: -20px; right: -20px;
          width: 120px; height: 120px;
          background: rgba(255,255,255,0.08);
          border-radius: 50%;
        }
        .hero-icon { font-size: 32px; margin-bottom: 8px; }
        .hero-num {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 4px;
        }
        .hero-title {
          font-family: 'Lora', serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
        }
        .hero-sections {
          margin-top: 12px;
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .hero-section-tag {
          background: rgba(255,255,255,0.15);
          border-radius: 20px;
          padding: 3px 10px;
          font-size: 11px;
          color: rgba(255,255,255,0.85);
          cursor: pointer;
          transition: background 0.15s;
        }
        .hero-section-tag:hover { background: rgba(255,255,255,0.25); }

        /* nav arrows */
        .chapter-nav {
          display: flex;
          justify-content: space-between;
          margin-bottom: 24px;
          gap: 8px;
        }
        .nav-btn {
          flex: 1;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 10px 12px;
          cursor: pointer;
          color: var(--text2);
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.15s;
          font-family: inherit;
        }
        .nav-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
        .nav-btn:disabled { opacity: 0.3; cursor: default; }
        .nav-btn.next { justify-content: flex-end; text-align: right; }

        /* Markdown styles */
        .md-content { line-height: 1.8; }
        .md-h2 {
          font-family: 'Lora', serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--text);
          margin: 28px 0 14px;
          padding-bottom: 8px;
          border-bottom: 2px solid var(--border);
        }
        .md-h3 {
          font-family: 'Lora', serif;
          font-size: 16px;
          font-weight: 600;
          color: var(--accent);
          margin: 22px 0 10px;
        }
        .md-p { margin-bottom: 12px; font-size: 15px; color: var(--text2); line-height: 1.8; }
        .md-code {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1px 6px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
          color: var(--accent);
        }
        .md-blockquote {
          border-left: 3px solid var(--accent);
          padding: 10px 14px;
          background: var(--bg2);
          border-radius: 0 8px 8px 0;
          margin: 16px 0;
          font-style: italic;
          color: var(--text2);
          font-size: 14px;
        }
        .md-hr { border: none; border-top: 1px solid var(--border); margin: 20px 0; }
        .md-ul, .md-ol { padding-left: 20px; margin: 10px 0; }
        .md-li { margin-bottom: 6px; font-size: 15px; color: var(--text2); line-height: 1.7; }
        .md-table-wrap { overflow-x: auto; margin: 16px 0; }
        .md-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13.5px;
        }
        .md-table th {
          background: var(--accent);
          color: #fff;
          padding: 8px 12px;
          text-align: left;
          font-weight: 600;
        }
        .md-table td {
          padding: 7px 12px;
          border-bottom: 1px solid var(--border);
          color: var(--text2);
        }
        .md-table tr:nth-child(even) td { background: var(--bg2); }

        /* Math */
        .math-block {
          display: block;
          padding: 12px 16px;
          background: var(--math-bg);
          border-left: 3px solid var(--accent);
          border-radius: 0 8px 8px 0;
          margin: 14px 0;
          overflow-x: auto;
          font-size: 15px;
        }
        .math-inline {
          background: var(--math-bg);
          border-radius: 3px;
          padding: 1px 4px;
          font-size: 14px;
        }

        /* Quiz */
        .quiz-container {
          margin-top: 32px;
          border: 2px solid var(--accent);
          border-radius: 12px;
          overflow: hidden;
        }
        .quiz-header {
          background: var(--accent);
          color: #fff;
          padding: 12px 16px;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Lora', serif;
        }
        .quiz-question {
          padding: 14px 16px;
          border-bottom: 1px solid var(--border);
          background: var(--quiz-bg);
          transition: background 0.2s;
        }
        .quiz-question.correct { background: rgba(45,122,79,0.08); }
        .quiz-question.wrong { background: rgba(192,57,43,0.08); }
        .q-text { font-weight: 600; font-size: 14px; margin-bottom: 10px; color: var(--text); }
        .q-options { display: flex; flex-direction: column; gap: 6px; }
        .q-option {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border: 1.5px solid var(--border);
          border-radius: 8px;
          cursor: pointer;
          font-size: 13.5px;
          transition: all 0.15s;
          color: var(--text2);
          background: var(--surface);
        }
        .q-option.selected { border-color: var(--accent); color: var(--accent); background: rgba(193,127,62,0.08); }
        .q-option.correct-ans { border-color: var(--correct); color: var(--correct); background: rgba(45,122,79,0.08); }
        .q-option input { accent-color: var(--accent); }
        .q-explain { margin-top: 8px; font-size: 12.5px; color: var(--correct); font-weight: 600; }
        .quiz-btn {
          display: block;
          margin: 14px 16px 16px;
          padding: 10px 24px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          font-family: inherit;
          transition: all 0.15s;
        }
        .quiz-btn.submit {
          background: var(--accent);
          color: #fff;
          width: calc(100% - 32px);
        }
        .quiz-btn.submit:disabled { opacity: 0.4; cursor: default; }
        .quiz-btn.submit:not(:disabled):hover { background: var(--accent2); }
        .quiz-btn.reset {
          background: transparent;
          border: 1.5px solid var(--accent);
          color: var(--accent);
        }
        .quiz-result {
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }
        .score { font-size: 28px; font-weight: 900; font-family: 'Lora', serif; color: var(--accent); }
        .score-label { font-size: 14px; color: var(--text2); flex: 1; }

        .quiz-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--surface);
          border: 2px dashed var(--accent);
          border-radius: 10px;
          padding: 14px;
          cursor: pointer;
          color: var(--accent);
          font-weight: 700;
          font-size: 14px;
          margin-top: 28px;
          transition: background 0.15s;
        }
        .quiz-toggle:hover { background: rgba(193,127,62,0.08); }
      `}</style>

      {/* TOP BAR */}
      <header className="topbar">
        <button className="topbar-btn menu-btn" onClick={() => setSidebarOpen(o => !o)}>☰</button>
        <span className="topbar-logo">⚗ Cơ Học Đất</span>
        <div className="topbar-search">
          <span className="search-icon">🔍</span>
          <input
            placeholder="Tìm kiếm bài học..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onBlur={() => setTimeout(() => setSearch(""), 200)}
          />
          {search && searchResults.length > 0 && (
            <div className="search-dropdown">
              {searchResults.slice(0, 8).map((r, i) => (
                <div key={i} className="search-item"
                  onMouseDown={() => { selectChapter(r.chId); setSearch(""); }}>
                  <div className="s-ch">Ch.{r.chId} — {r.chTitle}</div>
                  <div className="s-sec">§ {r.secTitle}</div>
                </div>
              ))}
            </div>
          )}
          {search && searchResults.length === 0 && (
            <div className="search-dropdown">
              <div className="search-item" style={{color:"var(--text2)"}}>Không tìm thấy kết quả</div>
            </div>
          )}
        </div>
        <button className="topbar-btn" onClick={() => setDark(d => !d)} title="Đổi chế độ sáng/tối">
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      {/* LAYOUT */}
      <div className="layout">
        {/* Overlay for mobile */}
        <div
          className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* SIDEBAR */}
        <nav className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <div className="sidebar-title">Mục lục</div>
            <div className="sidebar-subtitle">Cơ Học Đất · Học theo dự án</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="progress-label">Tiến độ: Chương {activeChapter}/{CHAPTERS.length}</div>
          </div>

          <div className="chapter-list">
            {CHAPTERS.map(ch => (
              <div key={ch.id} className="chapter-item">
                <div
                  className={`chapter-label ${activeChapter === ch.id ? 'active' : ''}`}
                  onClick={() => selectChapter(ch.id)}
                >
                  <span className="ch-icon">{ch.icon}</span>
                  <span className="ch-num">{String(ch.id).padStart(2,'0')}</span>
                  <span className="ch-title">{ch.title}</span>
                </div>
                {activeChapter === ch.id && (
                  <div className="section-list">
                    {ch.sections.map(s => (
                      <div key={s.id}
                        className={`section-item ${activeSection === s.id ? 'active' : ''}`}
                        onClick={() => { setActiveSection(s.id); setSidebarOpen(false); }}
                      >
                        {s.id} · {s.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* CONTENT */}
        <main className="content-area" ref={contentRef}>
          <div className="content-inner">
            {chapter && (
              <>
                {/* Hero */}
                <div className="chapter-hero">
                  <div className="hero-icon">{chapter.icon}</div>
                  <div className="hero-num">Chương {chapter.id}</div>
                  <div className="hero-title">{chapter.title}</div>
                  <div className="hero-sections">
                    {chapter.sections.map(s => (
                      <span key={s.id} className="hero-section-tag"
                        onClick={() => setActiveSection(s.id)}>
                        {s.title}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Nav */}
                <div className="chapter-nav">
                  <button className="nav-btn prev"
                    disabled={activeChapter <= 1}
                    onClick={() => selectChapter(activeChapter - 1)}>
                    ← <span>Chương {activeChapter - 1}</span>
                  </button>
                  <button className="nav-btn next"
                    disabled={activeChapter >= CHAPTERS.length}
                    onClick={() => selectChapter(activeChapter + 1)}>
                    <span>Chương {activeChapter + 1}</span> →
                  </button>
                </div>

                {/* Content */}
                <div
                  className="md-content"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(chapter.content) }}
                />

                {/* Quiz toggle */}
                {chapter.quiz && (
                  <>
                    <button className="quiz-toggle" onClick={() => setShowQuiz(q => !q)}>
                      🎯 {showQuiz ? 'Ẩn kiểm tra kiến thức' : 'Kiểm tra kiến thức'}
                    </button>
                    {showQuiz && (
                      <Quiz questions={chapter.quiz} chapterTitle={chapter.title} />
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
