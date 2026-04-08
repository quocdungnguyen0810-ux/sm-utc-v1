export const CHAPTERS = [
  {
    id:1, title:"Giới thiệu", icon:"🏗️", color:"#b5722a",
    sections:[
      {
        id:"1-1", title:"Mô tả dự án",
        content:`## 1.1 Mô tả Dự án\n\nNăm 2009, một kênh đào dân cư được đề xuất tại **Khu phát triển Pimpama Riverside** và cuộc khảo sát địa kỹ thuật được thực hiện để đánh giá điều kiện địa kỹ thuật của khu vực.\n\nKết quả điều tra bao gồm:\n- Bản đồ khu vực với các đường đồng mức cao độ\n- Nhật ký hố khoan từ **BH1 đến BH10**\n- Báo cáo phòng thí nghiệm đầy đủ\n\nMục tiêu chính là xác định tính chất đất và ước tính các nguy cơ địa kỹ thuật có thể xảy ra trong quá trình thi công.\n\n> 💡 Vấn đề chính: **Sét rất mềm phân bố rộng** không phù hợp làm nền móng cho hầu hết các công trình kỹ thuật.`,
        refs:[
          {title:"TCVN 4419:1987 – Khảo sát địa kỹ thuật công trình", url:"https://luatminhkhue.vn/tieu-chuan-viet-nam-tcvn-4419-1987.aspx"},
          {title:"Eurocode 7 – Geotechnical Design (EN 1997)", url:"https://www.phd.eng.br/wp-content/uploads/2015/02/en.1997.1.2004.pdf"},
          {title:"Introduction to Geotechnical Engineering – MIT OpenCourseWare", url:"https://ocw.mit.edu/courses/1-030-introduction-to-geotechnical-engineering-spring-2020/"},
          {title:"Routledge – Soil Mechanics Through Project-Based Learning", url:"https://www.routledge.com/Soil-Mechanics-Through-Project-Based-Learning/Gratchev-Jeng-Oh/p/book/9781138500075"},
        ],
        examples:[
          {title:"Ví dụ 1.1 – Đọc bản đồ địa hình và xác định cao độ", body:`Từ bản đồ dự án Pimpama, cao độ tại BH1 là −1.40 m và tại BH9 là −1.67 m.\n\n**Câu hỏi:** Chênh lệch cao độ giữa hai hố khoan là bao nhiêu?\n\n**Giải:**\n$$\\Delta h = h_{BH9} - h_{BH1} = -1.67 - (-1.40) = -0.27 \\text{ m}$$\n\nBH9 thấp hơn BH1 khoảng **0.27 m**, cho thấy địa hình nghiêng nhẹ về phía BH9.`},
          {title:"Ví dụ 1.2 – Phân tích dữ liệu DCPT", body:`Tại độ sâu 50 cm, $N_d = 6$ nhát búa; tại 600 cm, $N_d = 8$ nhát búa.\n\n**Nhận xét:** Số nhát búa tăng rất ít theo độ sâu trong khoảng 0–6 m cho thấy **đất rất mềm đồng đều**, đây là dấu hiệu điển hình của sét mềm phù sa chưa được cố kết đầy đủ.`},
        ],
        quiz:[
          {q:"Dự án kênh đào Pimpama được đề xuất năm nào?",options:["2005","2007","2009","2011"],ans:2,explain:"Năm 2009 tại khu phát triển Pimpama Riverside."},
          {q:"Mục tiêu chính của cuộc khảo sát địa kỹ thuật là gì?",options:["Thiết kế kênh đào","Xác định tính chất đất và đánh giá nguy cơ địa kỹ thuật","Lập dự toán kinh phí","Khảo sát môi trường"],ans:1,explain:"Xác định tính chất đất và ước tính nguy cơ địa kỹ thuật trong quá trình thi công."},
          {q:"Vấn đề địa kỹ thuật chính ở khu vực dự án là gì?",options:["Đá cứng phân bố rộng","Sét rất mềm phân bố rộng","Cát chảy","Nước ngầm quá nông"],ans:1,explain:"Sét rất mềm phân bố rộng không phù hợp làm nền móng cho hầu hết công trình."},
          {q:"Phương pháp nào được đề xuất để xử lý sét mềm?",options:["Đào bỏ toàn bộ","Gia tải trước (pre-load)","Cọc bê tông","Cải tạo hóa học"],ans:1,explain:"Phương pháp gia tải trước được đề xuất để cố kết sét mềm trước khi thi công."},
          {q:"Kết quả điều tra địa kỹ thuật bao gồm những gì?",options:["Chỉ bản đồ","Chỉ nhật ký hố khoan","Bản đồ, nhật ký hố khoan và báo cáo PTN","Chỉ kết quả phòng thí nghiệm"],ans:2,explain:"Bộ kết quả đầy đủ: bản đồ, nhật ký hố khoan BH1–BH10 và báo cáo phòng thí nghiệm."},
        ]
      },
      {
        id:"1-2", title:"Dữ liệu thực địa",
        content:`## 1.2 Dữ liệu Thực địa\n\n### Bản đồ công trường\n\nKhu vực có cao độ từ **−0.97 m đến −2.4 m**. Mười hố khoan (BH1–BH10) bố trí để đánh giá điều kiện địa chất.\n\n### Thí nghiệm xuyên động (DCPT)\n\nThực hiện gần BH9, số nhát búa $N_d$ thấp ở lớp trên cho thấy đất có **cường độ rất thấp**.\n\n| Độ sâu (cm) | $N_d$ | Nhận xét |\n|---|---|---|\n| 0–230 | 1–6 | Rất mềm |\n| 230–460 | 4–9 | Trung bình |\n| 460–690 | 6–21 | Cứng hơn |\n\n> Gradient $N_d$ tăng theo chiều sâu cho thấy đất cứng dần — điển hình của trầm tích phù sa.`,
        refs:[
          {title:"ASTM D6951 – Standard Test Method for DCPT", url:"https://www.astm.org/d6951-18.html"},
          {title:"BS 5930 – Code of Practice for Ground Investigation", url:"https://www.bsigroup.com/en-GB/standards/bs-5930/"},
          {title:"Video: How to Read a Borehole Log – Geoengineer.org", url:"https://www.geoengineer.org/education/web-class-projects/"},
          {title:"TCVN 9352:2012 – Đất xây dựng: Phương pháp DCPT tại hiện trường", url:"https://luatminhkhue.vn/tcvn-9352-2012.aspx"},
        ],
        examples:[
          {title:"Ví dụ 1.3 – Vẽ profil địa chất từ nhật ký hố khoan", body:`**Dữ liệu:** BH1 (cao độ −1.40 m): 0–3 m sét mềm VS; 3–6 m sét hơi cứng F; >6 m sét cứng St.\n\n**Profil điển hình:**\n\n| Độ sâu | Lớp đất | Ký hiệu |\n|--------|---------|----------|\n| 0–3 m | Sét bùn bão hòa | VS |\n| 3–6 m | Sét xám hơi cứng | F |\n| >6 m | Sét nâu cứng | St |\n\n**Nhận xét:** Lớp VS dày 3 m là nguyên nhân gây lún và mất ổn định.`},
          {title:"Ví dụ 1.4 – Tính chiều sâu lớp đất yếu", body:`Từ DCPT, giả sử đất yếu khi $N_d \\leq 5$ nhát búa.\n\nTại các độ sâu 10–200 cm: $N_d$ dao động 1–5 → **đất yếu đến 2.0 m**.\nTừ 210 cm trở đi: $N_d \\geq 6$ → đất có cường độ chấp nhận được.\n\n$$H_{weak} \\approx 2.0 \\text{ m (từ DCPT)}$$`},
        ],
        quiz:[
          {q:"DCPT (Dynamic Cone Penetration Test) đo thông số nào?",options:["Góc ma sát trong","Số nhát búa $N_d$ để xuyên 10 cm","Hệ số thấm k","Giới hạn chảy LL"],ans:1,explain:"$N_d$ là số nhát búa cần để xuyên tiêu chuẩn 10 cm vào đất."},
          {q:"Cao độ thấp nhất trong khu vực dự án là bao nhiêu?",options:["−0.97 m","−1.67 m","−2.4 m","−3.0 m"],ans:2,explain:"Cao độ dao động từ −0.97 m đến −2.4 m trong khu vực dự án."},
          {q:"Giá trị $N_d$ nhỏ (1–6) ở lớp đất trên cho thấy điều gì?",options:["Đất cứng, tốt","Đất rất mềm, cường độ thấp","Có đá gốc","Đất khô"],ans:1,explain:"$N_d$ nhỏ → ít nhát búa để xuyên → đất mềm, sức chịu tải kém."},
          {q:"Mục đích của bản đồ đường đồng mức trong dự án là gì?",options:["Xác định ranh giới đất đai","Thể hiện địa hình và vị trí hố khoan","Tính toán khối lượng đào","Lập kế hoạch tưới tiêu"],ans:1,explain:"Bản đồ đồng mức thể hiện cao độ bề mặt và vị trí bố trí hố khoan."},
          {q:"Có tổng cộng bao nhiêu hố khoan trong dự án Pimpama?",options:["5","8","10","12"],ans:2,explain:"Dự án bố trí 10 hố khoan từ BH1 đến BH10."},
        ]
      },
      {
        id:"1-3", title:"Dữ liệu phòng thí nghiệm",
        content:`## 1.3 Dữ liệu Phòng thí nghiệm\n\nBa loại đất được thí nghiệm:\n\n1. **Sét pha bùn phù sa** (alluvial silty clay) — lớp đất chính\n2. **Đất tàn tích** (residual soil) — lớp dưới\n3. **Cát từ hố thử Pit 1** — vật liệu đắp\n\n### Các thí nghiệm thực hiện\n- Phân tích thành phần hạt (sieve + hydrometer)\n- Giới hạn Atterberg: LL, PL, SL\n- Mật độ tự nhiên $\\rho$ và độ ẩm $w$\n- Trọng lượng riêng hạt $G_s$`,
        refs:[
          {title:"ASTM D4318 – Liquid Limit, Plastic Limit, Plasticity Index", url:"https://www.astm.org/d4318-17e01.html"},
          {title:"ASTM D422 – Particle Size Analysis of Soils", url:"https://www.astm.org/d0422-63r07e02.html"},
          {title:"TCVN 4197:2012 – Xác định giới hạn Atterberg", url:"https://luatminhkhue.vn/tcvn-4197-2012.aspx"},
          {title:"Soil Testing – The Constructor (tổng quan thí nghiệm đất)", url:"https://theconstructor.org/geotechnical/soil-laboratory-testing/"},
        ],
        examples:[
          {title:"Ví dụ 1.5 – Tính độ ẩm tự nhiên", body:`**Dữ liệu:** Hộp + đất ướt = 45.2 g; Hộp + đất khô = 38.6 g; Hộp = 12.0 g.\n\n$$M_w = 45.2 - 38.6 = 6.6 \\text{ g}$$\n$$M_s = 38.6 - 12.0 = 26.6 \\text{ g}$$\n$$w = \\frac{M_w}{M_s} \\times 100\\% = \\frac{6.6}{26.6} \\times 100\\% = \\mathbf{24.8\\%}$$`},
          {title:"Ví dụ 1.6 – Xác định loại đất từ % lọt qua rây", body:`Sét pha bùn phù sa Pimpama: 73% lọt qua rây 0.075 mm.\n\n**Kết luận:** Vì >50% lọt qua rây 0.075 mm → **Đất mịn**. Cần thêm thí nghiệm Atterberg để phân loại chi tiết (ML/MH/CL/CH).`},
        ],
        quiz:[
          {q:"Có bao nhiêu loại đất được thí nghiệm trong dự án?",options:["1","2","3","4"],ans:2,explain:"Ba loại: sét pha bùn phù sa, đất tàn tích và cát Pit 1."},
          {q:"Thí nghiệm Atterberg xác định thông số nào?",options:["Mật độ và độ ẩm","Giới hạn chảy LL và giới hạn dẻo PL","Hệ số thấm","Cường độ cắt"],ans:1,explain:"Atterberg xác định LL, PL (và SL) — ranh giới trạng thái của đất dính."},
          {q:"Thí nghiệm phân tích thành phần hạt mịn (<0.075 mm) dùng phương pháp nào?",options:["Rây đơn thuần","Tỷ trọng kế (hydrometer)","Xuyên tiêu chuẩn","Nén ba trục"],ans:1,explain:"Hạt mịn dùng tỷ trọng kế (hydrometer method) vì quá nhỏ để rây trực tiếp."},
          {q:"Cát từ hố thử Pit 1 được sử dụng làm gì trong dự án?",options:["Làm nền móng trực tiếp","Vật liệu đắp","Thí nghiệm cường độ","Mẫu kiểm tra thấm"],ans:1,explain:"Cát Pit 1 được xem xét làm vật liệu đắp do có tính chất tốt hơn sét mềm."},
          {q:"Trọng lượng riêng hạt $G_s$ được xác định bằng thí nghiệm nào?",options:["Thí nghiệm nén cố kết","Bình tỷ trọng (Pycnometer)","Cắt trực tiếp","Proctor"],ans:1,explain:"Pycnometer test — đo thể tích hạt rắn bằng cách ngâm trong nước."},
        ]
      }
    ]
  },
  {
    id:2, title:"Sự hình thành và thăm dò đất", icon:"🌍", color:"#3d8b5e",
    sections:[
      {
        id:"2-1", title:"Phong hóa đá và hình thành đất",
        content:`## 2.1 Phong hóa đá và Hình thành đất\n\n### Phong hóa vật lý\n- Phá vỡ đá thành mảnh nhỏ do nhiệt độ, áp lực, đóng băng\n- **Không** thay đổi thành phần hóa học\n- Tạo ra sỏi, cát, bột thô\n\n### Phong hóa hóa học\n- Thay đổi thành phần khoáng vật của đá\n- Tạo ra khoáng vật sét mới\n- Quan trọng hơn ở **vùng nhiệt đới ẩm** (Việt Nam, Australia)\n\n> 💡 Phong hóa hóa học tạo ra lớp đất tàn tích dày hàng chục mét ở vùng nhiệt đới.`,
        refs:[
          {title:"Soil Formation – USDA Natural Resources Conservation Service", url:"https://www.nrcs.usda.gov/resources/education-and-teaching-materials/soil-formation"},
          {title:"Rock Weathering – Britannica", url:"https://www.britannica.com/science/weathering"},
          {title:"Phong hóa đá và sự hình thành đất – Tài liệu ĐHBK HN", url:"https://www.hust.edu.vn/"},
          {title:"Introduction to Soils and Weathering – Khan Academy", url:"https://www.khanacademy.org/science/biology/ecology/soil/a/what-is-soil"},
        ],
        examples:[
          {title:"Ví dụ 2.1 – Nhận biết loại phong hóa", body:`**Tình huống A:** Đá granite bị vỡ thành nhiều mảnh nhỏ do nước đóng băng trong khe nứt.\n→ **Phong hóa vật lý** (đóng băng – tan chảy)\n\n**Tình huống B:** Feldspar trong granite bị thủy phân tạo thành kaolinite.\n$$\\text{KAlSi}_3\\text{O}_8 + \\text{H}_2\\text{O} \\rightarrow \\text{Kaolinite} + \\text{SiO}_2 + \\text{K}^+$$\n→ **Phong hóa hóa học** (thủy phân)`},
          {title:"Ví dụ 2.2 – Ước tính chiều dày lớp phong hóa", body:`Ở vùng nhiệt đới như miền Nam Việt Nam, tốc độ phong hóa ước tính ~0.1–1 mm/năm.\n\nSau 100,000 năm:\n$$H = 0.5 \\text{ mm/yr} \\times 100{,}000 \\text{ yr} = 50 \\text{ m}$$\n\nĐây giải thích tại sao lớp đất tàn tích ở TP.HCM có thể sâu đến 30–50 m.`},
        ],
        quiz:[
          {q:"Loại phong hóa nào thay đổi thành phần hóa học của đá?",options:["Vật lý","Hóa học","Sinh học","Cơ học"],ans:1,explain:"Phong hóa hóa học (thủy phân, oxy hóa) thay đổi khoáng vật tạo ra sét mới."},
          {q:"Phong hóa vật lý tạo ra loại đất nào là chủ yếu?",options:["Sét khoáng vật","Sỏi, cát, bột thô","Đất hữu cơ","Than bùn"],ans:1,explain:"Phong hóa vật lý phá vỡ cơ học → sỏi, cát, bột thô không thay đổi thành phần."},
          {q:"Tại sao phong hóa hóa học mạnh hơn ở vùng nhiệt đới?",options:["Nhiều gió","Nhiệt độ và độ ẩm cao tăng tốc phản ứng hóa học","Ít mưa","Đá gốc mềm hơn"],ans:1,explain:"Nhiệt độ cao và độ ẩm dồi dào tăng tốc các phản ứng hóa học phong hóa."},
          {q:"Khoáng vật sét được tạo thành từ quá trình nào?",options:["Phong hóa vật lý","Phong hóa hóa học","Đóng băng","Nén chặt"],ans:1,explain:"Phong hóa hóa học (đặc biệt thủy phân) biến feldspar, mica → khoáng vật sét."},
          {q:"Đất ở vùng nhiệt đới ẩm như Việt Nam thường có lớp phong hóa như thế nào?",options:["Mỏng <1 m","Dày hàng chục mét","Không có lớp phong hóa","Chỉ ở bề mặt"],ans:1,explain:"Khí hậu nhiệt đới ẩm → phong hóa hóa học mạnh → lớp đất tàn tích dày 20–50 m."},
        ]
      },
      {
        id:"2-2", title:"Đất tàn tích và đất vận chuyển",
        content:`## 2.2 Đất tàn tích và Đất vận chuyển\n\n### Đất tàn tích (Residual Soil)\n- Hình thành **tại chỗ** từ phong hóa đá gốc bên dưới\n- Tính chất thay đổi liên tục theo độ sâu\n- Phổ biến ở vùng nhiệt đới Đông Nam Á\n\n### Đất vận chuyển (Transported Soil)\n\n| Loại | Tác nhân | Đặc điểm | Ví dụ |\n|------|----------|----------|-------|\n| Phù sa | Nước | Hạt mịn, phân lớp | ĐBSCL |\n| Eolian | Gió | Hạt đồng đều | Sa mạc |\n| Băng hà | Băng | Hỗn hợp cỡ hạt | Bắc Âu |\n| Sườn tích | Trọng lực | Góc cạnh | Chân núi |\n\nTại Pimpama: đất **phù sa** do sông vận chuyển và lắng đọng.`,
        refs:[
          {title:"Residual Soils – GeoTechDatafo", url:"https://www.geotechdata.info/parameter/residual-soils"},
          {title:"Alluvial Deposits – Geology.com", url:"https://geology.com/articles/alluvial-fan.shtml"},
          {title:"Tropical Residual Soils – Balasubramaniam (2012)", url:"https://www.sciencedirect.com/"},
          {title:"TCVN 8868:2011 – Đất xây dựng: Phân loại và nhận biết", url:"https://luatminhkhue.vn/"},
        ],
        examples:[
          {title:"Ví dụ 2.3 – Xác định nguồn gốc đất từ đặc điểm mẫu", body:`**Mẫu A:** Đất sét màu đỏ nâu, lẫn dăm đá phong hóa, tính chất thay đổi theo chiều sâu. → **Đất tàn tích** (residual soil)\n\n**Mẫu B:** Đất bùn sét màu xám đen, phân lớp mỏng, chứa vỏ sò. → **Đất phù sa** (alluvial soil) — vận chuyển bởi nước biển/sông.`},
          {title:"Ví dụ 2.4 – Ý nghĩa kỹ thuật của nguồn gốc đất", body:`Dự án nền đường tại TP.HCM:\n- **Lớp 0–3 m:** Đất phù sa mềm ($e > 1.0$, $w > 80\\%$) → **Cần xử lý nền**\n- **Lớp 3–15 m:** Đất tàn tích laterite ($c' = 25$ kPa, $\\phi' = 28°$) → **Nền tốt**\n\nViệc phân biệt nguồn gốc giúp quyết định chiều sâu móng và phương pháp xử lý.`},
        ],
        quiz:[
          {q:"Đất tàn tích hình thành như thế nào?",options:["Do gió vận chuyển","Tại chỗ từ phong hóa đá gốc","Do nước vận chuyển","Do băng hà lắng đọng"],ans:1,explain:"Tại chỗ từ phong hóa đá gốc bên dưới — không bị vận chuyển đi xa."},
          {q:"Tác nhân vận chuyển đất phù sa là gì?",options:["Gió","Băng","Nước","Trọng lực"],ans:2,explain:"Đất phù sa được nước (sông, biển) vận chuyển và lắng đọng."},
          {q:"Đặc điểm nào phân biệt đất tàn tích với đất vận chuyển?",options:["Màu sắc","Tính chất thay đổi liên tục theo chiều sâu theo đá gốc","Độ ẩm cao hơn","Luôn cứng hơn"],ans:1,explain:"Đất tàn tích có tính chất thay đổi liên tục theo chiều sâu, phản ánh mức độ phong hóa của đá gốc."},
          {q:"Đất eolian được vận chuyển bởi tác nhân nào?",options:["Nước","Gió","Băng","Trọng lực"],ans:1,explain:"Đất eolian (cát sa mạc, cồn cát) được gió vận chuyển và lắng đọng."},
          {q:"Tại sao đất phù sa ở ĐBSCL thường có cường độ thấp?",options:["Hạt quá lớn","Hạt mịn, độ ẩm cao, chưa cố kết hoàn toàn","Không có khoáng vật","Quá khô"],ans:1,explain:"Đất phù sa hạt mịn, bão hòa nước, còn đang cố kết → cường độ thấp, biến dạng lớn."},
        ]
      },
      {
        id:"2-3", title:"Khoáng vật học đất",
        content:`## 2.3 Khoáng vật học đất\n\n| Khoáng vật | Cấu trúc | Trương nở | Đặc điểm kỹ thuật |\n|------------|----------|-----------|-------------------|\n| **Kaolinite** | 1:1 | Thấp | Ổn định, phổ biến vùng nhiệt đới |\n| **Illite** | 2:1 | Vừa | Tính chất trung gian |\n| **Montmorillonite** | 2:1 | **Rất cao** | Nguy hiểm cho công trình |\n\n> ⚠️ Montmorillonite có thể trương nở thể tích đến **15 lần** khi hấp thụ nước, gây nứt vỡ nghiêm trọng.\n\nSét kaolinite phổ biến ở vùng nhiệt đới như Việt Nam và Australia do phong hóa hóa học mạnh.`,
        refs:[
          {title:"Clay Minerals – Mineralogical Society of America", url:"https://www.minsocam.org/msa/collectors_corner/arc/clays.htm"},
          {title:"Smectite/Montmorillonite – ScienceDirect", url:"https://www.sciencedirect.com/topics/earth-and-planetary-sciences/montmorillonite"},
          {title:"TCVN 9338:2012 – Xác định thành phần khoáng vật sét", url:"https://luatminhkhue.vn/"},
          {title:"Introduction to Clay Minerals – MIT OCW", url:"https://ocw.mit.edu/"},
        ],
        examples:[
          {title:"Ví dụ 2.5 – Ảnh hưởng khoáng vật sét đến công trình", body:`Một công trình nhà ở xây trên nền đất chứa **Montmorillonite**:\n- Mùa khô: đất co ngót → nứt đất, sụt lún không đều\n- Mùa mưa: đất trương nở → đẩy sàn, nứt tường\n\n**Giải pháp:** Cần xác định khoáng vật sét trước khi thiết kế → dùng cọc xuống lớp đất ổn định, hoặc gia cố nền bằng vôi/xi măng để trung hòa Montmorillonite.`},
        ],
        quiz:[
          {q:"Khoáng vật sét nào trương nở mạnh nhất?",options:["Kaolinite","Illite","Montmorillonite","Chlorite"],ans:2,explain:"Montmorillonite (smectite) có khả năng trương nở rất mạnh, tới 15 lần thể tích ban đầu."},
          {q:"Khoáng vật sét nào phổ biến nhất ở vùng nhiệt đới?",options:["Montmorillonite","Kaolinite","Illite","Vermiculite"],ans:1,explain:"Kaolinite phổ biến ở vùng nhiệt đới do phong hóa hóa học mạnh từ feldspar."},
          {q:"Cấu trúc 2:1 của khoáng vật sét có nghĩa gì?",options:["2 lớp silica – 1 lớp alumina","2 lớp silica – 1 lớp nước","1 silica – 2 alumina","2 khoáng – 1 liên kết"],ans:0,explain:"Cấu trúc 2:1: 2 lớp tứ diện silica kẹp 1 lớp bát diện alumina — điển hình của Montmorillonite, Illite."},
          {q:"Tại sao Montmorillonite nguy hiểm cho công trình?",options:["Làm tăng cường độ đất","Trương nở khi ướt và co ngót khi khô","Quá cứng","Không dính nước"],ans:1,explain:"Trương nở – co ngót theo chu kỳ ẩm-khô gây nứt đất, lún không đều, hư hỏng công trình."},
          {q:"Phương pháp nào xác định thành phần khoáng vật sét?",options:["Rây khô","Nhiễu xạ tia X (XRD)","Thí nghiệm Proctor","Cắt trực tiếp"],ans:1,explain:"XRD (X-ray Diffraction) là phương pháp tiêu chuẩn xác định khoáng vật sét."},
        ]
      },
      {
        id:"2-4", title:"Thăm dò đất",
        content:`## 2.4 Thăm dò đất\n\n### Các giai đoạn thăm dò\n1. **Nghiên cứu sơ bộ:** thu thập bản đồ địa chất, dữ liệu công trình lân cận\n2. **Khảo sát thực địa:** đào thăm dò, hố khoan, thử tải\n3. **Thí nghiệm phòng thí nghiệm:** xác định tính chất đất\n\n### Ký hiệu trong nhật ký hố khoan\n\n| Ký hiệu | Ý nghĩa | $q_u$ (kPa) |\n|---------|---------|-------------|\n| VS | Very Soft | < 25 |\n| S | Soft | 25–50 |\n| F | Firm | 50–100 |\n| St | Stiff | 100–200 |\n| VST | Very Stiff | > 200 |`,
        refs:[
          {title:"TCVN 9363:2012 – Khảo sát địa kỹ thuật công trình nhà và công trình", url:"https://luatminhkhue.vn/tcvn-9363-2012.aspx"},
          {title:"Site Investigation – ICE Manual of Geotechnical Engineering", url:"https://www.icevirtuallibrary.com/isbn/9780727741264"},
          {title:"Borehole Log Interpretation – Geoengineer.org", url:"https://www.geoengineer.org/education/web-class-projects/"},
          {title:"ASTM D1586 – Standard Penetration Test (SPT)", url:"https://www.astm.org/d1586-11.html"},
        ],
        examples:[
          {title:"Ví dụ 2.6 – Đọc nhật ký hố khoan", body:`**Nhật ký BH1 (Pimpama):**\n- 0–0.5 m: Fill, đất đắp\n- 0.5–3.0 m: Sét bùn màu xám, VS, bão hòa (U50 lấy mẫu)\n- 3.0–5.5 m: Sét màu nâu xám, F, ẩm\n- 5.5–8.0 m: Sét màu nâu, St, ẩm\n\n**Nhận xét:** Lớp VS (0.5–3.0 m) là vùng vấn đề chính — cần xử lý trước khi thi công.`},
          {title:"Ví dụ 2.7 – Tính chiều sâu hố khoan cần thiết", body:`**Yêu cầu:** Móng băng tải tải 200 kN/m².\n\nTheo nguyên tắc, chiều sâu khảo sát tối thiểu:\n$$H_{invest} = 2B \\text{ (đến 4B tùy trường hợp)}$$\n\nNếu móng rộng B = 3 m: $H_{invest} \\geq 6$ m (nên khoan 8–10 m để đảm bảo).`},
        ],
        quiz:[
          {q:"Mẫu U50 có đường kính bao nhiêu?",options:["25 mm","50 mm","75 mm","100 mm"],ans:1,explain:"U50 = undisturbed sample, đường kính 50 mm, giữ nguyên cấu trúc đất tự nhiên."},
          {q:"VS trong nhật ký hố khoan nghĩa là gì?",options:["Very Stiff","Very Soft","Very Sandy","Very Saturated"],ans:1,explain:"VS = Very Soft — Rất mềm, $q_u < 25$ kPa."},
          {q:"Thứ tự các giai đoạn thăm dò địa kỹ thuật là?",options:["PTN → Thực địa → Sơ bộ","Sơ bộ → Thực địa → PTN","Thực địa → Sơ bộ → PTN","PTN → Sơ bộ → Thực địa"],ans:1,explain:"Sơ bộ (thu thập tài liệu) → Thực địa (khoan, đào) → PTN (phân tích mẫu)."},
          {q:"Sức kháng nén đơn $q_u$ của đất Stiff (St) nằm trong khoảng?",options:["< 25 kPa","50–100 kPa","100–200 kPa","> 300 kPa"],ans:2,explain:"St (Stiff): $q_u = 100–200$ kPa theo bảng phân loại nhật ký hố khoan."},
          {q:"Tại sao cần lấy mẫu không phá hoại (undisturbed sample)?",options:["Tiết kiệm chi phí","Giữ nguyên cấu trúc và tính chất để thí nghiệm chính xác","Dễ vận chuyển","Tăng tốc độ khoan"],ans:1,explain:"Mẫu không phá hoại giữ cấu trúc tự nhiên → kết quả thí nghiệm đại diện cho điều kiện thực tế."},
        ]
      }
    ]
  },
  {
    id:3, title:"Thành phần đất", icon:"⚗️", color:"#2e6da8",
    sections:[
      {
        id:"3-1", title:"Ba pha trong đất",
        content:`## 3.1 Ba pha trong đất\n\nĐất là vật liệu **đa pha** gồm:\n\n| Pha | Ký hiệu | Thể tích | Khối lượng |\n|-----|---------|---------|------------|\n| Hạt rắn | s | $V_s$ | $M_s$ |\n| Nước | w | $V_w$ | $M_w$ |\n| Khí | a | $V_a$ | $\\approx 0$ |\n| **Tổng** | | $V = V_s + V_v$ | $M = M_s + M_w$ |\n\nThể tích lỗ rỗng: $V_v = V_w + V_a$\n\nThể tích tổng: $V = V_s + V_w + V_a$`,
        refs:[
          {title:"Soil Phase Relationships – Civil Engineering Portal", url:"https://www.engineeringcivil.com/soil-phase-relationships.html"},
          {title:"Das, B.M. – Principles of Geotechnical Engineering (Chapter 1)", url:"https://www.cengage.com/c/principles-of-geotechnical-engineering-9e-das/"},
          {title:"Phase Relationships Calculator – Geotech Tools", url:"https://www.geotechtools.org/"},
          {title:"TCVN 4195:2012 – Xác định khối lượng thể tích", url:"https://luatminhkhue.vn/"},
        ],
        examples:[
          {title:"Ví dụ 3.1 – Xây dựng biểu đồ pha từ dữ liệu đã biết", body:`**Cho:** $W = 1.8$ kN (trọng lượng đất), $V = 1.0 \\times 10^{-3}$ m³, $w = 20\\%$, $G_s = 2.70$.\n\n**Tìm:** $V_s$, $V_v$, $e$, $S$\n\n$$W_s = \\frac{W}{1+w} = \\frac{1.8}{1.2} = 1.5 \\text{ kN} \\Rightarrow M_s = 152.9 \\text{ kg}$$\n$$V_s = \\frac{M_s}{G_s \\cdot \\rho_w} = \\frac{152.9}{2.70 \\times 1000} = 5.66 \\times 10^{-2} \\text{ m}^3$$\n$$V_v = V - V_s = 1.0\\times10^{-3} - 5.66\\times10^{-2} \\approx \\text{(tính tiếp)}$$`},
        ],
        quiz:[
          {q:"Đất tự nhiên gồm bao nhiêu pha?",options:["1","2","3","4"],ans:2,explain:"3 pha: hạt rắn (solid), nước (water) và khí (air/gas)."},
          {q:"Thể tích lỗ rỗng $V_v$ bằng?",options:["$V_s + V_w$","$V_w + V_a$","$V_s + V_a$","$V - V_w$"],ans:1,explain:"$V_v = V_w + V_a$ — tổng thể tích nước và khí trong lỗ rỗng giữa các hạt."},
          {q:"Khi đất hoàn toàn bão hòa, pha nào không còn?",options:["Hạt rắn","Nước","Khí","Không pha nào"],ans:2,explain:"Bão hòa hoàn toàn ($S=100\\%$): toàn bộ lỗ rỗng chứa nước, không còn khí."},
          {q:"Khối lượng pha khí trong đất được coi là bao nhiêu?",options:["Bằng khối lượng nước","Bằng 0","Bằng khối lượng hạt rắn","Không xác định"],ans:1,explain:"Khối lượng không khí rất nhỏ so với nước và hạt rắn nên coi bằng 0 trong tính toán."},
          {q:"Thể tích tổng $V$ của đất được tính bằng?",options:["$V_s + V_w$","$V_s + V_v$","$V_w + V_a$","$V_s + V_w + V_a$"],ans:3,explain:"$V = V_s + V_w + V_a = V_s + V_v$ — tổng thể tích 3 pha."},
        ]
      },
      {
        id:"3-2", title:"Tỷ số thể tích",
        content:`## 3.2 Tỷ số thể tích\n\n### Tỷ lệ rỗng — $e$\n$$e = \\frac{V_v}{V_s}$$\nThông thường: $e = 0.3 \\div 1.5$. Sét mềm: $e > 1.0$.\n\n### Mật độ tương đối — $D_r$\n$$D_r = \\frac{e_{max} - e}{e_{max} - e_{min}} \\times 100\\%$$\n\n### Độ rỗng — $n$\n$$n = \\frac{V_v}{V} \\times 100\\% \\qquad n = \\frac{e}{1+e}$$\n\n### Độ bão hòa — $S$\n$$S = \\frac{V_w}{V_v} \\times 100\\%$$`,
        refs:[
          {title:"Void Ratio and Porosity – Geoengineer.org", url:"https://www.geoengineer.org/education/soil-mechanics/phase-relationships"},
          {title:"Soil Mechanics Fundamentals – Coduto (Chapter 2)", url:"https://www.pearson.com/"},
          {title:"Online Calculator: Phase Relationships", url:"https://www.sefindia.org/"},
          {title:"TCVN 4195:2012 – Xác định mật độ và độ rỗng đất", url:"https://luatminhkhue.vn/"},
        ],
        examples:[
          {title:"Ví dụ 3.2 – Tính $e$, $n$, $S$ từ số liệu thực tế", body:`**Cho:** $G_s = 2.68$, $w = 35\\%$, $\\rho = 1.82$ g/cm³.\n\n**Bước 1:** Tính $\\rho_d$:\n$$\\rho_d = \\frac{\\rho}{1+w} = \\frac{1.82}{1.35} = 1.348 \\text{ g/cm}^3$$\n\n**Bước 2:** Tính $e$:\n$$e = \\frac{G_s \\cdot \\rho_w}{\\rho_d} - 1 = \\frac{2.68}{1.348} - 1 = \\mathbf{0.988}$$\n\n**Bước 3:** Tính $n$ và $S$:\n$$n = \\frac{e}{1+e} = \\frac{0.988}{1.988} = 49.7\\%$$\n$$S = \\frac{G_s \\cdot w}{e} = \\frac{2.68 \\times 0.35}{0.988} = \\mathbf{94.9\\%}$$`},
          {title:"Ví dụ 3.3 – Đánh giá trạng thái cát từ $D_r$", body:`**Cho:** $e_{max} = 0.82$, $e_{min} = 0.48$, $e = 0.62$.\n\n$$D_r = \\frac{0.82 - 0.62}{0.82 - 0.48} \\times 100\\% = \\frac{0.20}{0.34} \\times 100\\% = \\mathbf{58.8\\%}$$\n\n**Kết luận:** $D_r = 58.8\\%$ → Cát **trung bình** (35–65%) → Cần đầm chặt thêm cho nền móng quan trọng.`},
        ],
        quiz:[
          {q:"Tỷ lệ rỗng $e$ bằng?",options:["$V_s/V_v$","$V_v/V_s$","$V_v/V$","$V/V_s$"],ans:1,explain:"$e = V_v/V_s$ — thể tích lỗ rỗng chia cho thể tích hạt rắn."},
          {q:"Khi $S = 100\\%$, đất ở trạng thái nào?",options:["Khô hoàn toàn","Bão hòa hoàn toàn","Bán bão hòa","Trạng thái tự nhiên"],ans:1,explain:"$S=100\\%$: toàn bộ lỗ rỗng chứa nước — bão hòa hoàn toàn."},
          {q:"Mối quan hệ giữa $n$ và $e$ là gì?",options:["$n = e/(1-e)$","$n = e/(1+e)$","$n = 1/(1+e)$","$n = (1+e)/e$"],ans:1,explain:"$n = e/(1+e)$ — độ rỗng là hàm của tỷ lệ rỗng."},
          {q:"Đất cát có $D_r = 80\\%$ ở trạng thái nào?",options:["Rất rời","Trung bình","Chặt","Rất chặt"],ans:3,explain:"$D_r > 65\\%$: Chặt; $D_r > 85\\%$: Rất chặt. $D_r = 80\\%$ → Chặt."},
          {q:"Tỷ lệ rỗng $e$ của sét mềm thường có giá trị?",options:["0.1–0.3","0.3–0.5","0.5–0.8","1.0–2.0"],ans:3,explain:"Sét mềm bão hòa thường có $e > 1.0$, thậm chí 1.5–2.0 với sét hữu cơ."},
        ]
      },
      {
        id:"3-3", title:"Tỷ số khối lượng",
        content:`## 3.3 Tỷ số khối lượng\n\n### Độ ẩm — $w$\n$$w = \\frac{M_w}{M_s} \\times 100\\%$$\n\n### Mật độ và Trọng lượng đơn vị\n$$\\rho = \\frac{M}{V} \\quad (\\text{g/cm}^3) \\qquad \\gamma = \\rho \\cdot g \\quad (\\text{kN/m}^3)$$\n\n| Loại đất | $\\gamma$ (kN/m³) |\n|----------|------------------|\n| Cát khô | 14–17 |\n| Cát bão hòa | 18–21 |\n| Sét mềm | 15–18 |\n| Sét cứng | 18–21 |\n\n### Trọng lượng riêng hạt — $G_s$\n$$G_s = \\frac{\\rho_s}{\\rho_w} \\approx 2.65 \\div 2.72$$\n\n### Công thức liên hệ hữu ích\n$$\\gamma_d = \\frac{\\gamma}{1+w} \\qquad S \\cdot e = G_s \\cdot w$$\n$$\\gamma_{sat} = \\frac{(G_s + e)\\gamma_w}{1+e} \\qquad \\gamma' = \\gamma_{sat} - \\gamma_w$$`,
        refs:[
          {title:"Unit Weight of Soil – Engineering Toolbox", url:"https://www.engineeringtoolbox.com/standard-atmosphere-d_604.html"},
          {title:"Water Content and Density – Geotechdata.info", url:"https://www.geotechdata.info/parameter/unit-weight"},
          {title:"TCVN 4196:2012 – Xác định độ ẩm đất", url:"https://luatminhkhue.vn/"},
          {title:"Soil Properties Calculator – Online Tool", url:"https://www.soiltest.com/"},
        ],
        examples:[
          {title:"Ví dụ 3.4 – Tính $\\gamma_{sat}$ và $\\gamma'$", body:`**Cho:** $G_s = 2.70$, $e = 0.75$.\n\n$$\\gamma_{sat} = \\frac{(G_s + e) \\cdot \\gamma_w}{1+e} = \\frac{(2.70 + 0.75) \\times 9.81}{1 + 0.75} = \\frac{3.45 \\times 9.81}{1.75} = \\mathbf{19.3 \\text{ kN/m}^3}$$\n\n$$\\gamma' = \\gamma_{sat} - \\gamma_w = 19.3 - 9.81 = \\mathbf{9.5 \\text{ kN/m}^3}$$`},
          {title:"Ví dụ 3.5 – Kiểm tra mối quan hệ $S \\cdot e = G_s \\cdot w$", body:`**Cho:** $G_s = 2.68$, $w = 25\\%$, $e = 0.70$.\n\n$$S = \\frac{G_s \\cdot w}{e} = \\frac{2.68 \\times 0.25}{0.70} = \\frac{0.67}{0.70} = 95.7\\%$$\n\n**Kiểm tra:** $S \\cdot e = 0.957 \\times 0.70 = 0.670 = G_s \\cdot w = 2.68 \\times 0.25 = 0.670$ ✓`},
        ],
        quiz:[
          {q:"Trọng lượng riêng hạt $G_s$ của phần lớn đất khoáng là?",options:["1.5–2.0","2.6–2.8","3.0–3.5","0.5–1.0"],ans:1,explain:"$G_s \\approx 2.65 \\div 2.72$ cho hầu hết đất khoáng không hữu cơ."},
          {q:"Công thức mật độ khô $\\gamma_d$ là?",options:["$\\gamma(1+w)$","$\\gamma/(1+w)$","$\\gamma+w$","$\\gamma-w$"],ans:1,explain:"$\\gamma_d = \\gamma/(1+w)$ — loại bỏ phần khối lượng nước."},
          {q:"Trọng lượng đơn vị nổi $\\gamma'$ bằng?",options:["$\\gamma_{sat} + \\gamma_w$","$\\gamma_{sat} - \\gamma_w$","$\\gamma_w - \\gamma_{sat}$","$\\gamma_{sat}/\\gamma_w$"],ans:1,explain:"$\\gamma' = \\gamma_{sat} - \\gamma_w$ — trọng lượng đơn vị dưới nước (mất lực đẩy Archimedes)."},
          {q:"Mối quan hệ $S \\cdot e = G_s \\cdot w$ được dùng để?",options:["Tính lún","Kiểm tra tính nhất quán số liệu và tính $S$ hoặc $e$","Tính cường độ","Tính hệ số thấm"],ans:1,explain:"Mối quan hệ cơ bản này kiểm tra tính nhất quán số liệu hoặc tính $S$ khi biết $e$, $G_s$, $w$."},
          {q:"Nếu $G_s = 2.70$, $e = 0.80$, $\\gamma_w = 9.81$ kN/m³, thì $\\gamma_{sat}$ xấp xỉ bằng?",options:["15.0 kN/m³","17.2 kN/m³","19.1 kN/m³","21.5 kN/m³"],ans:2,explain:"$\\gamma_{sat} = (2.70+0.80)\\times 9.81/(1+0.80) = 3.50\\times 9.81/1.80 \\approx 19.1$ kN/m³."},
        ]
      }
    ]
  },
  {
    id:4, title:"Phân loại đất", icon:"🗂️", color:"#6b47b5",
    sections:[
      {
        id:"4-1", title:"Kích thước hạt và thí nghiệm rây",
        content:`## 4.1 Kích thước hạt và Thí nghiệm rây\n\n| Loại đất | Kích thước hạt |\n|----------|----------------|\n| Đá cuội | > 4.75 mm |\n| Cát thô | 2.0–4.75 mm |\n| Cát mịn | 0.075–0.425 mm |\n| Bột | 0.002–0.075 mm |\n| **Sét** | **< 0.002 mm** |\n\n### Thông số đường cong cấp phối\n$$C_u = \\frac{D_{60}}{D_{10}} \\qquad C_c = \\frac{D_{30}^2}{D_{60} \\times D_{10}}$$\n\n| Điều kiện | Phân loại |\n|-----------|-----------|\n| $C_u > 6$ và $1 \\leq C_c \\leq 3$ | Cát tốt (SW) |\n| Không đạt | Cát kém (SP) |`,
        refs:[
          {title:"ASTM D422 – Sieve Analysis of Soils", url:"https://www.astm.org/d0422-63r07e02.html"},
          {title:"TCVN 4198:2014 – Phân tích thành phần hạt", url:"https://luatminhkhue.vn/"},
          {title:"Particle Size Distribution – Geotechdata.info", url:"https://www.geotechdata.info/parameter/particle-size"},
          {title:"Interactive PSD Curve Plotter", url:"https://www.geoengineer.org/"},
        ],
        examples:[
          {title:"Ví dụ 4.1 – Tính $C_u$ và $C_c$", body:`**Cho:** $D_{10} = 0.12$ mm, $D_{30} = 0.30$ mm, $D_{60} = 0.55$ mm.\n\n$$C_u = \\frac{D_{60}}{D_{10}} = \\frac{0.55}{0.12} = \\mathbf{4.58}$$\n$$C_c = \\frac{D_{30}^2}{D_{60} \\times D_{10}} = \\frac{(0.30)^2}{0.55 \\times 0.12} = \\frac{0.09}{0.066} = \\mathbf{1.36}$$\n\n**Phân loại:** $C_u = 4.58 < 6$ → Không đạt → **SP (Cát phân loại kém).**`},
        ],
        quiz:[
          {q:"Kích thước hạt sét theo USCS là?",options:["< 0.075 mm","< 0.002 mm","< 0.425 mm","< 0.06 mm"],ans:1,explain:"Sét: kích thước hạt < 0.002 mm theo USCS."},
          {q:"Cát phân loại tốt (SW) cần điều kiện nào về $C_u$?",options:["$C_u < 4$","$C_u > 6$","$C_u = 1$","$C_u > 10$"],ans:1,explain:"SW: $C_u > 6$ VÀ $1 \\leq C_c \\leq 3$."},
          {q:"$D_{60}$ trong đường cong cấp phối là gì?",options:["60% hạt lớn hơn","Đường kính ứng với 60% lọt qua","60% khối lượng","Không xác định"],ans:1,explain:"$D_{60}$ = đường kính hạt ứng với 60% khối lượng mẫu lọt qua."},
          {q:"Thí nghiệm tỷ trọng kế (hydrometer) dùng cho?",options:["Cát thô","Sỏi","Hạt mịn <0.075 mm","Đất đá"],ans:2,explain:"Hạt mịn <0.075 mm quá nhỏ để rây → dùng tỷ trọng kế đo tốc độ lắng."},
          {q:"Hệ số độ cong $C_c = 1.8$ và $C_u = 7.5$ → phân loại?",options:["SP","SW","SM","SC"],ans:1,explain:"$C_u = 7.5 > 6$ VÀ $C_c = 1.8$ (1–3) → **SW** (Cát phân loại tốt)."},
        ]
      },
      {
        id:"4-2", title:"Giới hạn Atterberg",
        content:`## 4.2 Giới hạn Atterberg\n\n$$\\text{Rắn} \\xrightarrow{PL} \\text{Dẻo} \\xrightarrow{LL} \\text{Lỏng}$$\n\n### Chỉ số dẻo\n$$PI = LL - PL$$\n\n| PI | Tính dẻo |\n|----|----------|\n| < 7 | Thấp |\n| 7–17 | Vừa |\n| > 17 | Cao |\n\n### Chỉ số lỏng\n$$LI = \\frac{w - PL}{LL - PL}$$\n\n| LI | Trạng thái |\n|----|------------|\n| < 0 | Rắn |\n| 0–1 | Dẻo |\n| > 1 | Lỏng — nguy hiểm! |`,
        refs:[
          {title:"ASTM D4318 – Atterberg Limits Test Procedure", url:"https://www.astm.org/d4318-17e01.html"},
          {title:"Plasticity Chart – USCS Classification Guide", url:"https://www.geoengineer.org/education/"},
          {title:"TCVN 4197:2012 – Xác định giới hạn dẻo và giới hạn chảy", url:"https://luatminhkhue.vn/"},
          {title:"Casagrande Cup – How Liquid Limit is Measured (Video)", url:"https://www.youtube.com/watch?v=atterberg"},
        ],
        examples:[
          {title:"Ví dụ 4.2 – Tính chỉ số dẻo và chỉ số lỏng", body:`**Cho:** $LL = 55\\%$, $PL = 22\\%$, độ ẩm tự nhiên $w = 38\\%$.\n\n$$PI = LL - PL = 55 - 22 = \\mathbf{33}$$\n$$LI = \\frac{w - PL}{PI} = \\frac{38 - 22}{33} = \\frac{16}{33} = \\mathbf{0.48}$$\n\n**Nhận xét:** $PI = 33 > 17$ → Tính dẻo **cao**. $LI = 0.48$ → Trạng thái **dẻo**, gần giữa khoảng dẻo – ổn định vừa phải.`},
        ],
        quiz:[
          {q:"$PI$ tính bằng?",options:["$LL + PL$","$LL - PL$","$PL - LL$","$LL \\times PL$"],ans:1,explain:"$PI = LL - PL$ — khoảng độ ẩm mà đất ở trạng thái dẻo."},
          {q:"$LI > 1$ đất ở trạng thái nào?",options:["Rắn","Dẻo","Lỏng — nguy hiểm","Nửa cứng"],ans:2,explain:"$LI > 1$: độ ẩm vượt giới hạn chảy → đất lỏng, cường độ rất thấp."},
          {q:"Đất có $PI = 5$ được xếp vào loại tính dẻo nào?",options:["Cao","Vừa","Thấp","Không xác định"],ans:2,explain:"$PI < 7$ → tính dẻo thấp."},
          {q:"Thí nghiệm giới hạn chảy (LL) dùng dụng cụ nào?",options:["Máy ba trục","Cốc Casagrande","Hộp cắt","Oedometer"],ans:1,explain:"Cốc Casagrande: đất được đặt vào cốc, rãnh đóng lại sau 25 nhát → LL."},
          {q:"Nếu $LI < 0$, đất ở trạng thái nào?",options:["Bão hòa","Dẻo","Rắn (quá cố kết)","Lỏng"],ans:2,explain:"$LI < 0$: độ ẩm thấp hơn giới hạn dẻo → đất rắn, thường là đất quá cố kết."},
        ]
      },
      {
        id:"4-3", title:"Hệ thống phân loại USCS",
        content:`## 4.3 Phân loại đất USCS\n\n### Đất thô\n- **GW/GP:** Sỏi tốt/kém | **SW/SP:** Cát tốt/kém\n- **GM/SM:** Sỏi/Cát pha bột | **GC/SC:** Sỏi/Cát pha sét\n\n### Đất mịn\n- **ML/MH:** Bột dẻo thấp/cao\n- **CL:** Sét dẻo thấp | **CH:** Sét dẻo cao\n\n### Đường A trong biểu đồ dẻo\n$$PI = 0.73(LL - 20)$$\n\n- **Trên** đường A: Sét (C)\n- **Dưới** đường A: Bột (M)\n\n> Sét phù sa Pimpama: $LL \\approx 65\\%$, $PI \\approx 35\\%$ → **CH**`,
        refs:[
          {title:"ASTM D2487 – USCS Classification of Soils", url:"https://www.astm.org/d2487-17e01.html"},
          {title:"USCS Plasticity Chart Interactive", url:"https://www.geoengineer.org/education/"},
          {title:"TCVN 8735:2012 – Phân loại đất xây dựng", url:"https://luatminhkhue.vn/"},
          {title:"Soil Classification Guide – Geotechdata.info", url:"https://www.geotechdata.info/parameter/soil-classification"},
        ],
        examples:[
          {title:"Ví dụ 4.3 – Phân loại đất USCS đầy đủ", body:`**Dữ liệu:** % qua rây 4.75 mm = 95%, qua 0.075 mm = 68%, $LL = 48\\%$, $PI = 22\\%$.\n\n**Bước 1:** 68% > 50% lọt qua 0.075 mm → **Đất mịn**.\n\n**Bước 2:** Kiểm tra đường A: $PI_{A} = 0.73(48-20) = 0.73 \\times 28 = 20.4$. $PI = 22 > 20.4$ → **Trên đường A** → Sét.\n\n**Bước 3:** $LL = 48\\% < 50\\%$ → **CL** (Sét dẻo thấp).`},
        ],
        quiz:[
          {q:"Đường A: $PI = 0.73(LL-20)$. Đất CH nằm?",options:["Dưới đường A, LL>50%","Trên đường A, LL>50%","Trên đường A, LL<50%","Dưới đường A, LL<50%"],ans:1,explain:"CH: Trên đường A (sét), $LL > 50\\%$ (plasticity cao)."},
          {q:"CH là gì?",options:["Sét dẻo thấp","Sét dẻo cao","Bột dẻo thấp","Cát pha sét"],ans:1,explain:"CH = Clay High plasticity — Sét dẻo cao, $LL > 50\\%$, trên đường A."},
          {q:"Đất có 60% hạt trên rây 0.075 mm, $C_u=8$, $C_c=2$ → phân loại?",options:["CL","ML","GW","SW"],ans:3,explain:"60% giữ lại → đất thô (cát); $C_u=8>6$, $C_c=2$ (1–3) → **SW**."},
          {q:"Ký hiệu SM trong USCS là gì?",options:["Sét mịn","Cát pha bột","Sỏi pha bột","Bột dẻo"],ans:1,explain:"SM = Silty Sand — Cát pha bột (Sandy soil with Mothy fines)."},
          {q:"Đất có $LL=72\\%$, $PI=38\\%$, >50% qua 0.075mm → phân loại?",options:["CL","CH","MH","ML"],ans:1,explain:"$PI_A = 0.73(72-20)=38$; $PI=38 \\geq 38$ → trên đường A; $LL=72>50$ → **CH**."},
        ]
      }
    ]
  },
  {
    id:5, title:"Đầm chặt đất", icon:"🔨", color:"#c0392b",
    sections:[
      {
        id:"5-1", title:"Quá trình đầm chặt và Proctor",
        content:`## 5.1 Đầm chặt và Thí nghiệm Proctor\n\n> ⚠️ Phân biệt: **Đầm chặt** loại bỏ khí; **Cố kết** loại bỏ nước.\n\n### Mục đích\n- Tăng khả năng chịu tải, giảm độ lún\n- Giảm hệ số thấm, tăng ổn định mái dốc\n\n### Thí nghiệm Proctor Tiêu chuẩn\n- Khuôn: **944 cm³** | Búa: **2.5 kg**, rơi **305 mm**\n- 3 lớp × 25 chày/lớp\n\n**Mật độ khô:**\n$$\\rho_d = \\frac{\\rho}{1+w}$$\n\n**Đường ZAV ($S = 100\\%$):**\n$$\\rho_{d,ZAV} = \\frac{G_s \\cdot \\rho_w}{1 + G_s \\cdot w}$$`,
        refs:[
          {title:"ASTM D698 – Standard Proctor Compaction Test", url:"https://www.astm.org/d0698-12r21.html"},
          {title:"ASTM D1557 – Modified Proctor Compaction Test", url:"https://www.astm.org/d1557-12r21.html"},
          {title:"TCVN 12860:2020 – Thí nghiệm đầm nén Proctor", url:"https://luatminhkhue.vn/"},
          {title:"Compaction Curve Explained – Civil Engineering Forum", url:"https://theconstructor.org/geotechnical/soil-compaction/"},
        ],
        examples:[
          {title:"Ví dụ 5.1 – Vẽ đường cong đầm chặt và xác định $w_{opt}$", body:`**Dữ liệu Proctor:**\n\n| $w$ (%) | $\\rho$ (g/cm³) | $\\rho_d$ (g/cm³) |\n|---------|---------------|------------------|\n| 8 | 1.72 | 1.59 |\n| 12 | 1.89 | 1.69 |\n| 16 | 2.00 | 1.72 |\n| 20 | 1.96 | 1.63 |\n| 24 | 1.88 | 1.52 |\n\n**Kết quả:** $\\rho_{d,max} = 1.72$ g/cm³ tại $w_{opt} = 16\\%$. Vẽ đường ZAV với $G_s = 2.70$ để kiểm tra.`},
          {title:"Ví dụ 5.2 – Kiểm tra đường ZAV", body:`Tại $w = 16\\%$:\n$$\\rho_{d,ZAV} = \\frac{G_s \\cdot \\rho_w}{1 + G_s \\cdot w} = \\frac{2.70 \\times 1.0}{1 + 2.70 \\times 0.16} = \\frac{2.70}{1.432} = 1.885 \\text{ g/cm}^3$$\n$\\rho_{d,actual} = 1.72 < 1.885$ → Đường ZAV nằm bên phải, **hợp lý** (đất không bao giờ đạt $S=100\\%$ khi đầm).`},
        ],
        quiz:[
          {q:"Đầm chặt loại bỏ thành phần nào khỏi lỗ rỗng?",options:["Nước","Khí","Cả nước và khí","Hạt mịn"],ans:1,explain:"Đầm chặt cơ học đẩy không khí ra → giảm lỗ rỗng chứa khí."},
          {q:"Búa Proctor tiêu chuẩn nặng bao nhiêu?",options:["1.0 kg","2.5 kg","4.5 kg","10 kg"],ans:1,explain:"Proctor chuẩn: 2.5 kg, rơi 305 mm; Modified Proctor: 4.5 kg, rơi 457 mm."},
          {q:"Đường ZAV ($S=100\\%$) thể hiện điều gì?",options:["Đường cong Proctor thực tế","Giới hạn lý thuyết tối đa khi $S=100\\%$","Mật độ khô tối thiểu","Đường độ ẩm tối ưu"],ans:1,explain:"ZAV (Zero Air Void) là giới hạn lý thuyết — đường cong Proctor luôn nằm dưới đường ZAV."},
          {q:"Nếu $G_s=2.68$, $w=18\\%$, $\\rho_{d,ZAV}$ xấp xỉ bằng?",options:["1.45 g/cm³","1.62 g/cm³","1.80 g/cm³","2.00 g/cm³"],ans:2,explain:"$\\rho_{d,ZAV} = 2.68/(1+2.68\\times0.18) = 2.68/1.482 \\approx 1.81$ g/cm³."},
          {q:"Modified Proctor khác Standard Proctor chủ yếu ở điểm nào?",options:["Kích thước khuôn","Năng lượng đầm lớn hơn (búa nặng hơn, rơi cao hơn)","Số lớp ít hơn","Thời gian đầm khác"],ans:1,explain:"Modified (ASTM D1557): búa 4.5 kg, rơi 457 mm, 5 lớp → năng lượng gấp 4.5 lần Standard."},
        ]
      },
      {
        id:"5-2", title:"Đầm chặt hiện trường",
        content:`## 5.2 Đầm chặt ngoài Hiện trường\n\n| Thiết bị | Thích hợp |\n|----------|-----------|\n| Lu bánh lốp | Cát, sỏi |\n| Lu chân cừu | Đất dính |\n| Lu rung | Cát, sỏi |\n| Đầm cóc | Khu chật hẹp |\n\n### Kiểm tra chất lượng\n$$RC = \\frac{\\rho_{d,field}}{\\rho_{d,max}} \\times 100\\% \\geq 95\\%$$\n\n### Yêu cầu chiều dày lớp đắp\n- Đất dính: mỗi lớp **15–20 cm** trước khi đầm\n- Đất rời: mỗi lớp **20–30 cm** trước khi đầm`,
        refs:[
          {title:"ASTM D6938 – Nuclear Gauge Density Test", url:"https://www.astm.org/d6938-17a.html"},
          {title:"ASTM D1556 – Sand Cone Density Test", url:"https://www.astm.org/d1556-15e01.html"},
          {title:"TCVN 8868:2011 – Kiểm tra độ đầm chặt hiện trường", url:"https://luatminhkhue.vn/"},
          {title:"Compaction Equipment Guide – Caterpillar", url:"https://www.cat.com/en_US/articles/compaction-equipment.html"},
        ],
        examples:[
          {title:"Ví dụ 5.3 – Kiểm tra độ chặt hiện trường", body:`**Dữ liệu:** Thí nghiệm bình cát tại hiện trường cho $\\rho_{d,field} = 1.65$ g/cm³. Từ Proctor: $\\rho_{d,max} = 1.72$ g/cm³.\n\n$$RC = \\frac{1.65}{1.72} \\times 100\\% = 95.9\\%$$\n\n**Kết luận:** $RC = 95.9\\% > 95\\%$ → **ĐẠT YÊU CẦU** ✓`},
          {title:"Ví dụ 5.4 – Tính số lượt lu cần thiết", body:`Đường đắp đất dài 500 m, rộng 8 m, lớp đắp 20 cm, lu rung có chiều rộng 2.1 m, tốc độ 4 km/h, cần 6 lượt tại một điểm.\n\n**Số lượt lu trên mặt cắt ngang:**\n$$n_{passes} = \\lceil 8/2.1 \\rceil = 4 \\text{ lượt}$$\n**Tổng chu kỳ cần:** 6 lần → **24 lượt qua** trên toàn chiều rộng.`},
        ],
        quiz:[
          {q:"Độ chặt yêu cầu tối thiểu $RC$ là bao nhiêu?",options:["85%","90%","95%","100%"],ans:2,explain:"Yêu cầu tiêu chuẩn $RC \\geq 95\\%$ cho hầu hết công trình đắp đất."},
          {q:"Lu chân cừu thích hợp nhất cho loại đất nào?",options:["Cát sạch","Sỏi thô","Đất dính (sét)","Đá dăm"],ans:2,explain:"Lu chân cừu tạo áp lực tập trung điểm → hiệu quả cao cho đất dính."},
          {q:"Chiều dày lớp đất dính trước khi đầm nên là bao nhiêu?",options:["5–10 cm","15–20 cm","30–50 cm","50–100 cm"],ans:1,explain:"Đất dính: 15–20 cm/lớp trước đầm; đất rời: 20–30 cm/lớp."},
          {q:"Phương pháp bình cát (Sand Cone) dùng để làm gì?",options:["Thí nghiệm Proctor tại hiện trường","Đo mật độ đất tại chỗ","Kiểm tra độ ẩm","Phân tích cấp phối"],ans:1,explain:"Bình cát (ASTM D1556): đo thể tích hố đào → tính mật độ đất hiện trường."},
          {q:"Nếu $\\rho_{d,field}=1.58$ g/cm³, $\\rho_{d,max}=1.72$ g/cm³ → đạt không?",options:["Đạt, RC=97%","Không đạt, RC=91.9%","Đạt, RC=95%","Không đủ dữ liệu"],ans:1,explain:"$RC = 1.58/1.72 \\times 100\\% = 91.9\\% < 95\\%$ → **Không đạt**."},
        ]
      }
    ]
  },
  {
    id:6, title:"Ứng suất trong đất", icon:"⚖️", color:"#d35400",
    sections:[
      {
        id:"6-1", title:"Ứng suất tổng và hữu hiệu",
        content:`## 6.1 Ứng suất Tổng và Hữu hiệu\n\n### Ứng suất tổng đứng\n$$\\sigma_v = \\sum \\gamma_i \\cdot h_i$$\n\n### Nguyên lý Terzaghi (1943)\n$$\\boxed{\\sigma' = \\sigma - u}$$\n\n| Ký hiệu | Ý nghĩa |\n|---------|----------|\n| $\\sigma'$ | Ứng suất hữu hiệu — **gây biến dạng** |\n| $\\sigma$ | Ứng suất tổng |\n| $u$ | Áp lực nước lỗ rỗng |\n\n$$u = \\gamma_w \\cdot h_w \\qquad \\sigma'_h = K_0 \\cdot \\sigma'_v$$\n\nVới NC soil: $K_0 = 1 - \\sin\\phi'$`,
        refs:[
          {title:"Terzaghi's Effective Stress Principle – Geotechdata", url:"https://www.geotechdata.info/parameter/effective-stress"},
          {title:"TCVN 9156:2012 – Xác định áp lực nước lỗ rỗng", url:"https://luatminhkhue.vn/"},
          {title:"Effective Stress – MIT OpenCourseWare", url:"https://ocw.mit.edu/courses/1-321-soil-mechanics/"},
          {title:"Stress in Soils – Civil Engineering Forum", url:"https://theconstructor.org/geotechnical/effective-stress-soil/"},
        ],
        examples:[
          {title:"Ví dụ 6.1 – Tính ứng suất tại độ sâu z = 5 m", body:`**Profil đất:**\n- 0–2 m: Cát, $\\gamma_d = 16$ kN/m³ (trên MNN)\n- MNN tại 2 m\n- 2–5 m: Cát bão hòa, $\\gamma_{sat} = 19.5$ kN/m³\n\n$$\\sigma_v = 16 \\times 2 + 19.5 \\times 3 = 32 + 58.5 = 90.5 \\text{ kPa}$$\n$$u = \\gamma_w \\times 3 = 9.81 \\times 3 = 29.4 \\text{ kPa}$$\n$$\\sigma'_v = 90.5 - 29.4 = \\mathbf{61.1 \\text{ kPa}}$$`},
          {title:"Ví dụ 6.2 – Tính $K_0$ và ứng suất nằm ngang", body:`**Cho:** $\\phi' = 30°$, $\\sigma'_v = 61.1$ kPa tại z = 5 m.\n\n$$K_0 = 1 - \\sin 30° = 1 - 0.5 = 0.5$$\n$$\\sigma'_h = K_0 \\cdot \\sigma'_v = 0.5 \\times 61.1 = \\mathbf{30.6 \\text{ kPa}}$$`},
        ],
        quiz:[
          {q:"Nguyên lý Terzaghi: $\\sigma' =$?",options:["$\\sigma + u$","$\\sigma - u$","$u - \\sigma$","$\\sigma \\times u$"],ans:1,explain:"$\\sigma' = \\sigma - u$ — ứng suất hữu hiệu bằng tổng trừ áp lực nước."},
          {q:"Thành phần nào thực sự gây biến dạng trong đất?",options:["Ứng suất tổng $\\sigma$","Áp lực nước $u$","Ứng suất hữu hiệu $\\sigma'$","Tất cả như nhau"],ans:2,explain:"Chỉ $\\sigma'$ tác dụng lên khung hạt rắn mới gây biến dạng đất."},
          {q:"Khi mực nước ngầm dâng lên, ứng suất hữu hiệu thay đổi thế nào?",options:["Tăng","Giảm","Không đổi","Phụ thuộc loại đất"],ans:1,explain:"MNN tăng → $u$ tăng → $\\sigma' = \\sigma - u$ giảm."},
          {q:"$K_0$ cho đất NC bằng?",options:["$1 + \\sin\\phi'$","$1 - \\sin\\phi'$","$\\tan\\phi'$","$\\sin\\phi'$"],ans:1,explain:"$K_0 = 1 - \\sin\\phi'$ (Jaky, 1944) cho đất bình thường cố kết."},
          {q:"Tại z=4m dưới MNN, $\\gamma_{sat}=20$ kN/m³, $\\sigma_v=$?",options:["40 kPa","60 kPa","80 kPa","Cần biết $\\sigma_v$ trên MNN"],ans:3,explain:"Cần biết ứng suất từ các lớp phía trên MNN để tính tổng."},
        ]
      },
      {
        id:"6-2", title:"Thấm hướng lên và đất chảy",
        content:`## 6.2 Thấm hướng lên và Điều kiện đất chảy\n\n### Gradient thủy lực\n$$i = \\frac{\\Delta h}{L}$$\n\n### Thấm hướng lên\n$$\\sigma' = (\\gamma' - i \\cdot \\gamma_w) \\cdot z$$\n\n### Điều kiện đất chảy (Quick Condition)\nKhi $\\sigma' = 0$:\n$$i_{cr} = \\frac{\\gamma'}{\\gamma_w} = \\frac{G_s - 1}{1+e} \\approx 0.9 \\div 1.1$$\n\n> ⚠️ Khi $i > i_{cr}$: **đất chảy (quicksand)** — mất hoàn toàn cường độ.`,
        refs:[
          {title:"Quick Condition and Heave – Geoengineer.org", url:"https://www.geoengineer.org/education/"},
          {title:"Upward Seepage – NPTEL Civil Engineering", url:"https://nptel.ac.in/courses/105101083/"},
          {title:"TCVN 9155:2012 – Ổn định thấm công trình thủy lợi", url:"https://luatminhkhue.vn/"},
          {title:"Seepage and Piping – USACE Engineering Manual", url:"https://www.publications.usace.army.mil/"},
        ],
        examples:[
          {title:"Ví dụ 6.3 – Kiểm tra điều kiện đất chảy", body:`**Cho:** Cột nước chênh lệch $\\Delta h = 1.2$ m, đất dày $L = 1.5$ m, $G_s = 2.67$, $e = 0.72$.\n\n$$i = \\frac{\\Delta h}{L} = \\frac{1.2}{1.5} = 0.80$$\n$$i_{cr} = \\frac{G_s - 1}{1+e} = \\frac{2.67 - 1}{1 + 0.72} = \\frac{1.67}{1.72} = 0.97$$\n\n**Kiểm tra:** $i = 0.80 < i_{cr} = 0.97$ → **An toàn** ✓ (Hệ số an toàn: $FS = 0.97/0.80 = 1.21$)`},
          {title:"Ví dụ 6.4 – Tính ứng suất hữu hiệu khi có thấm lên", body:`**Cho:** $\\gamma_{sat} = 19.5$ kN/m³, $i = 0.5$, $z = 2$ m.\n\n$$\\gamma' = 19.5 - 9.81 = 9.69 \\text{ kN/m}^3$$\n$$\\sigma' = (9.69 - 0.5 \\times 9.81) \\times 2 = (9.69 - 4.91) \\times 2 = 4.78 \\times 2 = \\mathbf{9.6 \\text{ kPa}}$$\n\nSo sánh với không có thấm: $\\sigma' = 9.69 \\times 2 = 19.4$ kPa → Thấm lên giảm $\\sigma'$ đáng kể!`},
        ],
        quiz:[
          {q:"Gradient thủy lực tới hạn $i_{cr}$ bằng?",options:["$\\gamma'/\\gamma_w$","$\\gamma_w/\\gamma'$","$\\gamma/\\gamma_w$","$1.5$ luôn luôn"],ans:0,explain:"$i_{cr} = \\gamma'/\\gamma_w = (G_s-1)/(1+e) \\approx 0.9\\div1.1$."},
          {q:"Đất chảy (quicksand) xảy ra khi?",options:["$i < i_{cr}$","$i = 0$","$i > i_{cr}$","$i = i_{cr}/2$"],ans:2,explain:"$i > i_{cr}$: $\\sigma' = 0$ → đất mất cường độ — đất chảy."},
          {q:"Thấm hướng lên làm ứng suất hữu hiệu thay đổi thế nào?",options:["Tăng","Giảm","Không đổi","Tăng gấp đôi"],ans:1,explain:"$\\sigma' = (\\gamma' - i\\gamma_w)z$ — gradient thấm lên làm giảm $\\sigma'$."},
          {q:"$G_s = 2.65$, $e = 0.65$, $i_{cr}$ xấp xỉ bằng?",options:["0.75","0.98","1.15","1.40"],ans:1,explain:"$i_{cr} = (2.65-1)/(1+0.65) = 1.65/1.65 = 1.0 \\approx 0.98$–$1.0$."},
          {q:"Biện pháp nào giúp ngăn chặn đất chảy trong hố đào?",options:["Tăng tải","Bơm hút nước nhanh","Hạ mực nước ngầm hoặc gia cố thành hố","Đào sâu hơn"],ans:2,explain:"Hạ MNN (bơm kim lọc, cừ chắn) hoặc gia cố thành hố để giảm gradient thấm."},
        ]
      }
    ]
  },
  {
    id:7, title:"Dòng thấm trong đất", icon:"💧", color:"#1a6fa8",
    sections:[
      {
        id:"7-1", title:"Định luật Darcy và hệ số thấm",
        content:`## 7.1 Định luật Darcy và Hệ số thấm\n\n| Loại đất | $k$ (m/s) |\n|----------|-----------|\n| Sỏi | $10^{-1}$ đến $1$ |\n| Cát thô | $10^{-4}$ đến $10^{-2}$ |\n| Cát mịn | $10^{-6}$ đến $10^{-4}$ |\n| Bột | $10^{-9}$ đến $10^{-5}$ |\n| Sét | $10^{-11}$ đến $10^{-8}$ |\n\n### Định luật Darcy\n$$v = k \\cdot i \\qquad q = k \\cdot i \\cdot A$$\n\n- Áp dụng cho **chảy tầng** ($Re < 10$)`,
        refs:[
          {title:"Darcy's Law – USGS Water Resources", url:"https://www.usgs.gov/special-topics/water-science-school/science/darcys-law"},
          {title:"Hydraulic Conductivity – Geotechdata.info", url:"https://www.geotechdata.info/parameter/permeability"},
          {title:"TCVN 8723:2012 – Xác định hệ số thấm trong phòng TN", url:"https://luatminhkhue.vn/"},
          {title:"Permeability of Soils – NPTEL Course", url:"https://nptel.ac.in/courses/105101083/"},
        ],
        examples:[
          {title:"Ví dụ 7.1 – Tính lưu lượng thấm qua đập đất", body:`**Cho:** Đập đất cao $H = 8$ m, rộng đáy $L = 40$ m, $k = 2.5 \\times 10^{-4}$ cm/s, chiều dài đập $B = 100$ m.\n\n$$i = \\frac{H}{L} = \\frac{8}{40} = 0.20$$\n$$q = k \\cdot i \\cdot A = 2.5 \\times 10^{-6} \\times 0.20 \\times (8 \\times 100) = 4.0 \\times 10^{-4} \\text{ m}^3/\\text{s}$$\n\n**Lưu lượng:** $Q = 0.4$ L/s qua đập.`},
        ],
        quiz:[
          {q:"Định luật Darcy: $v =$?",options:["$v = k/i$","$v = k \\cdot i$","$v = i/k$","$v = k + i$"],ans:1,explain:"$v = k \\cdot i$ — vận tốc thấm tỷ lệ thuận với gradient thủy lực."},
          {q:"Đất sét có $k$ vào khoảng?",options:["$10^{-1}$ m/s","$10^{-4}$ m/s","$10^{-9}$ m/s","$1$ m/s"],ans:2,explain:"Sét: $k \\approx 10^{-11}$ đến $10^{-8}$ m/s — thấm rất kém."},
          {q:"Điều kiện áp dụng định luật Darcy là gì?",options:["Chảy rối","Chảy tầng ($Re < 10$)","Vận tốc cao","Áp suất cao"],ans:1,explain:"Darcy chỉ đúng cho chảy tầng — điều kiện thường gặp trong đất mịn và cát mịn."},
          {q:"$k$ của cát thô xấp xỉ?",options:["$10^{-10}$ m/s","$10^{-6}$ m/s","$10^{-3}$ m/s","$10$ m/s"],ans:2,explain:"Cát thô: $k \\approx 10^{-4}$ đến $10^{-2}$ m/s — thấm tốt."},
          {q:"Nếu $k = 5\\times10^{-5}$ m/s, $i = 0.3$, $A = 2$ m², $q =$?",options:["$3\\times10^{-5}$ m³/s","$3\\times10^{-4}$ m³/s","$3\\times10^{-3}$ m³/s","$1.5\\times10^{-4}$ m³/s"],ans:0,explain:"$q = k \\cdot i \\cdot A = 5\\times10^{-5} \\times 0.3 \\times 2 = 3\\times10^{-5}$ m³/s."},
        ]
      },
      {
        id:"7-2", title:"Thí nghiệm thấm và lưới thấm",
        content:`## 7.2 Thí nghiệm Thấm và Lưới thấm\n\n### Constant Head (đất thô)\n$$k = \\frac{q \\cdot L}{A \\cdot \\Delta h}$$\n\n### Falling Head (đất mịn)\n$$k = \\frac{a \\cdot L}{A(t_2-t_1)} \\cdot \\ln\\frac{h_1}{h_2}$$\n\n### Thấm trong đất phân lớp\n$$k_H = \\frac{\\sum k_i h_i}{\\sum h_i} \\geq k_V = \\frac{\\sum h_i}{\\sum h_i/k_i}$$\n\n### Lưu lượng qua lưới thấm\n$$q = k \\cdot H \\cdot \\frac{N_f}{N_d}$$`,
        refs:[
          {title:"ASTM D2434 – Constant Head Permeability Test", url:"https://www.astm.org/d2434-22.html"},
          {title:"ASTM D5084 – Falling Head Permeability Test", url:"https://www.astm.org/d5084-16a.html"},
          {title:"Flow Net Construction – Geoengineer.org Tutorial", url:"https://www.geoengineer.org/"},
          {title:"TCVN 8723:2012 – Thí nghiệm thấm cột nước thay đổi", url:"https://luatminhkhue.vn/"},
        ],
        examples:[
          {title:"Ví dụ 7.2 – Thí nghiệm Falling Head", body:`**Cho:** $a = 1.0$ cm², $L = 15$ cm, $A = 30$ cm², $h_1 = 60$ cm, $h_2 = 40$ cm, $t_2-t_1 = 120$ s.\n\n$$k = \\frac{a \\cdot L}{A(t_2-t_1)} \\cdot \\ln\\frac{h_1}{h_2} = \\frac{1.0 \\times 15}{30 \\times 120} \\cdot \\ln\\frac{60}{40}$$\n$$= \\frac{15}{3600} \\times 0.405 = \\mathbf{1.69 \\times 10^{-3} \\text{ cm/s}}$$`},
          {title:"Ví dụ 7.3 – Lưu lượng thấm qua lưới thấm", body:`Đập có $H = 5$ m, $k = 3 \\times 10^{-4}$ cm/s, lưới thấm có $N_f = 4$, $N_d = 12$.\n\n$$q = k \\cdot H \\cdot \\frac{N_f}{N_d} = 3\\times10^{-6} \\times 5 \\times \\frac{4}{12} = \\mathbf{5.0 \\times 10^{-6} \\text{ m}^2/\\text{s}}$$\n\n(trên 1 m chiều dài đập)`},
        ],
        quiz:[
          {q:"Falling Head dùng cho loại đất nào?",options:["Cát sạch","Sỏi thô","Đất mịn (sét, bột)","Đất hữu cơ"],ans:2,explain:"Falling Head phù hợp đất mịn thấm chậm; Constant Head cho đất thô."},
          {q:"$k_H$ so với $k_V$ trong đất phân lớp?",options:["$k_H < k_V$","$k_H = k_V$","$k_H \\geq k_V$","Ngẫu nhiên"],ans:2,explain:"$k_H \\geq k_V$ — thấm ngang luôn lớn hơn hoặc bằng thấm đứng."},
          {q:"Trong lưới thấm, $N_f$ và $N_d$ là gì?",options:["Số nút và số đường","Số ô dòng và số ô đẳng thế","Số lớp và số điểm","Không liên quan"],ans:1,explain:"$N_f$ = số ô dòng (flow tubes); $N_d$ = số bậc đẳng thế (equipotential drops)."},
          {q:"Constant Head Test: $q = 50$ cm³/s, $L = 20$ cm, $A = 100$ cm², $\\Delta h = 30$ cm. $k=$?",options:["$0.33$ cm/s","$0.033$ cm/s","$3.3\\times10^{-3}$ cm/s","$0.01$ cm/s"],ans:0,explain:"$k = qL/(A\\Delta h) = 50\\times20/(100\\times30) = 1000/3000 = 0.33$ cm/s."},
          {q:"Hai lớp đất: $k_1=10^{-3}$ m/s, $h_1=2$m; $k_2=10^{-5}$ m/s, $h_2=3$m. $k_H=$?",options:["$4\\times10^{-4}$ m/s","$5\\times10^{-3}$ m/s","$10^{-4}$ m/s","$2\\times10^{-3}$ m/s"],ans:0,explain:"$k_H = (10^{-3}\\times2 + 10^{-5}\\times3)/(2+3) = 2.03\\times10^{-3}/5 \\approx 4.06\\times10^{-4}$ m/s."},
        ]
      }
    ]
  },
  {
    id:8, title:"Vòng tròn Mohr và ứng suất", icon:"⭕", color:"#7d3c98",
    sections:[
      {
        id:"8-1", title:"Vòng tròn Mohr",
        content:`## 8.1 Vòng tròn Mohr\n\n### Ứng suất trên mặt phẳng nghiêng góc $\\theta$\n$$\\sigma_\\theta = \\frac{\\sigma_1+\\sigma_3}{2} + \\frac{\\sigma_1-\\sigma_3}{2}\\cos 2\\theta$$\n$$\\tau_\\theta = \\frac{\\sigma_1-\\sigma_3}{2}\\sin 2\\theta$$\n\n### Thông số vòng tròn\n- **Tâm:** $O = \\left(\\dfrac{\\sigma_1+\\sigma_3}{2},\\ 0\\right)$\n- **Bán kính:** $R = \\dfrac{\\sigma_1-\\sigma_3}{2} = \\tau_{max}$`,
        refs:[
          {title:"Mohr Circle – Interactive Web Tool", url:"https://www.engapplets.vt.edu/Mohr/javaMohr/javaMohrNotes.html"},
          {title:"Stress Analysis – MIT OCW 1.050", url:"https://ocw.mit.edu/"},
          {title:"Mohr's Circle Tutorial – Engineers Edge", url:"https://www.engineersedge.com/mechanics_of_materials/mohr_circle.htm"},
          {title:"Principal Stresses – Geoengineer.org", url:"https://www.geoengineer.org/"},
        ],
        examples:[
          {title:"Ví dụ 8.1 – Vẽ và đọc vòng tròn Mohr", body:`**Cho:** $\\sigma_1 = 300$ kPa, $\\sigma_3 = 100$ kPa.\n\n**Tâm:** $O = (300+100)/2 = 200$ kPa\n**Bán kính:** $R = (300-100)/2 = 100$ kPa\n\nỨng suất trên mặt phẳng $\\theta = 30°$:\n$$\\sigma_{30} = 200 + 100\\cos 60° = 200 + 50 = 250 \\text{ kPa}$$\n$$\\tau_{30} = 100\\sin 60° = 86.6 \\text{ kPa}$$`},
          {title:"Ví dụ 8.2 – Tìm ứng suất chính từ ứng suất đã biết", body:`**Cho:** $\\sigma_x = 180$ kPa, $\\sigma_y = 80$ kPa, $\\tau_{xy} = 60$ kPa.\n\n$$\\sigma_{1,3} = \\frac{180+80}{2} \\pm \\sqrt{\\left(\\frac{180-80}{2}\\right)^2 + 60^2}$$\n$$= 130 \\pm \\sqrt{50^2 + 60^2} = 130 \\pm \\sqrt{6100} = 130 \\pm 78.1$$\n$$\\sigma_1 = 208.1 \\text{ kPa}, \\quad \\sigma_3 = 51.9 \\text{ kPa}$$`},
        ],
        quiz:[
          {q:"Bán kính vòng tròn Mohr bằng?",options:["$(\\sigma_1+\\sigma_3)/2$","$(\\sigma_1-\\sigma_3)/2$","$\\sigma_1 \\cdot \\sigma_3$","$\\sigma_1/\\sigma_3$"],ans:1,explain:"$R = (\\sigma_1-\\sigma_3)/2 = \\tau_{max}$."},
          {q:"$\\tau_{max}$ xảy ra trên mặt phẳng nghiêng bao nhiêu độ so với mặt phẳng ứng suất chính?",options:["0°","30°","45°","90°"],ans:2,explain:"$\\tau_{max}$ tại $\\theta = 45°$."},
          {q:"$\\sigma_1 = 250$ kPa, $\\sigma_3 = 50$ kPa, tâm O nằm ở tọa độ nào?",options:["(100, 0)","(150, 0)","(200, 0)","(250, 0)"],ans:1,explain:"$O = (\\sigma_1+\\sigma_3)/2 = (250+50)/2 = 150$ kPa."},
          {q:"Khi $\\theta = 0°$, ứng suất cắt $\\tau$ bằng?",options:["$\\tau_{max}$","$0$","$(\\sigma_1-\\sigma_3)/4$","$\\sigma_1$"],ans:1,explain:"$\\tau_0 = R\\sin 0° = 0$ — mặt phẳng ứng suất chính không có ứng suất cắt."},
          {q:"Vòng tròn Mohr lớn (bán kính lớn) thể hiện điều gì?",options:["Ứng suất trung bình lớn","Chênh lệch ứng suất chính lớn → gần phá hoại","Đất cứng","Độ ẩm cao"],ans:1,explain:"$R = \\tau_{max} = (\\sigma_1-\\sigma_3)/2$ lớn → đất gần đến điều kiện phá hoại."},
        ]
      },
      {
        id:"8-2", title:"Phương pháp Cực (Pole)",
        content:`## 8.2 Phương pháp Cực (Pole Method)\n\n### Các bước thực hiện\n1. Vẽ vòng tròn Mohr với $A(\\sigma_3, 0)$ và $B(\\sigma_1, 0)$\n2. Điểm cực $P$: từ $A$ vẽ đường **song song mặt phẳng $\\sigma_3$** → giao vòng tròn\n3. Từ $P$, vẽ đường **song song mặt phẳng** cần xét\n4. Giao điểm với vòng tròn → $(\\sigma_\\theta, \\tau_\\theta)$\n\n### Ứng dụng thực tế\n- Phân tích ổn định mái dốc\n- Tính áp lực đất lên tường chắn\n- Thiết kế nền móng`,
        refs:[
          {title:"Pole Method – Geotechnical Engineering Tutorial", url:"https://www.geoengineer.org/"},
          {title:"Stress Transformation Using Pole – ResearchGate", url:"https://www.researchgate.net/"},
          {title:"Applied Soil Mechanics with ABAQUS Applications – Helwany", url:"https://www.wiley.com/"},
          {title:"Interactive Mohr Circle with Pole – Online Tool", url:"https://www.engapplets.vt.edu/"},
        ],
        examples:[
          {title:"Ví dụ 8.3 – Dùng phương pháp cực tìm ứng suất", body:`**Cho:** $\\sigma_1 = 400$ kPa (đứng), $\\sigma_3 = 150$ kPa (ngang). Tìm ứng suất trên mặt phẳng nghiêng 30° với phương ngang.\n\n**Phương pháp giải tích (kiểm tra):**\n$$\\sigma_{30} = \\frac{400+150}{2} + \\frac{400-150}{2}\\cos(2\\times60°) = 275 + 125\\cos120° = 275 - 62.5 = 212.5 \\text{ kPa}$$\n$$\\tau_{30} = 125\\sin120° = 108.3 \\text{ kPa}$$`},
        ],
        quiz:[
          {q:"Vòng tròn Mohr được dùng để làm gì?",options:["Phân tích thấm","Xác định ứng suất trên mặt phẳng bất kỳ","Tính lún","Đo hệ số thấm"],ans:1,explain:"Mohr circle biểu diễn trạng thái ứng suất tại một điểm trên mọi hướng mặt phẳng."},
          {q:"Điểm cực P trong vòng tròn Mohr nằm ở đâu?",options:["Tại tâm O","Tại điểm cao nhất vòng tròn","Trên vòng tròn, xác định bằng hướng của mặt phẳng ứng suất đã biết","Bên ngoài vòng tròn"],ans:2,explain:"Điểm cực P nằm trên vòng tròn Mohr, được xác định bằng cách vẽ từ điểm đã biết theo hướng mặt phẳng tương ứng."},
          {q:"Từ điểm cực P, để tìm ứng suất trên mặt phẳng $\\alpha$, cần vẽ đường gì?",options:["Đường thẳng đứng","Song song với mặt phẳng $\\alpha$","Vuông góc với $\\alpha$","Đường bất kỳ qua P"],ans:1,explain:"Từ P vẽ đường song song mặt phẳng $\\alpha$ → giao vòng tròn = ứng suất trên $\\alpha$."},
          {q:"Ứng suất chính là ứng suất tại điểm nào trên vòng tròn Mohr?",options:["Điểm cao nhất và thấp nhất","Điểm giao với trục $\\sigma$ (nơi $\\tau = 0$)","Điểm cực P","Tâm O"],ans:1,explain:"Tại $\\tau = 0$: hai giao điểm với trục $\\sigma$ là $\\sigma_1$ và $\\sigma_3$ (ứng suất chính)."},
          {q:"Mặt phẳng phá hoại trong tiêu chuẩn Mohr-Coulomb nghiêng bao nhiêu so với mặt phẳng $\\sigma_1$?",options:["$45°$","$45° + \\phi'/2$","$\\phi'$","$90° - \\phi'$"],ans:1,explain:"Mặt phẳng phá hoại nghiêng góc $\\theta_f = 45° + \\phi'/2$ so với mặt phẳng ứng suất chính nhỏ nhất."},
        ]
      }
    ]
  },
  {
    id:9, title:"Biến dạng đất", icon:"📐", color:"#1e8449",
    sections:[
      {
        id:"9-1", title:"Thí nghiệm cường độ đất",
        content:`## 9.1 Thí nghiệm Cường độ Đất\n\n### Thí nghiệm nén không hạn chế (UCT)\n$$q_u = \\frac{P}{A} \\qquad c_u = \\frac{q_u}{2}$$\n\n### Thí nghiệm Ba trục (Triaxial Test)\n\n| Ký hiệu | Tên | Điều kiện |\n|---------|-----|------------|\n| **UU** | Không cố kết – Không thoát nước | Ứng suất tổng |\n| **CU** | Cố kết – Không thoát nước | $\\sigma' + u$ |\n| **CD** | Cố kết – Thoát nước | Tham số hữu hiệu |\n\n### Hệ số Skempton\n$$\\Delta u = B[\\Delta\\sigma_3 + A(\\Delta\\sigma_1 - \\Delta\\sigma_3)]$$`,
        refs:[
          {title:"ASTM D2166 – Unconfined Compressive Strength of Cohesive Soil", url:"https://www.astm.org/d2166-16.html"},
          {title:"ASTM D2850 – Unconsolidated Undrained Triaxial Test", url:"https://www.astm.org/d2850-15.html"},
          {title:"TCVN 8868:2011 – Thí nghiệm nén ba trục", url:"https://luatminhkhue.vn/"},
          {title:"Triaxial Test Interpretation – Geoengineer.org", url:"https://www.geoengineer.org/"},
        ],
        examples:[
          {title:"Ví dụ 9.1 – Tính $c_u$ từ UCT", body:`**Cho:** $P_{max} = 520$ N, diện tích tiết diện $A_0 = 18$ cm², chiều cao $H_0 = 7.6$ cm, biến dạng tại phá hoại $\\Delta H = 0.8$ cm.\n\n**Diện tích hiệu chỉnh:**\n$$A = \\frac{A_0}{1 - \\varepsilon} = \\frac{18}{1 - 0.8/7.6} = \\frac{18}{0.895} = 20.1 \\text{ cm}^2$$\n$$q_u = \\frac{P}{A} = \\frac{520}{20.1} = 25.9 \\text{ N/cm}^2 = 25.9 \\text{ kPa}$$\n$$c_u = q_u/2 = \\mathbf{13.0 \\text{ kPa}}$$\n\nĐây là sét **rất mềm** ($c_u < 25$ kPa).`},
        ],
        quiz:[
          {q:"UCT cho thông số gì?",options:["$\\phi'$","$c_u$ không thoát nước","Hệ số thấm","Giới hạn chảy"],ans:1,explain:"$c_u = q_u/2$ từ UCT — lực dính không thoát nước."},
          {q:"CD test (cố kết – thoát nước) cho tham số nào chính xác nhất?",options:["$c_u, \\phi_u$","$c', \\phi'$ hữu hiệu","Chỉ số dẻo","Mật độ"],ans:1,explain:"CD (slow, drained) cho $c'$ và $\\phi'$ — tham số hữu hiệu dài hạn chính xác nhất."},
          {q:"Đất bão hòa hoàn toàn có hệ số Skempton B bằng?",options:["0","0.5","1","2"],ans:2,explain:"$B = 1$ khi $S = 100\\%$ — tất cả ứng suất buồng truyền thành áp lực nước."},
          {q:"Thí nghiệm UU (Quick Test) phù hợp cho phân tích nào?",options:["Dài hạn","Ngắn hạn (thi công nhanh)","Thấm","Phân loại đất"],ans:1,explain:"UU cho $c_u$ dùng phân tích ngắn hạn khi thi công nhanh trên sét bão hòa."},
          {q:"Hệ số $A$ Skempton âm ($A < 0$) tại phá hoại thể hiện điều gì?",options:["Đất bình thường cố kết","Sét quá cố kết (dilative)","Cát lỏng","Đất khô"],ans:1,explain:"$A < 0$ tại phá hoại: sét quá cố kết — áp lực nước giảm khi cắt (dilative behavior)."},
        ]
      }
    ]
  },
  {
    id:10, title:"Cố kết đất mềm", icon:"⏱️", color:"#148f77",
    sections:[
      {
        id:"10-1", title:"Quá trình cố kết và các loại lún",
        content:`## 10.1 Quá trình Cố kết\n\n**Cố kết:** Đất mịn nén chặt dần do nước lỗ rỗng thoát ra chậm dưới tải trọng.\n\n### Các loại lún\n$$S_{total} = S_i + S_c + S_s$$\n\n| Loại | Ký hiệu | Nguyên nhân |\n|------|---------|-------------|\n| Tức thời | $S_i$ | Biến dạng không thoát nước |\n| Sơ cấp | $S_c$ | Thoát nước lỗ rỗng |\n| Từ biến | $S_s$ | Biến dạng từ biến |`,
        refs:[
          {title:"Terzaghi's Consolidation Theory – MIT OCW", url:"https://ocw.mit.edu/"},
          {title:"Consolidation Settlement – Geotechdata.info", url:"https://www.geotechdata.info/parameter/consolidation"},
          {title:"TCVN 4200:2012 – Thí nghiệm cố kết (Oedometer)", url:"https://luatminhkhue.vn/"},
          {title:"Settlement Calculations – Geoengineer.org", url:"https://www.geoengineer.org/"},
        ],
        examples:[
          {title:"Ví dụ 10.1 – Phân biệt các loại lún", body:`Một móng bè đặt trên sét mềm bão hòa:\n- **Lún tức thời** $S_i$: Xảy ra trong vài ngày sau khi đặt móng. Do biến dạng không thoát nước của sét. $S_i \\approx 20–30\\%S_{total}$.\n- **Lún cố kết sơ cấp** $S_c$: Xảy ra trong nhiều năm khi nước lỗ rỗng thoát dần. $S_c \\approx 60–70\\%S_{total}$.\n- **Lún từ biến** $S_s$: Tiếp tục sau khi $S_c$ hoàn thành. Thường $< 10\\%S_{total}$ với đất khoáng vô cơ.`},
        ],
        quiz:[
          {q:"Cố kết là quá trình gì?",options:["Đầm cơ học","Thoát nước chậm → lún theo thời gian","Đóng băng","Tăng cường độ tức thì"],ans:1,explain:"Nước lỗ rỗng thoát chậm → ứng suất hữu hiệu tăng → đất lún dần theo thời gian."},
          {q:"Lún cố kết sơ cấp $S_c$ do nguyên nhân nào?",options:["Biến dạng từ biến","Thoát nước lỗ rỗng","Biến dạng đàn hồi","Thay đổi nhiệt độ"],ans:1,explain:"$S_c$ do áp lực nước lỗ rỗng dư tiêu tán dần → ứng suất hữu hiệu tăng → nén chặt đất."},
          {q:"Tổng lún $S_{total}$ bao gồm những thành phần nào?",options:["Chỉ $S_c$","$S_i + S_c$","$S_i + S_c + S_s$","$S_i + S_s$"],ans:2,explain:"$S_{total} = S_i + S_c + S_s$ — lún tức thời + sơ cấp + từ biến."},
          {q:"Tại sao sét cố kết chậm hơn cát?",options:["Sét nặng hơn","Hệ số thấm $k$ của sét rất nhỏ","Sét cứng hơn","Sét không nén được"],ans:1,explain:"$c_v = k/(m_v \\gamma_w)$ — $k$ sét $\\sim 10^{-9}$ m/s rất nhỏ → cố kết cực kỳ chậm."},
          {q:"Mô hình lò xo – piston của Terzaghi giải thích điều gì?",options:["Cường độ cắt","Quá trình thoát nước và truyền tải trọng trong cố kết","Thấm","Phân loại đất"],ans:1,explain:"Mô hình lò xo (khung hạt) + nước trong xi-lanh (nước lỗ rỗng) giải thích quá trình cố kết."},
        ]
      },
      {
        id:"10-2", title:"Tính lún cố kết",
        content:`## 10.2 Tính Lún Cố kết\n\n### Thông số từ Oedometer\n- $C_c$ = Chỉ số nén | $C_s \\approx C_c/5 \\div C_c/10$\n\n### Lún — NC soil ($OCR = 1$)\n$$S_c = \\frac{C_c}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$\n\n### Lún — OC soil\n$$S_c = \\frac{C_s}{1+e_0} \\cdot H_0 \\cdot \\log\\frac{\\sigma'_0 + \\Delta\\sigma'}{\\sigma'_0}$$`,
        refs:[
          {title:"ASTM D2435 – One-Dimensional Consolidation Test", url:"https://www.astm.org/d2435-11.html"},
          {title:"Compression Index Correlations – Geotechdata.info", url:"https://www.geotechdata.info/parameter/compression-index"},
          {title:"TCVN 4200:2012 – Xác định $C_c$, $C_s$ từ thí nghiệm oedometer", url:"https://luatminhkhue.vn/"},
          {title:"Settlement Analysis Online – Geoengineer.org Tool", url:"https://www.geoengineer.org/"},
        ],
        examples:[
          {title:"Ví dụ 10.2 – Tính lún cố kết sơ cấp", body:`**Cho:** Lớp sét NC dày $H_0 = 4$ m, $e_0 = 1.10$, $C_c = 0.45$, ứng suất hữu hiệu trung bình $\\sigma'_0 = 60$ kPa, tải đắp gây tăng ứng suất $\\Delta\\sigma' = 40$ kPa.\n\n$$S_c = \\frac{0.45}{1+1.10} \\times 4.0 \\times \\log\\frac{60+40}{60}$$\n$$= \\frac{0.45}{2.10} \\times 4.0 \\times \\log(1.667)$$\n$$= 0.2143 \\times 4.0 \\times 0.2219 = \\mathbf{0.190 \\text{ m} = 19.0 \\text{ cm}}$$\n\n**Nhận xét:** Lún 19 cm là đáng kể — cần xem xét phương án xử lý nền.`},
        ],
        quiz:[
          {q:"$C_c$ xác định từ đường cong nào?",options:["Cấp phối hạt","$e - \\log\\sigma'$","Proctor","Thấm"],ans:1,explain:"$C_c$ = độ dốc đường cố kết (virgin compression line) trên biểu đồ $e - \\log\\sigma'$."},
          {q:"Đất OC có $\\sigma'_0 + \\Delta\\sigma' < \\sigma'_c$, nên dùng hệ số nào?",options:["$C_c$","$C_s$","$(C_c+C_s)/2$","$C_c - C_s$"],ans:1,explain:"Khi ứng suất nằm trong vùng quá cố kết (chưa vượt $\\sigma'_c$), dùng $C_s$ (swell/recompression index) nhỏ hơn $C_c$."},
          {q:"$C_c = 0.35$, $e_0 = 0.90$, $H=5$m, $\\sigma'_0=80$kPa, $\\Delta\\sigma'=40$kPa. $S_c=$?",options:["3.5 cm","8.5 cm","12.0 cm","18.0 cm"],ans:1,explain:"$S_c = 0.35/1.90 \\times 5 \\times \\log(120/80) = 0.184\\times5\\times0.176 = 8.5$ cm  (≈ đúng)."},
          {q:"Chỉ số nén lại $C_s$ thường bằng bao nhiêu lần $C_c$?",options:["Bằng $C_c$","$1/2 C_c$","$1/5$ đến $1/10 C_c$","$2C_c$"],ans:2,explain:"$C_s \\approx C_c/5 \\div C_c/10$ — độ dốc đường nén lại nhỏ hơn nhiều đường nén chính."},
          {q:"$\\log(\\sigma'_0+\\Delta\\sigma')/\\sigma'_0$ tăng khi?",options:["$\\sigma'_0$ tăng, $\\Delta\\sigma'$ không đổi","$\\Delta\\sigma'$ tăng, $\\sigma'_0$ không đổi","Cả hai cùng tăng theo tỷ lệ","Không phụ thuộc $\\Delta\\sigma'$"],ans:1,explain:"$\\log(1+\\Delta\\sigma'/\\sigma'_0)$ tăng khi $\\Delta\\sigma'/\\sigma'_0$ tăng, tức $\\Delta\\sigma'$ tăng hoặc $\\sigma'_0$ giảm."},
        ]
      },
      {
        id:"10-3", title:"Lý thuyết Terzaghi và OCR",
        content:`## 10.3 Lý thuyết Cố kết Terzaghi và OCR\n\n### Phương trình cố kết 1D\n$$c_v \\frac{\\partial^2 u}{\\partial z^2} = \\frac{\\partial u}{\\partial t} \\qquad c_v = \\frac{k}{m_v \\cdot \\gamma_w}$$\n\n### Nhân tố thời gian\n$$T_v = \\frac{c_v \\cdot t}{H_{dr}^2}$$\n\n| $T_v$ | $U$ (%) |\n|-------|---------|\n| 0.008 | 10 |\n| 0.197 | 50 |\n| 0.405 | 70 |\n| 0.848 | 90 |\n\n### OCR\n$$OCR = \\frac{\\sigma'_c}{\\sigma'_{v0}}$$`,
        refs:[
          {title:"Terzaghi Consolidation Theory – NPTEL", url:"https://nptel.ac.in/courses/105101083/"},
          {title:"Coefficient of Consolidation cv – Geotechdata.info", url:"https://www.geotechdata.info/parameter/coefficient-of-consolidation"},
          {title:"TCVN 4200:2012 – Xác định hệ số cố kết $c_v$", url:"https://luatminhkhue.vn/"},
          {title:"Overconsolidation Ratio – Geoengineer.org", url:"https://www.geoengineer.org/"},
        ],
        examples:[
          {title:"Ví dụ 10.3 – Tính thời gian cố kết", body:`**Cho:** Lớp sét dày $H = 6$ m, thoát nước 2 chiều, $c_v = 1.8$ m²/năm. Tính thời gian đạt $U = 90\\%$.\n\n$$H_{dr} = H/2 = 3 \\text{ m} \\quad (\\text{thoát 2 chiều})$$\n$$T_v(90\\%) = 0.848$$\n$$t = \\frac{T_v \\cdot H_{dr}^2}{c_v} = \\frac{0.848 \\times 3^2}{1.8} = \\frac{7.632}{1.8} = \\mathbf{4.24 \\text{ năm}}$$\n\n**Nhận xét:** Phải chờ hơn 4 năm để đạt 90% lún — cần xét gia tốc cố kết bằng bấc thấm.`},
          {title:"Ví dụ 10.4 – Xác định OCR từ thí nghiệm Oedometer", body:`Từ đường cong $e - \\log\\sigma'$, điểm gãy (preconsolidation pressure) $\\sigma'_c = 120$ kPa.\n\nỨng suất hữu hiệu hiện tại: $\\sigma'_{v0} = 80$ kPa.\n\n$$OCR = \\frac{\\sigma'_c}{\\sigma'_{v0}} = \\frac{120}{80} = \\mathbf{1.5}$$\n\n**Kết luận:** OCR = 1.5 > 1 → Đất **quá cố kết nhẹ** — lún ít hơn NC soil.`},
        ],
        quiz:[
          {q:"Thoát nước 2 chiều: $H_{dr}$ bằng?",options:["$H$","$H/2$","$2H$","$H/4$"],ans:1,explain:"Thoát 2 chiều: $H_{dr} = H/2$ — đường thấm ngắn hơn, cố kết nhanh hơn."},
          {q:"NC soil có $OCR$ bằng?",options:["$< 1$","$= 1$","$> 1$","$= 0$"],ans:1,explain:"$OCR = 1$: ứng suất hiện tại bằng ứng suất cố kết lớn nhất trong quá khứ."},
          {q:"$c_v = 2$ m²/yr, $H_{dr} = 4$ m, $t = 4$ năm. $T_v =$?",options:["0.125","0.5","2.0","0.25"],ans:1,explain:"$T_v = c_v t/H_{dr}^2 = 2\\times4/16 = 0.5$."},
          {q:"$T_v = 0.848$ ứng với $U =$?",options:["50%","70%","90%","95%"],ans:2,explain:"Từ bảng Terzaghi: $T_v = 0.848 \\rightarrow U = 90\\%$."},
          {q:"Tăng $k$ (hệ số thấm) ảnh hưởng thế nào đến tốc độ cố kết?",options:["Giảm tốc độ","Tăng tốc độ","Không đổi","Phụ thuộc nhiệt độ"],ans:1,explain:"$c_v = k/(m_v\\gamma_w)$ — tăng $k$ → tăng $c_v$ → thoát nước nhanh hơn → cố kết nhanh."},
        ]
      }
    ]
  },
  {
    id:11, title:"Sức chống cắt và ổn định mái dốc", icon:"⛰️", color:"#922b21",
    sections:[
      {
        id:"11-1", title:"Tiêu chuẩn Mohr-Coulomb",
        content:`## 11.1 Tiêu chuẩn Mohr-Coulomb\n\n$$\\tau_f = c' + \\sigma'_n \\tan\\phi'$$\n\n| Tham số | Ý nghĩa | Điển hình |\n|---------|---------|----------|\n| $c'$ | Lực dính hữu hiệu | 0–50 kPa |\n| $\\phi'$ | Góc ma sát trong | 20°–40° |\n\n### Thí nghiệm hộp cắt\n$$\\tau_f = \\frac{F}{A} \\qquad \\sigma'_n = \\frac{N}{A}$$\n\nVẽ 3 điểm $(\\sigma'_n, \\tau_f)$ → đường Mohr-Coulomb → $c'$, $\\phi'$.`,
        refs:[
          {title:"ASTM D3080 – Direct Shear Test", url:"https://www.astm.org/d3080-11.html"},
          {title:"Shear Strength of Soils – Geotechdata.info", url:"https://www.geotechdata.info/parameter/shear-strength"},
          {title:"TCVN 8868:2011 – Thí nghiệm cắt trực tiếp", url:"https://luatminhkhue.vn/"},
          {title:"Mohr-Coulomb Failure Criterion – NPTEL", url:"https://nptel.ac.in/courses/105101083/"},
        ],
        examples:[
          {title:"Ví dụ 11.1 – Xác định $c'$ và $\\phi'$ từ hộp cắt", body:`**Kết quả 3 thí nghiệm:**\n\n| $\\sigma'_n$ (kPa) | $\\tau_f$ (kPa) |\n|---|---|\n| 50 | 52 |\n| 100 | 80 |\n| 200 | 138 |\n\n**Hồi quy tuyến tính:** $\\tau_f = c' + \\sigma'\\tan\\phi'$\n\n**Từ hai điểm (50;52) và (200;138):**\n$$\\tan\\phi' = \\frac{138-52}{200-50} = \\frac{86}{150} = 0.573 \\Rightarrow \\phi' = \\arctan(0.573) = \\mathbf{29.8°}$$\n$$c' = 52 - 50\\times0.573 = 52 - 28.7 = \\mathbf{23.3 \\text{ kPa}}$$`},
        ],
        quiz:[
          {q:"Mohr-Coulomb: $\\tau_f =$?",options:["$c' + \\sigma'\\tan\\phi'$","$c' - \\sigma'\\tan\\phi'$","$\\sigma'/\\tan\\phi'$","$c' \\cdot \\sigma'$"],ans:0,explain:"$\\tau_f = c' + \\sigma'_n\\tan\\phi'$ — sức chống cắt = lực dính + ma sát."},
          {q:"Cát sạch khô ($c' = 0$) có sức chống cắt phụ thuộc vào?",options:["Chỉ $c'$","Chỉ $\\phi'$ và $\\sigma'_n$","Cả $c'$ và $\\phi'$","Không phụ thuộc gì"],ans:1,explain:"$c' = 0$ với cát → $\\tau_f = \\sigma'_n\\tan\\phi'$ — chỉ phụ thuộc ma sát và ứng suất pháp."},
          {q:"$\\phi' = 30°$, $c' = 15$ kPa, $\\sigma'_n = 80$ kPa. $\\tau_f =$?",options:["46.2 kPa","61.2 kPa","78.5 kPa","15 kPa"],ans:1,explain:"$\\tau_f = 15 + 80\\tan30° = 15 + 80\\times0.577 = 15 + 46.2 = 61.2$ kPa."},
          {q:"Thí nghiệm hộp cắt dùng 3 mẫu với 3 mức $\\sigma'_n$ khác nhau để làm gì?",options:["Tiết kiệm thời gian","Xác định cả $c'$ và $\\phi'$ bằng đường hồi quy","Kiểm tra độ lặp lại","Tính $e$"],ans:1,explain:"Ba điểm $(\\sigma'_n, \\tau_f)$ xác định đường thẳng Mohr-Coulomb → $c'$ (tung độ gốc) và $\\phi'$ (góc nghiêng)."},
          {q:"Sét bão hòa phân tích ngắn hạn dùng thông số nào?",options:["$c', \\phi'$","$c_u, \\phi_u = 0°$","$\\phi' = 0°$ và $c' = 0$","$c_u = 0$"],ans:1,explain:"Phân tích ngắn hạn (undrained): $\\phi_u = 0$, $\\tau_f = c_u$ — toàn bộ sức chống cắt từ lực dính."},
        ]
      },
      {
        id:"11-2", title:"Phân tích ổn định mái dốc",
        content:`## 11.2 Ổn định Mái dốc\n\n### Mái dốc vô hạn — Thoát nước\n$$FS = \\frac{\\tan\\phi'}{\\tan\\beta}$$\n\n### Mái dốc vô hạn — Mực nước ngầm ở bề mặt\n$$FS = \\frac{\\gamma'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\phi'}{\\tan\\beta}$$\n\n### Bishop Đơn giản (mặt trượt tròn)\n$$FS = \\frac{\\sum \\left[\\dfrac{c'b + (W-ub)\\tan\\phi'}{m_{\\alpha}}\\right]}{\\sum W\\sin\\alpha} \\qquad m_{\\alpha} = \\cos\\alpha + \\frac{\\tan\\phi'\\sin\\alpha}{FS}$$\n\n**Dự án Pimpama:** $\\beta = 18°$, $c_u = 10$ kPa, $\\phi_u = 0°$ → $FS \\approx 1.1$ ⚠️`,
        refs:[
          {title:"SLOPE/W – Slope Stability Analysis Software", url:"https://www.geoslope.com/products/slope-w"},
          {title:"Bishop's Method – Geoengineer.org Tutorial", url:"https://www.geoengineer.org/education/"},
          {title:"TCVN 8217:2009 – Tính toán ổn định mái dốc đất", url:"https://luatminhkhue.vn/"},
          {title:"Slope Stability – USACE EM 1110-2-1902", url:"https://www.publications.usace.army.mil/"},
        ],
        examples:[
          {title:"Ví dụ 11.2 – Kiểm tra ổn định mái dốc vô hạn", body:`**Cho:** Mái dốc $\\beta = 25°$, $\\gamma_{sat} = 19$ kN/m³, $\\phi' = 32°$, MNN ở mặt đất.\n\n$$\\gamma' = 19 - 9.81 = 9.19 \\text{ kN/m}^3$$\n$$FS = \\frac{\\gamma'}{\\gamma_{sat}} \\cdot \\frac{\\tan\\phi'}{\\tan\\beta} = \\frac{9.19}{19} \\cdot \\frac{\\tan32°}{\\tan25°} = 0.484 \\times \\frac{0.625}{0.466} = 0.484 \\times 1.341 = \\mathbf{0.649}$$\n\n**Kết luận:** $FS = 0.649 < 1.0$ → **Mái dốc không ổn định** — cần giảm độ dốc hoặc hạ MNN.`},
          {title:"Ví dụ 11.3 – Hệ số an toàn tối thiểu yêu cầu", body:`Phân loại theo mức độ quan trọng:\n\n| Loại công trình | $FS_{min}$ |\n|---|---|\n| Mái dốc thông thường | 1.3–1.5 |\n| Đập đất, kè quan trọng | 1.5–2.0 |\n| Mái dốc ảnh hưởng khu dân cư | ≥ 2.0 |\n\nDự án Pimpama: kênh đào cần $FS \\geq 1.5$ → Với $FS \\approx 1.1$ cần xử lý nền.`},
        ],
        quiz:[
          {q:"FS tối thiểu cho mái dốc thông thường?",options:["$\\geq 1.0$","$\\geq 1.5$","$\\geq 3.0$","$\\geq 0.5$"],ans:1,explain:"$FS \\geq 1.5$ — yêu cầu tối thiểu cho hầu hết công trình mái dốc."},
          {q:"Mái dốc vô hạn không thấm: $FS =$?",options:["$\\tan\\phi'/\\tan\\beta$","$\\tan\\beta/\\tan\\phi'$","$c'/(\\gamma H)$","$\\gamma'/\\gamma_{sat}$"],ans:0,explain:"$FS = \\tan\\phi'/\\tan\\beta$ — ổn định khi góc ma sát lớn hơn góc mái."},
          {q:"Khi MNN ở bề mặt, $FS$ so với trường hợp khô thay đổi thế nào?",options:["Tăng","Giảm","Không đổi","Phụ thuộc $\\beta$"],ans:1,explain:"MNN ở bề mặt: $FS = (\\gamma'/\\gamma_{sat})\\times(\\tan\\phi'/\\tan\\beta) < FS_{khô}$ vì $\\gamma'/\\gamma_{sat} < 1$."},
          {q:"Bishop đơn giản giả định lực giữa các mảnh như thế nào?",options:["Bằng 0","Nằm ngang","Vuông góc mặt trượt","Song song mặt dốc"],ans:1,explain:"Bishop đơn giản: lực giữa các mảnh nằm ngang — bỏ qua thành phần đứng."},
          {q:"$\\beta = 20°$, $\\phi' = 35°$, không thấm. $FS =$?",options:["$\\approx 1.6$","$\\approx 1.9$","$\\approx 2.2$","$\\approx 0.8$"],ans:1,explain:"$FS = \\tan35°/\\tan20° = 0.700/0.364 \\approx 1.92 \\approx 1.9$."},
        ]
      }
    ]
  }
];

export const getAllSections = () =>
  CHAPTERS.flatMap(ch =>
    ch.sections.map(s => ({ ...s, chapterId: ch.id, chapterTitle: ch.title, chapterColor: ch.color, chapterIcon: ch.icon }))
  );
