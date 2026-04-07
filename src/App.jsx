import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const CHAPTERS = [
  {
    id: 1, icon: "🏗️", title: "Giới thiệu",
    sections: [
      { id: "1.1", title: "Mô tả dự án", content: `## 1.1 Mô tả Dự án\n\nNăm 2009, một kênh đào dân cư được đề xuất tại **Khu phát triển Pimpama Riverside** và cuộc khảo sát địa kỹ thuật được thực hiện để đánh giá điều kiện địa kỹ thuật của khu vực.\n\nMục tiêu chính là xác định tính chất đất và ước tính các nguy cơ địa kỹ thuật có thể xảy ra trong quá trình thi công. Khu vực dự án có vấn đề liên quan đến **sét rất mềm** phân bố rộng, không phải là nền móng phù hợp cho hầu hết công trình kỹ thuật.\n\n> 💡 Giải pháp đề xuất: Cố kết vật liệu mềm bằng **phương pháp gia tải trước (pre-load)** — sẽ được thảo luận chi tiết ở Chương 10.\n\nKết quả khảo sát bao gồm:\n- Bản đồ khu vực với đường đồng mức cao độ (−0.97 m đến −2.4 m)\n- Nhật ký 10 hố khoan (BH1–BH10)\n- Báo cáo thí nghiệm phòng thí nghiệm`, quiz: [
          { q: "Dự án kênh đào Pimpama được đề xuất vào năm nào?", options: ["2005","2007","2009","2011"], ans: 2, explain: "Năm 2009, dự án kênh dân cư tại Pimpama Riverside được đề xuất và tiến hành khảo sát địa kỹ thuật." },
          { q: "Vấn đề địa kỹ thuật chính ở khu vực dự án là gì?", options: ["Đá cứng","Sét rất mềm phân bố rộng","Cát chảy","Nứt đất"], ans: 1, explain: "Sét rất mềm (very soft clay) phân bố rộng là vấn đề chính, không phù hợp làm nền móng công trình." },
        ]},
      { id: "1.2", title: "Dữ liệu thực địa", content: `## 1.2 Dữ liệu Thực địa\n\n### Thí nghiệm xuyên động (DCPT)\n\nThực hiện tại vị trí gần BH9. Số nhát búa $N_d$ cho thấy:\n\n| Độ sâu (cm) | $N_d$ | Nhận xét |\n|---|---|---|\n| 0 – 230 | 1 – 6 | Đất rất mềm |\n| 230 – 460 | 4 – 9 | Đất trung bình |\n| 460 – 690 | 6 – 21 | Đất cứng hơn |\n\n### Nhật ký hố khoan\n\n1. **Lớp 1 (0–3 m):** Sét pha bùn rất mềm (VS), màu xám, bão hòa\n2. **Lớp 2 (3–6 m):** Sét cứng hơn (F–St), màu nâu\n3. **Lớp 3 (> 6 m):** Đất sét cứng đến rất cứng`, quiz: [
          { q: "DCPT đo thông số gì?", options: ["Góc ma sát","Số nhát búa $N_d$ xuyên 10 cm","Hệ số thấm","Độ ẩm"], ans: 1, explain: "$N_d$ là số nhát búa để xuyên mỗi 10 cm — phản ánh độ cứng của đất." },
        ]},
      { id: "1.3", title: "Dữ liệu phòng thí nghiệm", content: `## 1.3 Dữ liệu Phòng thí nghiệm\n\nBa loại đất được thí nghiệm:\n\n| Loại đất | Đặc điểm |\n|---|---|\n| Sét pha bùn phù sa | Mềm, độ ẩm cao |\n| Đất tàn tích | Cứng hơn |\n| Cát hố thử | Hạt thô, sạch |\n\nSét phù sa điển hình có độ ẩm $w \\approx 60\\text{–}80\\%$ — rất cao, chỉ thị đất rất mềm.`, quiz: [
          { q: "Sét phù sa tại Pimpama có độ ẩm khoảng?", options: ["10–20%","30–40%","60–80%","100–120%"], ans: 2, explain: "Sét mềm phù sa bão hòa $w \\approx 60\\text{–}80\\%$, phản ánh tỷ lệ rỗng rất lớn." },
        ]},
    ],
  },
  {
    id: 2, icon: "🌍", title: "Sự hình thành và thăm dò đất",
    sections: [
      { id: "2.1", title: "Phong hóa đá và hình thành đất", content: `## 2.1 Phong hóa đá và Hình thành đất\n\n### Phong hóa vật lý\nPhá vỡ đá thành mảnh nhỏ **không thay đổi thành phần hóa học** → tạo sỏi, cát, bột thô.\n\n### Phong hóa hóa học\n**Thay đổi thành phần hóa học** khoáng vật. Mạnh hơn ở **vùng nhiệt đới ẩm** → tạo khoáng vật sét mới (kaolinite, illite, montmorillonite).`, quiz: [
          { q: "Phong hóa hóa học tạo ra loại khoáng vật nào chủ yếu?", options: ["Thạch anh","Fenspat","Khoáng vật sét","Mica"], ans: 2, explain: "Phong hóa hóa học phân hủy feldspar → khoáng vật sét như kaolinite, illite, montmorillonite." },
        ]},
      { id: "2.2", title: "Đất tàn tích và đất vận chuyển", content: `## 2.2 Đất tàn tích và Đất vận chuyển\n\n**Đất tàn tích (Residual Soil):** Hình thành **tại chỗ** từ đá gốc bên dưới, phổ biến vùng nhiệt đới.\n\n| Loại | Tác nhân | Ví dụ |\n|---|---|---|\n| Đất phù sa | Nước | Đồng bằng sông Cửu Long |\n| Đất eolian | Gió | Sa mạc, cồn cát |\n| Đất băng hà | Băng | Vùng ôn đới |\n\n> 💡 **Dự án Pimpama:** Đất phù sa (alluvial) — lắng đọng bởi dòng nước, giải thích lớp sét mềm dày.`, quiz: [
          { q: "Đất tàn tích hình thành như thế nào?", options: ["Do gió vận chuyển","Tại chỗ từ phong hóa đá gốc","Do nước lũ lắng đọng","Do băng hà"], ans: 1, explain: "Residual soil hình thành ngay tại vị trí từ đá gốc bên dưới qua phong hóa." },
        ]},
      { id: "2.3", title: "Khoáng vật học và thăm dò đất", content: `## 2.3 Khoáng vật học và Thăm dò đất\n\n| Khoáng vật | Trương nở | Đặc điểm |\n|---|---|---|\n| Kaolinite | Thấp | Ổn định, vùng nhiệt đới |\n| Illite | Vừa | Tính chất trung gian |\n| Montmorillonite | **Cao** | Nguy hiểm, hút nước mạnh |\n\n### Phương pháp thăm dò\n- **Desk Study:** Thu thập bản đồ địa chất\n- **Hố khoan:** Auger (AD), Washbore (W), Mẫu U50 (50 mm)\n- **Thí nghiệm hiện trường:** SPT, DCPT, CPT`, quiz: [
          { q: "Loại khoáng vật sét nào trương nở mạnh nhất?", options: ["Kaolinite","Illite","Montmorillonite","Chlorite"], ans: 2, explain: "Montmorillonite hút nước và trương nở rất lớn, gây nứt lún công trình." },
        ]},
    ],
  },
  {
    id: 3, icon: "⚗️", title: "Thành phần đất",
    sections: [
      { id: "3.1", title: "Ba pha và tỷ số thể tích", content: `## 3.1 Ba pha và Tỷ số thể tích\n\n| Pha | Thể tích | Khối lượng |\n|---|---|---|\n| Hạt rắn | $V_s$ | $M_s$ |\n| Nước | $V_w$ | $M_w$ |\n| Khí | $V_a$ | ≈ 0 |\n\n$$V_v = V_w + V_a \\qquad V = V_s + V_v$$\n\n### Tỷ lệ rỗng $e$\n$$e = \\frac{V_v}{V_s}$$\n\n### Độ rỗng $n$\n$$n = \\frac{V_v}{V} \\times 100\\% \\qquad n = \\frac{e}{1+e}$$\n\n### Độ bão hòa $S$\n$$S = \\frac{V_w}{V_v} \\times 100\\%$$\n\n### Mật độ tương đối $D_r$\n$$D_r = \\frac{e_{max} - e}{e_{max} - e_{min}} \\times 100\\%$$\n\n| $D_r$ (%) | Trạng thái cát |\n|---|---|\n| 0 – 15 | Rất rời |\n| 35 – 65 | Trung bình |\n| 85 – 100 | Rất chặt |`, quiz: [
          { q: "Công thức tỷ lệ rỗng $e$ là gì?", options: ["$e = V_s/V_v$","$e = V_v/V_s$","$e = V_v/V$","$e = V/V_s$"], ans: 1, explain: "$e = V_v/V_s$ — tỷ số thể tích lỗ rỗng trên hạt rắn. Sét mềm có $e > 1$." },
          { q: "Khi $S = 100\\%$, đất ở trạng thái nào?", options: ["Khô","Bán bão hòa","Bão hòa hoàn toàn","Đóng băng"], ans: 2, explain: "$S = 100\\%$: toàn bộ lỗ rỗng chứa nước — đất bão hòa hoàn toàn." },
        ]},
      { id: "3.2", title: "Tỷ số khối lượng", content: `## 3.2 Tỷ số khối lượng\n\n### Độ ẩm $w$\n$$w = \\frac{M_w}{M_s} \\times 100\\%$$\n\n### Trọng lượng đơn vị $\\gamma$\n$$\\gamma = \\rho \\cdot g \\quad (\\text{kN/m}^3)$$\n\n| Loại | $\\gamma$ (kN/m³) |\n|---|---|\n| Cát khô | 14 – 17 |\n| Cát bão hòa | 18 – 21 |\n| Sét mềm | 15 – 18 |\n\n### Trọng lượng riêng hạt $G_s$\n$$G_s = \\frac{\\rho_s}{\\rho_w} \\approx 2.65\\text{–}2.72$$\n\n### Công thức hữu ích\n$$\\gamma_d = \\frac{\\gamma}{1+w} \\qquad S \\cdot e = G_s \\cdot w$$\n\n$$\\gamma_{sat} = \\frac{(G_s + e)\\,\\gamma_w}{1+e} \\qquad \\gamma' = \\gamma_{sat} - \\gamma_w$$`, quiz: [
          { q: "Công thức độ ẩm $w$?", options: ["$w = M_s/M_w$","$w = M_w/M_s \\times 100\\%$","$w = M_w/M \\times 100\\%$","$w = V_w/V \\times 100\\%$"], ans: 1, explain: "$w = M_w/M_s \\times 100\\%$ — tỷ số khối lượng nước trên khối lượng hạt rắn." },
          { q: "$G_s$ của hầu hết đất nằm trong khoảng?", options: ["1.5 – 2.0","2.0 – 2.4","2.65 – 2.72","3.0 – 3.5"], ans: 2, explain: "$G_s \\approx 2.65\\text{–}2.72$ là giá trị điển hình cho đất khoáng." },
        ]},
    ],
  },
  {
    id: 4, icon: "🗂️", title: "Phân loại đất",
    sections: [
      { id: "4.1", title: "Kích thước hạt và thí nghiệm rây", content: `## 4.1 Kích thước hạt và Thí nghiệm rây\n\n| Loại | Kích thước |\n|---|---|\n| Sỏi cuội | > 4.75 mm |\n| Cát mịn | 0.075 – 0.425 mm |\n| Bột | 0.002 – 0.075 mm |\n| **Sét** | **< 0.002 mm** |\n\n### Hệ số phân loại\n$$C_u = \\frac{D_{60}}{D_{10}} \\qquad C_c = \\frac{D_{30}^2}{D_{60} \\times D_{10}}$$\n\nCát **phân loại tốt (SW):** $C_u > 6$ **và** $1 \\leq C_c \\leq 3$`, quiz: [
          { q: "Kích thước hạt sét (USCS)?", options: ["< 0.075 mm","< 0.002 mm","< 0.425 mm","< 0.06 mm"], ans: 1, explain: "Theo USCS, sét $D < 0.002$ mm (2 μm)." },
        ]},
      { id: "4.2", title: "Giới hạn Atterberg và USCS", content: `## 4.2 Giới hạn Atterberg và Phân loại USCS\n\n$$\\text{Rắn} \\xrightarrow{PL} \\text{Dẻo} \\xrightarrow{LL} \\text{Lỏng}$$\n\n$$PI = LL - PL \\qquad LI = \\frac{w - PL}{PI}$$\n\n| $LI$ | Trạng thái |\n|---|---|\n| < 0 | Rắn |\n| 0 – 1 | Dẻo |\n| > 1 | **Lỏng — nguy hiểm!** |\n\n### Biểu đồ dẻo\nĐường A: $PI = 0.73\\,(LL - 20)$\n- Trên đường A + $PI > 7$: Sét (C)\n- Dưới đường A: Bột (M)\n\n> 💡 **Dự án Pimpama:** Sét phù sa phân loại **CH** ($LL \\approx 65\\%$, $PI \\approx 35\\%$).`, quiz: [
          { q: "Chỉ số dẻo $PI$?", options: ["$PI = LL + PL$","$PI = LL - PL$","$PI = PL - LL$","$PI = LL \\times PL$"], ans: 1, explain: "$PI = LL - PL$ — phạm vi độ ẩm đất ở trạng thái dẻo." },
          { q: "Khi $LI > 1$, đất ở trạng thái nào?", options: ["Rắn","Dẻo","Lỏng (nguy hiểm)","Đóng băng"], ans: 2, explain: "$LI > 1$: $w > LL$ — đất chảy lỏng, rất nguy hiểm thi công." },
        ]},
    ],
  },
  {
    id: 5, icon: "🔨", title: "Đầm chặt đất",
    sections: [
      { id: "5.1", title: "Đầm chặt và thí nghiệm Proctor", content: `## 5.1 Đầm chặt và Thí nghiệm Proctor\n\n**Đầm chặt:** Tăng mật độ đất bằng cơ học — loại bỏ **khí** (không phải nước).\n\n> ⚠️ Đầm chặt ≠ Cố kết: đầm chặt loại khí, cố kết loại nước.\n\n### Proctor Tiêu chuẩn\n- Khuôn: 944 cm³, Búa: 2.5 kg, h = 305 mm, 3 lớp × 25 chày\n\n$$\\rho_d = \\frac{\\rho}{1+w} \\qquad \\rho_{d,ZAV} = \\frac{G_s \\cdot \\rho_w}{1 + G_s \\cdot w}$$\n\nĐường cong đầm chặt (hình chuông) → $\\rho_{d,max}$ tại $w_{opt}$\n\n### Kiểm tra hiện trường\n$$RC = \\frac{\\rho_{d,field}}{\\rho_{d,max}} \\times 100\\% \\geq 95\\%$$`, quiz: [
          { q: "Mục đích đầm chặt?", options: ["Tăng độ ẩm","Tăng mật độ khô, giảm khí","Giảm cường độ","Tăng hệ số thấm"], ans: 1, explain: "Đầm chặt tăng $\\rho_d$ bằng cách loại khí — cải thiện khả năng chịu tải." },
          { q: "Đường ZAV biểu thị gì?", options: ["Đất khô ($S=0\\%$)","Đất bão hòa ($S=100\\%$)","Tại $\\rho_{d,max}$","Độ ẩm tối ưu"], ans: 1, explain: "ZAV: $S = 100\\%$ — giới hạn lý thuyết tối đa." },
        ]},
    ],
  },
  {
    id: 6, icon: "⚖️", title: "Ứng suất trong đất",
    sections: [
      { id: "6.1", title: "Ứng suất hữu hiệu Terzaghi", content: `## 6.1 Ứng suất hữu hiệu — Nguyên lý Terzaghi\n\n$$\\sigma_v = \\sum \\gamma_i \\cdot h_i$$\n\n$$\\boxed{\\sigma' = \\sigma - u}$$\n\n| Ký hiệu | Tên | Đơn vị |\n|---|---|---|\n| $\\sigma'$ | Ứng suất hữu hiệu | kPa |\n| $\\sigma$ | Ứng suất tổng | kPa |\n| $u = \\gamma_w h_w$ | Áp lực nước lỗ rỗng | kPa |\n\n$$\\sigma'_h = K_0 \\cdot \\sigma'_v \\qquad K_0 = 1 - \\sin\\phi' \\text{ (NC)}$$`, quiz: [
          { q: "Nguyên lý Terzaghi: $\\sigma' = ?$", options: ["$\\sigma + u$","$\\sigma - u$","$u - \\sigma$","$\\sigma \\times u$"], ans: 1, explain: "$\\sigma' = \\sigma - u$ — phần ứng suất do hạt đất chịu sau khi trừ áp lực nước lỗ rỗng." },
        ]},
      { id: "6.2", title: "Thấm hướng lên và đất chảy", content: `## 6.2 Thấm hướng lên và Điều kiện đất chảy\n\n$$i = \\frac{\\Delta h}{L} \\qquad \\sigma'_v = (\\gamma' - i\\,\\gamma_w)\\,z$$\n\n### Gradient tới hạn (Quick Condition)\n\nKhi $\\sigma'_v = 0$:\n\n$$i_{cr} = \\frac{\\gamma'}{\\gamma_w} = \\frac{G_s - 1}{1 + e} \\approx 0.9\\text{–}1.1$$\n\n> ⚠️ Khi $i > i_{cr}$: **cát chảy (quicksand)** — đất mất hoàn toàn sức chịu tải!\n\n**Dự án Pimpama:** $\\gamma_{sat} = 16$ kN/m³, $\\gamma' = 6$ kN/m³\n$$i_{cr} = 6/9.81 \\approx 0.61$$`, quiz: [
          { q: "Gradient tới hạn $i_{cr}$?", options: ["$\\gamma'/\\gamma_w$","$\\gamma_w/\\gamma'$","$\\gamma_{sat}/\\gamma_w$","1.0"], ans: 0, explain: "$i_{cr} = \\gamma'/\\gamma_w$. Khi $i > i_{cr}$, ứng suất hữu hiệu = 0 → đất chảy." },
        ]},
    ],
  },
  {
    id: 7, icon: "💧", title: "Dòng thấm trong đất",
    sections: [
      { id: "7.1", title: "Định luật Darcy và thí nghiệm", content: `## 7.1 Định luật Darcy và Thí nghiệm\n\n| Loại đất | $k$ (m/s) |\n|---|---|\n| Sỏi | $10^{-1}$ – $1$ |\n| Cát thô | $10^{-4}$ – $10^{-2}$ |\n| Cát mịn | $10^{-6}$ – $10^{-4}$ |\n| Sét | $10^{-11}$ – $10^{-8}$ |\n\n$$v = k \\cdot i \\qquad q = k \\cdot i \\cdot A$$\n\n**Cột nước không đổi (đất thô):**\n$$k = \\frac{q \\cdot L}{A \\cdot \\Delta h}$$\n\n**Cột nước thay đổi (đất mịn):**\n$$k = \\frac{a \\cdot L}{A\\,(t_2-t_1)} \\cdot \\ln\\frac{h_1}{h_2}$$\n\n**Đất phân lớp:**\n$$k_H = \\frac{\\sum k_i h_i}{\\sum h_i} \\geq k_V = \\frac{\\sum h_i}{\\sum h_i/k_i}$$`, quiz: [
          { q: "Định luật Darcy: $v = ?$", options: ["$k/i$","$k \\times i$","$i/k$","$k + i$"], ans: 1, explain: "$v = k \\cdot i$ — vận tốc thấm tỷ lệ thuận với gradient." },
          { q: "Falling Head dùng cho loại đất nào?", options: ["Cát thô","Sỏi cuội","Đất mịn (sét, bột)","Đá gốc"], ans: 2, explain: "Falling Head cho đất mịn có $k$ nhỏ — nước chảy chậm qua mẫu." },
        ]},
      { id: "7.2", title: "Lưới thấm (Flow Net)", content: `## 7.2 Lưới thấm (Flow Net)\n\nLưới thấm gồm **đường dòng** và **đường đẳng thế** vuông góc nhau.\n\n$$q = k \\cdot H \\cdot \\frac{N_f}{N_d}$$\n\n| Ký hiệu | Ý nghĩa |\n|---|---|\n| $N_f$ | Số kênh dòng |\n| $N_d$ | Số bậc giảm thế |\n| $H$ | Chênh lệch cột nước |\n\n**Áp lực tại điểm đã qua $n_d$ bậc:**\n$$\\Delta h = H/N_d \\qquad u = \\gamma_w(H - n_d \\cdot \\Delta h)$$`, quiz: [
          { q: "Lưu lượng thấm qua lưới thấm?", options: ["$k \\cdot H \\cdot N_d/N_f$","$k \\cdot H \\cdot N_f/N_d$","$H/(k \\cdot N_f \\cdot N_d)$","$k/(H \\cdot N_f)$"], ans: 1, explain: "$q = k H N_f/N_d$: $N_f$ nhiều → lưu lượng lớn; $N_d$ nhiều → lưu lượng nhỏ." },
        ]},
    ],
  },
  {
    id: 8, icon: "⭕", title: "Vòng tròn Mohr",
    sections: [
      { id: "8.1", title: "Vòng tròn Mohr và phương pháp Cực", content: `## 8.1 Vòng tròn Mohr\n\n$$\\sigma_\\theta = \\frac{\\sigma_1+\\sigma_3}{2} + \\frac{\\sigma_1-\\sigma_3}{2}\\cos 2\\theta$$\n\n$$\\tau_\\theta = \\frac{\\sigma_1-\\sigma_3}{2}\\sin 2\\theta$$\n\n**Tâm:** $O = \\left(\\dfrac{\\sigma_1+\\sigma_3}{2},\\,0\\right)$ — **Bán kính:** $R = \\tau_{max} = \\dfrac{\\sigma_1-\\sigma_3}{2}$\n\n### Phương pháp Cực (Pole)\n1. Vẽ vòng tròn Mohr\n2. Từ $A(\\sigma_3, 0)$ vẽ đường ngang → điểm cực $P$\n3. Từ $P$ vẽ đường song song với mặt phẳng cần xét\n4. Giao với vòng tròn = $(\\sigma_\\theta, \\tau_\\theta)$`, quiz: [
          { q: "$\\tau_{max}$ trong vòng tròn Mohr?", options: ["$(\\sigma_1+\\sigma_3)/2$","$(\\sigma_1-\\sigma_3)/2$","$\\sigma_1 \\times \\sigma_3$","$\\sigma_1/\\sigma_3$"], ans: 1, explain: "$\\tau_{max} = R = (\\sigma_1-\\sigma_3)/2$ — bán kính vòng tròn, xảy ra trên mặt phẳng nghiêng 45°." },
        ]},
    ],
  },
  {
    id: 9, icon: "📐", title: "Biến dạng đất",
    sections: [
      { id: "9.1", title: "Thí nghiệm biến dạng", content: `## 9.1 Thí nghiệm Biến dạng\n\n### Thí nghiệm Ba trục\n\n| Loại | Điều kiện | Xác định |\n|---|---|---|\n| UU | Không CĐ – Không TN | $c_u$, $\\phi_u = 0°$ |\n| CU | Cố định – Không TN | $c_{cu}$, $\\phi_{cu}$, đo $u$ |\n| CD | Cố định – Thoát nước | $c'$, $\\phi'$ hữu hiệu |\n\n### Thí nghiệm UCT\n$$q_u = P/A \\qquad c_u = q_u/2$$\n\n### Hệ số Skempton\n$$\\Delta u = B[\\Delta\\sigma_3 + A(\\Delta\\sigma_1-\\Delta\\sigma_3)]$$\n- Đất bão hòa: $B = 1$\n- Sét NC: $A \\approx 0.5\\text{–}1.0$\n- Sét OC: $A < 0$`, quiz: [
          { q: "UCT xác định thông số nào?", options: ["Góc ma sát $\\phi'$","Lực dính không thoát nước $c_u$","Hệ số thấm $k$","Giới hạn chảy $LL$"], ans: 1, explain: "$c_u = q_u/2$ từ thí nghiệm nén không hạn chế, dùng phân tích ngắn hạn sét bão hòa." },
          { q: "CD cho kết quả gì?", options: ["Chỉ $c_u$","Tham số hữu hiệu $c'$, $\\phi'$","Hệ số thấm","Giới hạn dẻo"], ans: 1, explain: "CD thực hiện chậm, đo $c'$, $\\phi'$ hữu hiệu — dùng phân tích dài hạn." },
        ]},
    ],
  },
  {
    id: 10, icon: "⏱️", title: "Cố kết đất mềm",
    sections: [
      { id: "10.1", title: "Quá trình và tính toán cố kết", content: `## 10.1 Quá trình Cố kết\n\n**Cố kết:** Đất mịn nén chặt dần do **nước lỗ rỗng thoát ra** theo thời gian.\n\n$$S_{total} = S_i + S_c + S_s$$\n\n### Tính lún Oedometer\n\n**NC ($OCR = 1$):**\n$$S_c = \\frac{C_c}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$\n\n**OC ($\\sigma'_0 + \\Delta\\sigma' \\leq \\sigma'_c$):**\n$$S_c = \\frac{C_s}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$`, quiz: [
          { q: "Cố kết khác đầm chặt ở điểm gì?", options: ["Đầm chặt dùng máy","Cố kết loại nước, đầm chặt loại khí","Cố kết chỉ cho cát","Cố kết xảy ra tức thời"], ans: 1, explain: "Cố kết: nước thoát từ lỗ rỗng sét (chậm). Đầm chặt: khí bị ép ra cơ học (nhanh)." },
        ]},
      { id: "10.2", title: "Lý thuyết Terzaghi và OCR", content: `## 10.2 Lý thuyết Cố kết Terzaghi và OCR\n\n$$c_v \\frac{\\partial^2 u}{\\partial z^2} = \\frac{\\partial u}{\\partial t}$$\n\n$$c_v = \\frac{k}{m_v \\gamma_w} \\qquad T_v = \\frac{c_v\\,t}{H_{dr}^2}$$\n\n| $T_v$ | $U$ (%) |\n|---|---|\n| 0.008 | 10 |\n| 0.197 | 50 |\n| 0.405 | 70 |\n| 0.848 | 90 |\n\n$$OCR = \\frac{\\sigma'_c}{\\sigma'_{v0}}$$\n\n| $OCR$ | Trạng thái |\n|---|---|\n| $= 1$ | Bình thường cố kết (NC) |\n| $> 1$ | Quá cố kết (OC) |\n\n> 💡 **Pimpama:** $C_c \\approx 0.6\\text{–}0.8$, $H = 4$ m → lún **0.8–1.5 m**, thời gian 90%U ≈ **5–10 năm**!`, quiz: [
          { q: "Nhân tố thời gian $T_v$?", options: ["$c_v H_{dr}^2/t$","$c_v\\,t/H_{dr}^2$","$t/(c_v H_{dr})$","$H_{dr}^2/(c_v+t)$"], ans: 1, explain: "$T_v = c_v t/H_{dr}^2$ — lớp dày 2× cần 4× thời gian cùng mức cố kết." },
          { q: "Đất OC lún so với NC?", options: ["Lún nhiều hơn","Lún ít hơn","Như nhau","Không lún"], ans: 1, explain: "Đất OC đã từng chịu tải lớn hơn → nén chặt hơn → lún ít hơn NC dưới cùng tải." },
        ]},
    ],
  },
  {
    id: 11, icon: "⛰️", title: "Sức chống cắt và ổn định mái dốc",
    sections: [
      { id: "11.1", title: "Tiêu chuẩn Mohr-Coulomb", content: `## 11.1 Tiêu chuẩn Phá hoại Mohr-Coulomb\n\n$$\\tau_f = c' + \\sigma'_n \\tan\\phi'$$\n\n| Tham số | Điển hình |\n|---|---|\n| $c'$ (lực dính hữu hiệu) | 0 – 50 kPa |\n| $\\phi'$ (góc ma sát) | 20° – 40° |\n| $c_u$ (không thoát nước) | 5 – 200 kPa |\n\n### Thí nghiệm hộp cắt\nTiến hành ≥ 3 mức tải $\\sigma'_n$ → vẽ 3 điểm → đường Mohr-Coulomb → $c'$, $\\phi'$.`, quiz: [
          { q: "Tiêu chuẩn Mohr-Coulomb: $\\tau_f = ?$", options: ["$c' - \\sigma' \\tan\\phi'$","$c' + \\sigma' \\tan\\phi'$","$\\sigma'/\\tan\\phi'$","$c' \\times \\sigma' \\times \\phi'$"], ans: 1, explain: "$\\tau_f = c' + \\sigma'_n \\tan\\phi'$ — gồm lực dính $c'$ và ma sát $\\sigma' \\tan\\phi'$." },
        ]},
      { id: "11.2", title: "Phân tích ổn định mái dốc", content: `## 11.2 Phân tích Ổn định Mái dốc\n\n### Mái dốc vô hạn\n\n**Không có thấm:**\n$$FS = \\frac{\\tan\\phi'}{\\tan\\beta}$$\n\n**Có mực nước ngầm ở bề mặt:**\n$$FS = \\frac{\\gamma'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\phi'}{\\tan\\beta}$$\n\n### Phương pháp Bishop Đơn giản\n\n$$FS = \\frac{\\displaystyle\\sum \\frac{c'b + (W-ub)\\tan\\phi'}{m_\\alpha}}{\\displaystyle\\sum W\\sin\\alpha} \\qquad m_\\alpha = \\cos\\alpha + \\frac{\\tan\\phi'\\sin\\alpha}{FS}$$\n\n> ⚠️ **Kênh đào Pimpama:** $c_u = 10$ kPa, $\\phi_u = 0°$ → $FS \\approx 1.1\\text{–}1.3$ — **KHÔNG ĐẠT** $FS \\geq 1.5$!`, quiz: [
          { q: "Mái dốc vô hạn không có thấm: $FS = ?$", options: ["$\\tan\\phi'/\\tan\\beta$","$\\tan\\beta/\\tan\\phi'$","$c'/(\\gamma H)$","$\\gamma'\\tan\\phi'/\\gamma_{sat}$"], ans: 0, explain: "$FS = \\tan\\phi'/\\tan\\beta$ — ổn định khi $\\beta < \\phi'$. Khi $\\beta = \\phi'$: $FS = 1$." },
          { q: "Hệ số an toàn tối thiểu cho mái dốc?", options: ["$FS \\geq 1.0$","$FS \\geq 1.5$","$FS \\geq 3.0$","$FS \\geq 0.5$"], ans: 1, explain: "$FS \\geq 1.5$ là yêu cầu tối thiểu phổ biến cho mái dốc thông thường." },
        ]},
    ],
  },
];

const ALL_SECTIONS = CHAPTERS.flatMap((ch) =>
  ch.sections.map((s) => ({ ...s, chapterId: ch.id, chapterTitle: ch.title, chapterIcon: ch.icon }))
);

function Quiz({ questions, sectionId }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = submitted ? questions.reduce((a, q, i) => a + (answers[i] === q.ans ? 1 : 0), 0) : 0;
  const reset = () => { setAnswers({}); setSubmitted(false); };
  return (
    <div className="quiz-wrap">
      <div className="quiz-head">🎯 Kiểm tra kiến thức</div>
      {questions.map((q, i) => {
        const ok = submitted && answers[i] === q.ans;
        const bad = submitted && answers[i] !== undefined && answers[i] !== q.ans;
        return (
          <div key={i} className={`quiz-q${ok ? " q-ok" : bad ? " q-bad" : ""}`}>
            <p className="q-text"><span className="q-num">{i + 1}</span>{q.q}</p>
            <div className="q-opts">
              {q.options.map((opt, j) => (
                <label key={j} className={`q-opt${answers[i] === j ? " opt-sel" : ""}${submitted && j === q.ans ? " opt-ans" : ""}`}>
                  <input type="radio" name={`${sectionId}-q${i}`} disabled={submitted}
                    checked={answers[i] === j} onChange={() => !submitted && setAnswers(p => ({ ...p, [i]: j }))} />
                  <span className="opt-ltr">{String.fromCharCode(65 + j)}</span>
                  <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={{ p: ({children}) => <span>{children}</span> }}>{opt}</ReactMarkdown>
                </label>
              ))}
            </div>
            {submitted && (
              <div className={`q-exp${ok ? " exp-ok" : " exp-bad"}`}>
                {ok ? "✅ " : "❌ "}
                <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} components={{ p: ({children}) => <span>{children}</span> }}>
                  {ok ? `Chính xác! ${q.explain}` : `**Đáp án đúng: ${q.options[q.ans]}**. ${q.explain}`}
                </ReactMarkdown>
              </div>
            )}
          </div>
        );
      })}
      <div className="quiz-foot">
        {!submitted ? (
          <button className={`btn-submit${Object.keys(answers).length < questions.length ? " btn-off" : ""}`}
            disabled={Object.keys(answers).length < questions.length} onClick={() => setSubmitted(true)}>
            Nộp bài →
          </button>
        ) : (
          <div className="quiz-res">
            <div className="res-score"><span className="sc-n">{score}</span><span className="sc-s">/</span><span className="sc-t">{questions.length}</span></div>
            <span className="res-msg">{score === questions.length ? "🎉 Xuất sắc!" : score >= Math.ceil(questions.length / 2) ? "👍 Khá tốt!" : "📖 Ôn lại nhé!"}</span>
            <button className="btn-reset" onClick={reset}>Làm lại</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const [idx, setIdx] = useState(0);
  const [expanded, setExpanded] = useState({ 1: true });
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const mainRef = useRef(null);

  const sec = ALL_SECTIONS[idx];
  const chapter = CHAPTERS.find(c => c.id === sec.chapterId);
  const allQuiz = chapter?.sections.flatMap(s => s.quiz || []) || [];

  const results = useMemo(() => {
    if (search.trim().length < 2) return [];
    const q = search.toLowerCase();
    return ALL_SECTIONS.filter(s =>
      s.title.toLowerCase().includes(q) || s.content.toLowerCase().includes(q) || s.chapterTitle.toLowerCase().includes(q)
    ).slice(0, 8);
  }, [search]);

  const goTo = useCallback((i) => {
    setIdx(i);
    setSidebarOpen(false);
    setExpanded(p => ({ ...p, [ALL_SECTIONS[i].chapterId]: true }));
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, []);

  useEffect(() => {
    setExpanded(p => ({ ...p, [sec.chapterId]: true }));
  }, [sec.chapterId]);

  return (
    <div className={dark ? "app dark" : "app light"}>
      <style>{CSS}</style>

      <header className="topbar">
        <button className="ham" onClick={() => setSidebarOpen(o => !o)}>
          <span/><span/><span/>
        </button>
        <div className="logo">
          <span>📖</span>
          <span className="logo-t">Cơ Học Đất</span>
          <span className="logo-s">UTC</span>
        </div>
        <div className="srch-wrap">
          <svg className="srch-ico" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="8.5" cy="8.5" r="5.5"/><path d="M15 15l-3-3"/>
          </svg>
          <input className="srch-inp" placeholder="Tìm kiếm bài học..." value={search}
            onChange={e => setSearch(e.target.value)} onBlur={() => setTimeout(() => setSearch(""), 250)} />
          {results.length > 0 && (
            <div className="srch-drop">
              {results.map((r, i) => (
                <div key={i} className="drop-row" onMouseDown={() => { goTo(ALL_SECTIONS.indexOf(r)); setSearch(""); }}>
                  <span className="drop-ch">{r.chapterIcon} Ch.{r.chapterId}</span>
                  <span className="drop-ti">{r.title}</span>
                </div>
              ))}
            </div>
          )}
          {search.trim().length >= 2 && results.length === 0 && (
            <div className="srch-drop"><div className="drop-none">Không tìm thấy kết quả</div></div>
          )}
        </div>
        <button className="mode-btn" onClick={() => setDark(d => !d)}>{dark ? "☀️" : "🌙"}</button>
      </header>

      <div className="body">
        {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)} />}

        <aside className={`sidebar${sidebarOpen ? " open" : ""}`}>
          <div className="sb-top">
            <div className="sb-brand">MỤC LỤC</div>
            <div className="sb-meta">{ALL_SECTIONS.length} bài · {CHAPTERS.length} chương</div>
          </div>
          <nav className="sb-nav">
            {CHAPTERS.map(ch => {
              const isExp = expanded[ch.id];
              const isAct = sec.chapterId === ch.id;
              return (
                <div key={ch.id} className="ch-grp">
                  <button className={`ch-btn${isAct ? " ch-act" : ""}`} onClick={() => setExpanded(p => ({ ...p, [ch.id]: !p[ch.id] }))}>
                    <span className="ch-ico">{ch.icon}</span>
                    <span className="ch-lab">
                      <span className="ch-n">Chương {ch.id}</span>
                      <span className="ch-ti">{ch.title}</span>
                    </span>
                    <span className={`ch-arr${isExp ? " arr-r" : ""}`}>›</span>
                  </button>
                  {isExp && (
                    <div className="sec-list">
                      {ch.sections.map(s => {
                        const si = ALL_SECTIONS.findIndex(x => x.id === s.id && x.chapterId === ch.id);
                        return (
                          <button key={s.id} className={`sec-btn${si === idx ? " sec-act" : ""}`} onClick={() => goTo(si)}>
                            <span className="sec-id">{s.id}</span>
                            <span className="sec-ti">{s.title}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        <main className="main" ref={mainRef}>
          <div className="content">
            <div className="bc">
              <span className="bc-ch">{chapter?.icon} Chương {sec.chapterId} — {chapter?.title}</span>
              <span className="bc-sep">›</span>
              <span className="bc-s">{sec.title}</span>
            </div>

            <article className="article">
              <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}
                components={{
                  h2: ({children}) => <h2 className="ah2">{children}</h2>,
                  h3: ({children}) => <h3 className="ah3">{children}</h3>,
                  p: ({children}) => <p className="ap">{children}</p>,
                  ul: ({children}) => <ul className="aul">{children}</ul>,
                  ol: ({children}) => <ol className="aol">{children}</ol>,
                  li: ({children}) => <li className="ali">{children}</li>,
                  blockquote: ({children}) => <blockquote className="abq">{children}</blockquote>,
                  table: ({children}) => <div className="twrap"><table className="atbl">{children}</table></div>,
                  th: ({children}) => <th className="ath">{children}</th>,
                  td: ({children}) => <td className="atd">{children}</td>,
                  strong: ({children}) => <strong className="astrong">{children}</strong>,
                  code: ({children}) => <code className="acode">{children}</code>,
                }}>
                {sec.content}
              </ReactMarkdown>
            </article>

            {allQuiz.length > 0 && <Quiz questions={allQuiz} sectionId={sec.id} key={sec.id} />}

            <div className="navrow">
              <button className={`nav-btn nav-prev${idx === 0 ? " nav-off" : ""}`} disabled={idx === 0} onClick={() => goTo(idx - 1)}>
                <svg viewBox="0 0 20 20" fill="currentColor"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"/></svg>
                <span><span className="nav-lbl">Bài trước</span><span className="nav-ti">{idx > 0 ? ALL_SECTIONS[idx-1].title : ""}</span></span>
              </button>
              <button className={`nav-btn nav-next${idx === ALL_SECTIONS.length-1 ? " nav-off" : ""}`} disabled={idx === ALL_SECTIONS.length-1} onClick={() => goTo(idx + 1)}>
                <span><span className="nav-lbl">Bài tiếp</span><span className="nav-ti">{idx < ALL_SECTIONS.length-1 ? ALL_SECTIONS[idx+1].title : ""}</span></span>
                <svg viewBox="0 0 20 20" fill="currentColor"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/></svg>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
.light{--bg:#f5f3ef;--surface:#fff;--sb:#1c2340;--sb-h:rgba(255,255,255,.06);--sb-act:rgba(255,255,255,.12);--sb-t:#c8cfe8;--sb-m:#7a85a8;--sb-at:#fff;--top:#1c2340;--acc:#2563eb;--acc-l:#dbeafe;--tx:#1a1a2e;--tx2:#4a5568;--tx3:#718096;--bd:#e2ddd5;--bqbg:#eff6ff;--cbg:#f1f5f9;--th:#1c2340;--alt:#f8f7f4;--qbg:#fafaf8;--ok-bg:#f0fdf4;--ok-t:#16a34a;--bad-bg:#fef2f2;--bad-t:#dc2626;--ans-bg:#dcfce7;--ans-bd:#16a34a;--sh:0 1px 3px rgba(0,0,0,.08),0 4px 12px rgba(0,0,0,.06);}
.dark{--bg:#111827;--surface:#1f2937;--sb:#0f172a;--sb-h:rgba(255,255,255,.05);--sb-act:rgba(255,255,255,.1);--sb-t:#94a3b8;--sb-m:#475569;--sb-at:#e2e8f0;--top:#0f172a;--acc:#3b82f6;--acc-l:#1e3a5f;--tx:#e2e8f0;--tx2:#94a3b8;--tx3:#64748b;--bd:#374151;--bqbg:#1e3a5f;--cbg:#374151;--th:#0f172a;--alt:#1a2435;--qbg:#1f2937;--ok-bg:#052e16;--ok-t:#4ade80;--bad-bg:#2d0a0a;--bad-t:#f87171;--ans-bg:#052e16;--ans-bd:#16a34a;--sh:0 1px 3px rgba(0,0,0,.3),0 4px 12px rgba(0,0,0,.2);}
.app{font-family:'Inter',-apple-system,sans-serif;background:var(--bg);color:var(--tx);height:100dvh;display:flex;flex-direction:column;overflow:hidden;}
.topbar{height:56px;background:var(--top);display:flex;align-items:center;padding:0 14px;gap:10px;flex-shrink:0;border-bottom:1px solid rgba(255,255,255,.06);z-index:100;}
.ham{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:6px;border-radius:6px;}
.ham span{display:block;width:20px;height:2px;background:var(--sb-t);border-radius:2px;}
@media(max-width:768px){.ham{display:flex;}}
.logo{display:flex;align-items:center;gap:7px;flex-shrink:0;font-size:18px;}
.logo-t{font-family:'Merriweather',serif;font-size:15px;font-weight:700;color:#fff;white-space:nowrap;}
.logo-s{font-size:10px;font-weight:600;color:var(--sb-m);background:rgba(255,255,255,.08);border-radius:4px;padding:2px 6px;letter-spacing:.08em;}
.srch-wrap{flex:1;position:relative;max-width:380px;}
.srch-ico{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:15px;height:15px;color:var(--sb-m);pointer-events:none;}
.srch-inp{width:100%;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:7px 12px 7px 32px;color:#e2e8f0;font-size:13.5px;font-family:inherit;outline:none;transition:border-color .15s;}
.srch-inp::placeholder{color:var(--sb-m);}
.srch-inp:focus{border-color:var(--acc);}
.srch-drop{position:absolute;top:calc(100% + 6px);left:0;right:0;background:var(--surface);border:1px solid var(--bd);border-radius:10px;box-shadow:var(--sh);z-index:300;overflow:hidden;}
.drop-row{display:flex;align-items:center;gap:10px;padding:9px 14px;cursor:pointer;border-bottom:1px solid var(--bd);transition:background .12s;}
.drop-row:last-child{border-bottom:none;}
.drop-row:hover{background:var(--acc-l);}
.drop-ch{font-size:11px;font-weight:600;color:var(--acc);flex-shrink:0;}
.drop-ti{font-size:13px;color:var(--tx);}
.drop-none{padding:12px 14px;font-size:13px;color:var(--tx3);}
.mode-btn{background:rgba(255,255,255,.08);border:none;border-radius:8px;width:36px;height:36px;cursor:pointer;font-size:18px;flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:background .15s;}
.mode-btn:hover{background:rgba(255,255,255,.15);}
.body{display:flex;flex:1;overflow:hidden;position:relative;}
.overlay{display:none;position:absolute;inset:0;background:rgba(0,0,0,.55);z-index:90;backdrop-filter:blur(2px);}
@media(max-width:768px){.overlay{display:block;}}
.sidebar{width:268px;background:var(--sb);display:flex;flex-direction:column;flex-shrink:0;overflow:hidden;border-right:1px solid rgba(255,255,255,.05);transition:transform .28s cubic-bezier(.4,0,.2,1);z-index:95;}
@media(max-width:768px){.sidebar{position:absolute;top:0;bottom:0;left:0;width:78vw;max-width:296px;transform:translateX(-100%);box-shadow:4px 0 24px rgba(0,0,0,.35);}.sidebar.open{transform:translateX(0);}}
.sb-top{padding:16px 14px 12px;border-bottom:1px solid rgba(255,255,255,.06);flex-shrink:0;}
.sb-brand{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--sb-m);margin-bottom:3px;}
.sb-meta{font-size:12px;color:var(--sb-m);}
.sb-nav{flex:1;overflow-y:auto;padding:4px 0 20px;}
.sb-nav::-webkit-scrollbar{width:3px;}
.sb-nav::-webkit-scrollbar-thumb{background:rgba(255,255,255,.08);border-radius:2px;}
.ch-grp{border-bottom:1px solid rgba(255,255,255,.04);}
.ch-btn{width:100%;display:flex;align-items:center;gap:9px;padding:10px 12px;background:none;border:none;cursor:pointer;text-align:left;border-left:3px solid transparent;transition:background .12s;}
.ch-btn:hover{background:var(--sb-h);}
.ch-btn.ch-act{background:var(--sb-act);border-left-color:var(--acc);}
.ch-ico{font-size:15px;flex-shrink:0;}
.ch-lab{flex:1;min-width:0;}
.ch-n{display:block;font-size:10px;font-weight:600;letter-spacing:.1em;color:var(--sb-m);text-transform:uppercase;}
.ch-ti{display:block;font-size:12.5px;color:var(--sb-t);line-height:1.3;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.ch-btn.ch-act .ch-ti{color:var(--sb-at);}
.ch-arr{color:var(--sb-m);font-size:18px;transition:transform .2s;flex-shrink:0;}
.ch-arr.arr-r{transform:rotate(90deg);}
.sec-list{padding:2px 0 4px 0;}
.sec-btn{width:100%;display:flex;align-items:flex-start;gap:7px;padding:7px 12px 7px 38px;background:none;border:none;cursor:pointer;text-align:left;border-left:3px solid transparent;transition:background .12s;}
.sec-btn:hover{background:var(--sb-h);}
.sec-btn.sec-act{background:rgba(37,99,235,.12);border-left-color:var(--acc);}
.sec-id{font-size:11px;font-weight:600;color:var(--sb-m);flex-shrink:0;margin-top:1px;}
.sec-ti{font-size:12px;color:var(--sb-m);line-height:1.4;}
.sec-btn.sec-act .sec-ti{color:#93c5fd;}
.main{flex:1;overflow-y:auto;background:var(--bg);scroll-behavior:smooth;}
.main::-webkit-scrollbar{width:5px;}
.main::-webkit-scrollbar-thumb{background:var(--bd);border-radius:3px;}
.content{max-width:780px;margin:0 auto;padding:26px 22px 60px;}
@media(max-width:600px){.content{padding:18px 14px 52px;}}
.bc{display:flex;align-items:center;gap:7px;margin-bottom:18px;font-size:12.5px;flex-wrap:wrap;}
.bc-ch{color:var(--acc);font-weight:600;}
.bc-sep{color:var(--tx3);}
.bc-s{color:var(--tx3);}
.article{background:var(--surface);border-radius:12px;padding:26px 30px;box-shadow:var(--sh);margin-bottom:22px;border:1px solid var(--bd);}
@media(max-width:600px){.article{padding:18px 16px;border-radius:10px;}}
.ah2{font-family:'Merriweather',serif;font-size:21px;font-weight:700;color:var(--tx);margin:0 0 18px;padding-bottom:12px;border-bottom:2px solid var(--bd);line-height:1.4;}
@media(max-width:600px){.ah2{font-size:17px;}}
.ah3{font-family:'Merriweather',serif;font-size:15px;font-weight:700;color:var(--acc);margin:22px 0 10px;}
.ap{font-size:15.5px;line-height:1.85;color:var(--tx2);margin-bottom:12px;}
@media(max-width:600px){.ap{font-size:14.5px;}}
.aul,.aol{padding-left:20px;margin:8px 0 12px;}
.ali{font-size:15px;line-height:1.75;color:var(--tx2);margin-bottom:5px;}
.abq{border-left:3px solid var(--acc);background:var(--bqbg);border-radius:0 8px 8px 0;padding:11px 15px;margin:14px 0;font-style:italic;color:var(--tx2);font-size:14px;}
.astrong{color:var(--tx);font-weight:700;}
.acode{background:var(--cbg);border-radius:4px;padding:2px 6px;font-family:'JetBrains Mono','Fira Code',monospace;font-size:13px;color:var(--acc);}
.twrap{overflow-x:auto;margin:14px 0;border-radius:8px;border:1px solid var(--bd);}
.atbl{width:100%;border-collapse:collapse;font-size:13.5px;}
.ath{background:var(--th);color:#fff;padding:9px 13px;text-align:left;font-weight:600;font-size:12.5px;white-space:nowrap;}
.atd{padding:8px 13px;color:var(--tx2);border-bottom:1px solid var(--bd);line-height:1.5;}
tr:nth-child(even) .atd{background:var(--alt);}
tr:last-child .atd{border-bottom:none;}
.katex-display{overflow-x:auto;overflow-y:hidden;padding:4px 0;}
.katex{font-size:1.05em;}
.quiz-wrap{background:var(--surface);border:2px solid var(--acc);border-radius:12px;overflow:hidden;margin-bottom:22px;}
.quiz-head{background:var(--acc);color:#fff;padding:12px 18px;font-size:14px;font-weight:700;font-family:'Merriweather',serif;}
.quiz-q{padding:15px 18px;border-bottom:1px solid var(--bd);}
.quiz-q.q-ok{background:var(--ok-bg);}
.quiz-q.q-bad{background:var(--bad-bg);}
.q-text{font-size:14px;font-weight:600;color:var(--tx);margin-bottom:11px;line-height:1.5;display:flex;gap:8px;align-items:flex-start;}
.q-num{background:var(--acc);color:#fff;border-radius:50%;width:21px;height:21px;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;margin-top:1px;}
.q-opts{display:flex;flex-direction:column;gap:6px;}
.q-opt{display:flex;align-items:center;gap:9px;padding:8px 12px;border:1.5px solid var(--bd);border-radius:8px;cursor:pointer;font-size:13.5px;color:var(--tx2);background:var(--bg);transition:all .12s;line-height:1.4;}
.q-opt:hover{border-color:var(--acc);color:var(--tx);}
.q-opt input{display:none;}
.opt-ltr{width:21px;height:21px;border-radius:50%;background:var(--bd);color:var(--tx3);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex-shrink:0;transition:all .12s;}
.q-opt.opt-sel{border-color:var(--acc);background:var(--acc-l);}
.q-opt.opt-sel .opt-ltr{background:var(--acc);color:#fff;}
.q-opt.opt-ans{border-color:var(--ans-bd);background:var(--ans-bg);}
.q-opt.opt-ans .opt-ltr{background:var(--ans-bd);color:#fff;}
.q-exp{margin-top:9px;padding:9px 12px;border-radius:7px;font-size:13px;line-height:1.6;display:flex;gap:5px;align-items:flex-start;}
.exp-ok{background:var(--ok-bg);color:var(--ok-t);}
.exp-bad{background:var(--bad-bg);color:var(--bad-t);}
.quiz-foot{padding:13px 18px 15px;}
.btn-submit{width:100%;background:var(--acc);color:#fff;border:none;border-radius:8px;padding:11px;font-size:14px;font-weight:700;cursor:pointer;font-family:inherit;transition:opacity .15s;}
.btn-submit:not(.btn-off):hover{opacity:.88;}
.btn-off{opacity:.4;cursor:not-allowed;}
.quiz-res{display:flex;align-items:center;gap:12px;flex-wrap:wrap;}
.res-score{display:flex;align-items:baseline;gap:2px;}
.sc-n{font-size:34px;font-weight:800;font-family:'Merriweather',serif;color:var(--acc);}
.sc-s{font-size:18px;color:var(--tx3);}
.sc-t{font-size:18px;color:var(--tx3);font-weight:600;}
.res-msg{flex:1;font-size:14px;color:var(--tx2);font-weight:600;}
.btn-reset{background:transparent;border:1.5px solid var(--acc);color:var(--acc);border-radius:8px;padding:7px 15px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;}
.btn-reset:hover{background:var(--acc-l);}
.navrow{display:flex;gap:10px;}
.nav-btn{flex:1;display:flex;align-items:center;gap:9px;padding:13px 15px;background:var(--surface);border:1px solid var(--bd);border-radius:10px;cursor:pointer;font-family:inherit;color:var(--tx2);transition:all .15s;box-shadow:0 1px 2px rgba(0,0,0,.05);}
.nav-btn svg{width:17px;height:17px;flex-shrink:0;}
.nav-btn span{display:flex;flex-direction:column;gap:2px;}
.nav-btn:not(.nav-off):hover{border-color:var(--acc);color:var(--acc);transform:translateY(-1px);box-shadow:var(--sh);}
.nav-off{opacity:.3;cursor:not-allowed;}
.nav-lbl{font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;}
.nav-ti{font-size:12.5px;font-weight:500;line-height:1.3;}
.nav-next{justify-content:flex-end;text-align:right;}
.nav-next span{align-items:flex-end;}
`;
