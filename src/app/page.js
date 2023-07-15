"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [form, setForm] = useState("");
  const [number, setNumber] = useState(0);
  const [auth, setAuth] = useState(false);
  const [kode, setKode] = useState("");
  const [error, setError] = useState(false);
  const asset = [
    {
      question:
        "Mrs. Aping is a customer of the ABC branch who submitted an application for a letter of reference to BCA in order to open a Giro account at another bank. What is one of the requirements that must be met by Ms. Aping if she wants to submit a letter of reference at another BCA branch?",
      answer: "Show identity card and verify PIN",
    },
    {
      question: "Tabunganku, merupakan salah satu produk simpanan yang salah satu karakteristiknya adalah berbentuk rekening tabungan. berikut yang merupakan ciri-ciri buku tabunganku adalah...",
      answer: "terdapat tulisan 'tabunganku' pada cover depan buku serta nomor rekening pada bagian belakang cover depan buku",
    },
    {
      question: "Lenny gagal melakukan transaksi pengecekan saldo kartu flazz di m-BCA. Hal yang dapat menyebabkan kegagalan transaksi pengecekan saldo ini adalah..",
      answer: "Handphone Lenny tidak memilikifitur near field communication (NFC)",
    },
    {
      question: "yang bukan termasuk kepentingan nasabah dalam penerbitan surat referensi yang diterbitkan oleh BCA atas dasar pengajuan nasabah adalah..",
      answer: "pembuatan pasport",
    },
    {
      question: "transfer dana dengan mata uang valas ke bank penerima baik di dalam maupun di luar negeri melalui KBB-IS disebut dengan...",
      answer: "Cross Border Fund Transfer",
    },
    {
      question:
        "Dalam mengelola risiko konglomerasi keuangan, risiko yang muncul akibat ketidaktepatan dalam pengambilan dan/atau pelaksanaan suatu keputusan serta kegagalan dalam mengantisipasi perubahan lingkungan bisnis, merupakan jenis resiko ?",
      answer: "Risiko Stratejik",
    },
    {
      question: "Dedi ingin memanfaatkan layanan VIRA untuk dapat mengetahui informasi kartu kredit yang ia miliki seperti sisa limit, tagihan, dan transaksi yang belum masuk ke billing statement. Langkah apa yang harus Dedi lakukan?",
      answer: "Dedi harus mendaftarkan customer number/nomor kartu kredit BCAnya melalui channel BCA (registrasi dapat dilakukan melalui aplikasi Chat Banking BCA, m-BCA (BCA mobile), ataupun KlikBCA Individu).",
    },
    {
      question: "Salah satu cakupan penerapan Manajemen Risiko Terintegrasi adalah..",
      answer: "Kecukupan Kebijakan, Prosedur, dan Penetapan Limit Manajemen Risiko Terintegrasi",
    },
    {
      question:
        "Diketahui, Pak Agus mengambil KPR BCA. Pada bulan lalu, Pak Agus jatuh sakit dan meninggal dunia karena penyakitnya. Jika Uzi yang merupakan anak sekaligus ahli waris Pak Agus belum dewasa dan tinggal berdua dengan ibu nya, maka pihak yang dapat mewakili ahli waris untuk bertindak secara hukum adalah..",
      answer: "Orang tua perempuan Uzi",
    },
    {
      question: "Caesar merupakan pemilik KBB organisasi yang ingin melakukan pergantian keyBCA. Dimanakah Caesar dapat melakukan pergantian keyBCA?",
      answer: "Cabang koordinator KBB",
    },
    {
      question: "Berapakah besar biaya penutupan rekening Tahapan Berjangka sebelum jatuh tempo ?",
      answer: "1% dari saldo akhir",
    },
    {
      question: "Beberapa aplikasi teruninstall di Handphone Bu Melisa diantaranya m-BCA dan Halo BCA. Apabila Bu Melisa menginstall ulang m-BCA maka hal yang akan terjadi adalah..",
      answer: "User ID Bu Melisa tetap bisa login di m-BCA tanpa harus melakukan registrasi ulang",
    },
    {
      question:
        "Pak Gani memiliki simpanan Tapres dari pertengahan Maret 2022 dan Tapres yang dipunya Pak Gani blended dengan BCA Prioritas GPN nya. Pada akhir bulan Januari 2023, Pak Gani berniat untuk menutup rekening nya. Berapakah biaya yang harus dikeluarkan Pak Gani selama menggunakan Tapres?",
      answer: "Rp 240.000",
    },
    {
      question: "Berdasarkan list berikut, yang merupakan ketentuan dari BCA Dollar adalah… I. Tidak ada saldo yang ditahan II. Dapat dibuka secara joint account III. Informasi mutasi rekening dalam bentuk Rekening Koran",
      answer: "I dan III",
    },
    {
      question: "Nasabah mengeluh tidak dapat melakukan transaksi meskipun sudah mencoba berulang-ulang. Dari langkah-langkah berikut, manakah jawaban yang kurang tepat untuk disarankan kepada nasabah?",
      answer: "Meminta nasabah melakukan pemblokiran rekening",
    },
    {
      question:
        "Seorang nasabah yang memiliki produk Tahapan Berjangka dengan jangka waktu 36 bulan sejak akhir 2018. Pada pertengahan 2020 kabar duka datang dari Nasabah tersebut yang meninggal dikarenakan kecelakaan lalu-lintas. Berapakah Uang Pertanggungan yang diterima oleh keluarga Nasabah tersebut?",
      answer: "2 x Uang Pertanggungan Maksimal Rp 1,5 miliar",
    },
    {
      question: "Paket yang diterima oleh nasabah setelah selesai melakukan registrasi KlikBCA Bisnis adalah..",
      answer: "Flyer BCA dan KeyBCA Instan",
    },
    {
      question:
        "Apabila nasabah mengajukan keluhan terkait dengan pendaftaran data investor di Welma dengan spesifikasi bahwa nasabah tidak dapat melakukan pendaftaran data investor, maka langkah penanganan yang tepat sebagai solusinya adalah:",
      answer: "Melakukan pengecekan status SID nasabah di aplikasi Avantrade",
    },
    {
      question:
        "Niniek ingin melakukan Top Up Sakuku. Niniek memiliki banyak pilihan selain dari melakukannya di ATM BCA, yakni melalui KlikBCA Individu, m-BCA atau e-channel BCA lainnya yang tersedia. Setelah menambahkan dana di Sakuku, Niniek ingin melakukan transaksi transfer. Sayangnya transaksi transfer dimaksud tidak dapat dilakukan. Berikut ini yang merupakan penyebab gagalnya transfer dana Niniek adalah..",
      answer: "Karena transfer dana ditujukan ke rekening BCA lain dalam mata uang asing",
    },
    {
      question: "Nasabah mengeluh terkait perbedaan antara e-Statement /informasi transaksi nasabah dengan histori transaksi Vindi. Dari beberapa contoh penanganan berikut ini, manakah solusi yang tepat untuk disampaikan kepada nasabah?",
      answer:
        "Menginformasikan bahwa Vindi berfungsi sebagai aplikasi analisa pengeluaran, sehingga terdapat kemungkinan perbedaan data dengan e-Statement/informasi transaksi, dan histori transaksi Vindi tidak dapat digunakan sebagai pengganti bukti transaksi",
    },
    {
      question: "Pak Jericho merupakan pengusaha dan merupakan nasabah BCA Prioritas. Pak Jericho memiliki anak bernama Margareth yang saat ini berusia 17 tahun.Apakah Margareth dapat menjadi member BCA Young Community?",
      answer: " Tidak, karena Margareth belum memenuhi syarat usia meskipun termasuk sebagai nasabah prioritas ",
    },
    {
      question: "If prospective customers want to open a new account online, then the alternative is..",
      answer: "Open a new account through BCA Mobile",
    },
    {
      question:
        "mr. rudi provides support and protection to a fraud whistleblower. Then compiles internal provisions related to fraud complains that occur and also he compiles an effective fraud reporting system that includes clarity of the reporting process, including what pillars of fraud strategy does Mr. Rudi do ?",
      answer: "pillar 2: detection",
    },
    {
      question: "which currency can be used to give BCA Personal Loan Credit Facilities?",
      answer: "Rupiah",
    },
    {
      question: "Langkah tambahan yang diterapkan BCA sebagai upaya pengamanan bagi nasabah saat melakukan registrasi myBCA mobile adalah…",
      answer: "Verifikasi wajah dan verifikasi OTP",
    },
    {
      question: "Firda sent money to her sister (to other bank) twice via myBCA, once via BI-Fast service and once via RTGS service. What is the transfer fee that Firda paid?",
      answer: "Rp 27.500",
    },
    {
      question: "Mrs. Aping submitted a reference letter to BCA for the purpose of opening current at another bank. Then the requirements that must be met by Mrs. Aping for her interest rate ?",
      answer: "Have been a BCA customer for at least 3 months",
    },
    {
      question: "Terdapat beberapa faktor internal yang dapat meningkatkan kemungkinan terjadinya fraud. Dibawah ini yang merupakan faktor internal tersebut yaitu..",
      answer: "Pengendalian keuangan yang kurang memadai",
    },
    {
      question:
        "Pada tahun 2022 kemarin, Pak Joshua mengambil KPR BCA dengan outstanding 700 juta. Bulan April 2023 ini, Pak Joshua ingin memindahkan suku bunga KPR BCA nya ke jenis suku bunga fixed 5 tahun. Untuk perpindahan ini, Pak Joshua harus membayar biaya migrasi sebesar...",
      answer: "Rp 3.500.000",
    },
    {
      question: "Tujuan dari kebijakan BYOD (Bring Your Own Device) adalah..",
      answer: "Pengamanan terhadap perangkat milik pekerja yang digunakan untuk bekerja dan/atau terhubungan dengan network dan/atau resource yang dimiliki BCA",
    },
    {
      question:
        "Sikap yang teguh dalam menjunjung tinggi kejujuran dan keterbukaan, yang diikuti dengan tindakan konsisten dan konsekuen pada peran dalam berbagai situasi dan kondisi untuk membangun kepercayaan nasabah merupakan tata nilai perseroan jenis…",
      answer: "Integritas",
    },
    {
      question:
        "Terdapat seorang nasabah yang ingin membuka rekening salah satu produk simpanan sehingga nasabah tersebut perlu untuk mengisikan data terlebih dahulu. Namun ketika dilakukan pengecekan, data nasabah tidak lengkap. Berikut yang tepat mengenai data tidak lengkap adalah...",
      answer: "Tidak mengisikan tempat dan tanggal lahir",
    },
    {
      question:
        "Proses penerapan manajemen risiko operasional dilakukan dengan langkah-langkah sebagai berikut: I. Pengukuran risiko II. Pengendalian risiko III. Identifikasi risiko IV. Pemantauan risiko Urutan langkah-langkah yang benar adalah..",
      answer: "III-I-IV-II",
    },
    {
      question: "Berikut ini merupakan salah satu produk digital yang memiliki fungsi sebagai uang elektronik untuk melakukan berbagai macam transaksi perbankan di dalam aplikasi smartphone yaitu",
      answer: "Sakuku",
    },
    {
      question: "Apa makna dari Project Financing?",
      answer:
        "Skema pembiayaan dimana kreditur setuju menggunakan proyeksi kemampuan proyek dalam menghasilkan pendapatan sebagai dasar analisa kredit dan menjadi sumber utama pembayaran pinjaman, dibandingkan dengan kelayakan kredit dari pemilik proyek",
    },
    {
      question: "In his work, Mr. Zain applies a proactive attitude to build and improve relationships with customers and looks attractive. What criteria has Mr. Zain implemented in the Smart Solution Program?",
      answer: "Initiative and Attractive",
    },
    {
      question: "What is the maximum deposit value for each customer guaranteed by LPS?",
      answer: "IDR 2 billion",
    },
    {
      question: "Pedoman dasar yang dibutuhkan untuk merealisasikan Misi BCA dalam mencapai Visi BCA di masa depan, Yaitu",
      answer: "The BCA Way",
    },
    {
      question: "Dalam penerapan Manajemen Risiko, BCA harus mengelola 8 Jenis Risiko. Dibawah ini yang merupakan jenis risiko adalah.. i. Risiko Penyimpanan Uang ii Risiko Hukum iii. Risiko Keluhan Pelanggan iv. Risiko VPC",
      answer: "ii saja",
    },
    {
      question: "Yang tidak termasuk dalam kriteria Nasabah/BO yang berisiko tinggi dalam penerapan Program APU dan PPT adalah...",
      answer: "Rekanan berisiko tinggi (high risk counterparty)",
    },
    {
      question: "Andre temporarily blocked his OneKlik account by contacting Halo BCA. A month later, Andre wants to unblock his OneKlik account again, which can be accessed using…",
      answer: "BCA Mobile App",
    },
    {
      question: "Salah satu jenis fasilitas Kendaraan Kredit Bermotor (KKB) adalah KKB Joint Financing (KKB JF). KKB JF memiliki 2 skema pembayaran yaitu..",
      answer: "KKB JF Balloon Payment dan KKB JF Flexy Installment",
    },
    {
      question: "Apakah arti dari Icon SENADA?",
      answer: "Tekad bekerja sama serta pendampingan yang berkesinambungan dan tak pernah putus",
    },
    {
      question:
        "Jackson yang memiliki bisnis perhiasan mengetahui bahwa setiap transaksi tunai dengan nominal kumulatif Rp500 juta sehari akan dilaporkan oleh bank ke pihak berwenang. Keesokannya, ia mulai membagi-bagi uang yang diterimanya menjadi transaksi tunai kecil setiap harinya. Apakah yang dilakukan Jackson merupakan jenis pencucian uang?",
      answer: "Ya, yang dilakukan Jackson termasuk dalam modus pencucian uang jenis Structuring",
    },
    {
      question: "Kebijakan Dasar Perkreditan Bank (KDPB) merupakan landasan bagi Bank dalam melaksanakan bisnis perbankan dengan mempertimbangkan beberapa faktor, yaitu..",
      answer: "Faktor Risiko, Faktor Pendapatan dan Faktor Peluang",
    },
    {
      question: "The minimum placement of funds in accordance with the currency of time deposit money market (DBMM) in accordance with Indonesian currency (Rupiah) is ?",
      answer: "Rp 50.000.000.000",
    },
    {
      question:
        "Media penyampaian informasi internal terkait perusahaan, produk dan aktivitas internal BCA yang terpusat, penyampaian informasi eksternal, penyimpanan dokumen kerja dan pendukung proses kerja internal merupakan fungsi dari?",
      answer: "myBCA Portal",
    },
    {
      question:
        "Pak Ramli berniat untuk melakukan transaksi obligasi korporasi pasar sekunder di cabang dan Pak Ramli berniat untuk melakukan transaksi sebesar 6 Juta. Apakah transaksi yang dilakukan Pak Ramli sudah tepat untuk dilakukan?",
      answer: "Belum tepat, karena minimum transaksi sebesar Rp 5 Juta dan kelipatan Rp 5 juta",
    },
    {
      question: "What are the transfer mechanisms for Valas Transfer types (OR) to other banks in Klik BCA Individu?",
      answer: "Immediate",
    },
    {
      question: "The following are the types of overdue account fees that can be waived according to the terms of the elimination of overdue account fees in SimPel, namely…",
      answer: "Administration fee if the average monthly balance is below the minimum balance",
    },
    {
      question: "i. Website/Situs BCA ii. WhatsApp BCA iii. Official Email BCA iv. m-BCA Yang termasuk sarana akses untuk layanan Halo BCA Chat adalah..",
      answer: "i dan ii",
    },
    {
      question: "Mr. Rendi is an honorary teacher who lives in Solo City and wants to apply for an unsecured loan for personal use. What is the minimum income that Mr. Rendi must have to apply for a loan?",
      answer: "Rp2,000,000",
    },
    {
      question:
        "Lesti merupakan seorang karyawan BCA yang tertarik mengikuti perlombaan inovasi di BCA, Namun Lesti tidak mengetahui persyaratan apa saja yang harus dipenuhi Lesti. Apakah media internal yang tepat untuk Lesti melihat informasi tersebut?",
      answer: "myBCA Portal",
    },
    {
      question: "Which of the following corporate credit products is suitable for its intended use?",
      answer: "Product: Forex Line and Money Market Term Loan for Credit Derivatives",
    },
    {
      question:
        'Mengaburkan asal usul sumber dana dengan mengirimkan dana dari hasil kejahatan melalui rekening pihak ketiga dang menunggu kiriman dana dari luar negeri dan tidak menyadari bahwa dana yang diterimanya merupakan "proceed of crime”, merupakan modus pencucian uang jenis ?',
      answer: "Cuckoo Smurfing",
    },
    {
      question: "Dalam ketentuan Pengolaan user ID dan Password di lingkup BCA, berikut ini yang bukan ketentuan user ID secara umum adalah..",
      answer: "Dinonaktifkan jika tidak digunakan dalam 7 hari",
    },
    {
      question: 'Salah satu tata nilai BCA yaitu "Kerja sama tim (Team work)". Manakah dibawah ini yang menjadi tata nilai kerja sama tim (Team work) di BCA ?',
      answer: "Interaksi dan sinergi yang didasari atas pemahaman diri sendiri dan orang lain untuk mencapai tujuan organisasi.",
    },
    {
      question: "Mrs. Lisa applied for KPR with BCA in 2023 to buy a house in Solo. The plafon approved by BCA for Mrs. Lisa is IDR 5 billion. What is the administration fee that Mrs. Lisa must pay for this KPR Financing?",
      answer: "IDR 1.000.000",
    },
    {
      question: 'BCA menerapkan lima prinsip dasar yang berpedoman pada berbagai ketentuan dan peraturan perundang-undangan yang berlaku. Salah satu prinsipnya yaitu "Transparansi". Apa yang dimaksud transparansi dalam prinsip dasar BCA ?',
      answer: "Keterbukaan dalam mengemukakan informasi yang material dan relevan serta keterbukaan dalam proses pengambilan keputusan.",
    },
    {
      question:
        "Yohana kesulitan saat menggunakan layanan VIRA untuk mengakses info rekening joint account yang dimilikinya. Setelah diteliti, ternyata rekening joint account yang dimiliki Yohana adalah tipe “DAN”. Apa yang sebaiknya disarankan kepada Yohana ?",
      answer: "Menyarankan Yohana untuk membuka rekening joint account dengan tipe “ATAU” agar tetap dapat mengakses transaksi perbankan di VIRA",
    },
    {
      question: "Yang bukan merupakan jenis perbuatan yang tergolong fraud adalah",
      answer: "Memisahkan uang hasil penjualan dan uang kas",
    },
    {
      question:
        "Mimin senantiasa meningkatkan pelayanan untuk memenuhi setiap keperluan nasabah yang datang ke kantor cabang. Ia dinilai sangat baik dan atasannya ingin memberikan apresiasi kepada mimin. Aplikasi apakah yang tepat digunakan atasannya tersebut?",
      answer: "MyXperience, untuk berinteraksi dan berbagi informasi antar Pekerja BCA",
    },
    {
      question:
        "Pak Ari seorang wiraswasta mendatangi kantor Cabang BCA untuk melakukan pembukaan rekening Tahapan anaknya yang masih berumur dibawah 17 tahun. Berdasarkan kondisi tersebut manakah yang bukan merupakan persyaratan pembukaan rekening perseorangan belum dewasa (WNI) diwakili orang tua?",
      answer: "Surat Penetapan Pengangkatan Wali dari Pengadilan Negeri",
    },
    {
      question: "Berikut ini yang bukan termasuk ketentuan karyawan BCA dalam penggunaan sosial media, internet dan email adalah…",
      answer: "Menyebarluaskan informasi yang belum divalidasi di media sosial, internet, atau email",
    },
    {
      question:
        "Pak Roni always conducts socialization related to policies to not tolerate fraud and he also promotes the creation of anti fraud posters/ articles that are socialized on the BCA website. Mr. Roni' anti-fraud strategy is included in the attachment…",
      answer: "Prevention",
    },
    {
      question: "Pak Qevin ingin berinvestasi Reksadana sebesar Rp 2.000.000- (nett), maka total dana yang akan didebet dari rekening Pak Qevin adalah",
      answer: "Rp 2.020.000",
    },
    {
      question: "Tunggakan BCA Personal Loan merupakan kewajiban angsuran kredit debitur BCA Personal Loan yang telah jatuh tempo tetapi tidak terdapat pembayaran. Salah satu penyebab terjadi nya tunggakan adalah…",
      answer: "Debitur meninggal dunia",
    },
    {
      question:
        "Edwin seorang nasabah pengguna Kartu Kredit BCA ingin melakukan pendaftaran asuransi melalui Website BCA namun tidak dapat diproses. Berikut salah satu alasan yang tepat mengapa pendaftaran asuransi Edwin tidak dapat diproses adalah",
      answer: "Data email pengiriman e-Statement Kartu Kredit Edwin belum terdaftar di BCA.",
    },
    {
      question: "Bank wajib merahasiakan segala sesuatu yang berhubungan dengan keterangan mengenai Nasabah. Berikut yang bukan Informasi perbankan yang dijadikan sebagai obyek rahasia Bank adalah..",
      answer: "Tugas dan kewajiban karyawan Bank",
    },
    {
      question: "One of the objectives of the Bank Indonesia - Real Time Gross Settlement (BI-RTGS) system is..",
      answer: "Provide transfer system services that are practical, fast, efficient, safe and reliable",
    },
    {
      question: "KlikBCA Business Customers can attend training related to use or handling of KBB issue through…",
      answer: "Virtual Training KBB",
    },
    {
      question:
        "Fasilitas pembayaran KKB yang diberikan kepada debitur dengan angsuran yang ringan pada awal realisasi kredit dan akan berjenjang naik setiap periode dengan proporsi pokok hutang yang telah ditentukan adalah skema pembayaran KKB jenis…",
      answer: "Flexy Installment",
    },
    {
      question: "Salah satu keunggulan melakukan transfer melalui BI Fast adalah..",
      answer: "Dapat dioperasikan setiap hari selama 24 jam",
    },
    {
      question: "Bulan lalu, Cabang A mengalami suatu kendala. Tim dari Cabang A mengetahui solusi nya dan mengimplementasikan solusi tersebut. Apakah value yang tepat untuk menggambarkan case tersebut?",
      answer: "Continuous Pursuit of Excellence",
    },
    {
      question: "The following transaction is not permitted in KlikBCA Individu…",
      answer: "Account Closure",
    },
    {
      question:
        "Bapak Fauzan ingin mengambil Kredit Cash Collateral Produk Dana. Beliau akan mengambil pinjaman dengan Agunan Produk Dana Khusus Beda Mata Uang, mata uang agunannya dalam IDR, pinjamannya dalam mata uang Valas senilai USD 100.000,- berapakah nilai agunan yang harus disiapkan oleh Bapak Fauzan jika kurs tengah BCA pada tanggal peminjaman adalah USD 1 = IDR 14.700 serta plafon sama dengan nominal pinjaman yang diajukan?",
      answer: "IDR 1.837.500.000",
    },
    {
      question: "Pada Bulan lalu, bilyet deposito milik Pak Dillah terbakar seluruhnya. Pak Dillah dapat mengajukan pelaporan atas bilyet nya dengan syarat dokumen yaitu..",
      answer: "Kartu identitas dan surat keterangan hilang dari kepolisian",
    },
    {
      question: "Kejelasan fungsi dan pelaksanaan pertanggungjawaban organ Perseroan sehingga pengelolaannya berjalan secara efektif masuk ke dalam prinsip pengelolaan tata kelola jenis..",
      answer: "Akuntabilitas",
    },
    {
      question: "Suatu hari rekan kerja Cindy mengalami kendala dengan user ID nya sehingga rekan kerja nya meminjam user ID Cindy dan Cindy memberikan user ID tersebut. Apakah yang dilakukan Cindy sudah tepat?",
      answer: "Tidak tepat, karena pada ketentuan pemegang user ID tertulis jika tidak diperbolehkan meminjamkan kepada orang lain",
    },
    {
      question:
        "Bank yang tidak mempunyai kehadiran secara fisik di wilayah hukum Bank tersebut didirikan dan memperoleh izin, dan tidak berafiliasi dengan kelompok usaha jasa keuangan yang menjadi subyek pengawasan terkonsolidasi yang efektif dapat disebut sebagai..",
      answer: "Shell Bank",
    },
    {
      question: "The interbank transfer service available through m-BCA are…",
      answer: "Realtime Online and BI-FAST",
    },
    {
      question: "Berikut ini yang termasuk pemberian kredit yang dilarang adalah…",
      answer: "Memberikan kredit (dalam mata uang rupiah dan/atau valas) yang ditujukan untuk usaha yang bersifat spekulatif, perjudian dan pencucian uang",
    },
    {
      question:
        "Handoko akan membeli 3 produk Obligasi Pasar Sekunder pilihan melalui Welma yang terdiri dari 2 produk dalam mata uang IDR sejumlah Rp.155 juta dan 1 produk dalam mata uang USD sejumlah USD 10.000,-. Berapakah Jumlah dana yang harus dikeluarkan dari rekening Handoko untuk pembelian Obligasi tersebut jika ditambahkan dengan biaya custodian dan PPN 11%?",
      answer: "Rp.155.105.450 + USD 10.000",
    },
    {
      question: "Produk perbankan elektronik yang dikembangkan dalam rangka memenuhi kebutuhan bisnis nasabah disebut sebagai..",
      answer: "KlikBCA Bisnis",
    },
    {
      question: "Berikut salah satu yang merupakan cakupan dari Kebijakan Dasar Perkreditan Bank adalah…",
      answer: "Prinsip Kehati-hatian dalam Perkreditan",
    },
    {
      question: "Pada bulan lalu, Pak Agus melakukan transaksi atas produk reksadana-nya yang dipasarkan di pasar sekunder dengan surat kuasa dikarenakan Pak Agus berhalangan. Berikut ini yang termasuk syarat Transaksi Pak Agus?",
      answer: "Kartu identitas asli pemberi dan penerima kuasa",
    },
    {
      question: "i. Penurunan suku bunga kredit ii. Tambahan Kredit untuk pelunasan tunggakan kredit iii. Pengurangan Penalti Yang termasuk cara penyelamatan kredit dengan restrukturisasi adalah…",
      answer: "i dan iii",
    },
    {
      question: "Berikut ini yang bukan tujuan penggunaan sistem BI FAST adalah…",
      answer: "Mendukung berkembangnya sistem pembelian dan pembayaran secara online maupun offline yang bersifat well-integrated dan dapat dipantau secara realtime",
    },
    {
      question: "Salah satu jenis reward yang dapat diakses oleh nasabah di myBCA mobile maupun web adalah…",
      answer: "Reward BCA",
    },
    {
      question: "Mrs. Irene wants to take a BCA Secured Personal Loan this month. The maximum Loan To Value that can be given to Mrs. Irene if she chooses Fixed Rate collateral is…",
      answer: "80% of the market price of the collateral at the time of loan processing or the par value, whicever is less",
    },
    {
      question: "If a debtor has a non-cash collateral credit facility of IDR 400 billion, a cash collateral credit facility of IDR 200 billion, and a KPR BCA Produktif facility of IDR 27 billion, then the debtor is categorized as…",
      answer: "Coorporate Debtors",
    },
    {
      question:
        "Ibu Marlina merupakan debitur BCA dengan agunan Fixed Rate (FR) dengan jangka waktu kredit 2 tahun. Diakhir tahun pertama terjadi penurunan nilai pasar FR sampai 103% presentase secure collateral. Bu Marlina tidak mampu meng-cover kekurangan secure collateral tersebut dalam 5 hari kerja. Tindakan apakah yang dapat diambil dalam kasus Bu Marlina tersebut ?",
      answer: "Forced Sell Agunan",
    },
    {
      question: 'Kriteria perilaku layanan SMART Solution, tujuan yang ingin dicapai dari kriteria "Lengkapi" adalah…',
      answer: "Memberikan value dalam bentuk solusi yang menjawab seluruh kebutuhan nasabah",
    },
    {
      question: "Bu Marsha seorang nasabah yang memiliki simpanan sebesar Rp. 2,8 Miliar dan memiliki kewajiban sebesar 500 juta. Berapakah Klaim Penjaminan yang dibayar untuk Bu Marsha? (Mengacu pada nilai simpanan yang dijamin LPS)",
      answer: "1,5 Miliar",
    },
    {
      question:
        "Apabila calon Nasabah/Nasabah/WIC/Beneficial Owner (BO) tergolong berisiko tinggi terhadap kemungkinan pencucian uang dan pendanaan terorisme atau bertransaksi dengan negara berisiko tinggi, maka Bank wajib melakukan prosedur CDD yang lebih mendalam yang disebut dengan..",
      answer: "Enhanced Due Diligence (EDD)",
    },
    {
      question: "Risiko ketidakcukupan dan/atau tidak berfungsinya proses internal, kesalahan manusia, kegagalan sistem, dan/atau adanya kejadian-kejadian eksternal termasuk dalam jenis risiko ?",
      answer: "Risiko Operasional",
    },
    {
      question: "BCA LEADER+ menjadi panduan karakter kepemimpinan bagi setiap Leader BCA, salah satu karakter nya adalah Drive & Persistence, yet Patience. Apa yang dimaksud dari karakter tersebut?",
      answer: "Semangat dan gigih dalam mencapai hasil tanpa tergesa - gesa",
    },
    {
      question: "Dalam menyusun dan menerapkan strategi anti fraud yang efektif, BCA wajib minimal memperhatikan:",
      answer: "Kondisi lingkungan intern dan ektern",
    },
    {
      question: "What is the term or tenor of BCA Personal Loan Products?",
      answer: "12 months, 24 months and 36 months",
    },
    {
      question: "Berikut ini yang tidak termasuk dalam kode etik perseroan adalah….",
      answer: "Tanggung Jawab",
    },
    {
      question: "Berikut ini yang merupakan kredit yang mengandung risiko tinggi dan perlu dihindari adalah",
      answer: "Kredit yang memerlukan keahlian khusus yang tidak dimiliki oleh bank",
    },
    {
      question: "The following are not included in the conditions for closing a BCA Dollar accounts with special treatment, is…",
      answer: "No balance for 3 consecutive years",
    },
    {
      question:
        "Ami adalah seorang nasabah Tahapan Xpresi dan setiap Jumat di minggu ketiga akan terjadi pendebetan biaya administrasi secara otomatis. Namun saldo di dalam rekening Ami tidak mencukupi sehingga terjadi gagal debet. Apa yang akan terjadi selanjutnya terkait biaya administrasi rekening Ami?",
      answer: "Sistem akan melakukan pendebetan ulang sebesar dana yang tersedia pada rekening di hari Senin minggu selanjutnya",
    },
    {
      question: "Pencairan e-Deposito dilakukan oleh nasabah secara langsung melalui myBCA. Nasabah dapat memilih metode pencairan e-Deposito di myBCA. Yang dimaksud dari Metode pencairan segera adalah..",
      answer: "Pencairan dana yang langsung efektif setelah diproses nasabah. Pencairan hanya dapat dilakukan di hari kerja mulai pukul 07.00 WIB hingga 20.30 WIB.",
    },
    {
      question: "Makna dari Strategi Anti Fraud adalah",
      answer: "Strategi BCA yang dirancang untuk mengembangkan, menerapkan dan meningkatkan program kepatuhan anti fraud di BCA yang tersusun secara komprehensif integralistik dan diimplementasikan dalam bentuk sistem pengendalian fraud",
    },
    {
      question: "Dinda merupakan seorang pelajar dan ingin membuka rekening SimPel. Syarat yang harus diketahui Dinda sebelum membuka rekening SimPel?",
      answer: "Berusia dibawah 17 tahun dan belum memiliki kartu identitas",
    },
    {
      question: "The marketing of KPR BCA Products to prospective debtors who are self-employed with the prospective debtors business location different from the lending branch is called…",
      answer: "Marketing Cross Border",
    },
    {
      question: "Pak Evan mengambil kredit kendaraan bermotor dengan skema flexy installment dan memilih tenor selama 3 tahun. Persentase angsuran dari pokok hutang yang harus dibayarkan Pak Evan pada tahun ke 2 dan 3 adalah sebesar…",
      answer: "30% dan 50%",
    },
    {
      question: "Berikut yang termasuk sebagai jenis Risiko Pasar adalah:",
      answer: "Risiko nilai tukar dan Risiko suku bunga",
    },
    {
      question: "Risiko reputasi dapat diartikan sebagai…",
      answer: "Risiko menurunnya tingkat kepercayaan stakeholder yang bersumber dari persepsi negatif terhadap Perseroan",
    },
    {
      question:
        "Nurul berniat untuk memulai berinvestasi salah satunya dengan membeli Surat Berharga Negara (SBN). Namun rekening Nurul masih berupa joint account dengan Ibunya. Apakah nurul dapat melakukan investasi Surat Berharga Negara (SBN)?",
      answer: "Tidak Bisa, Karena SBN adalah single account dan harus menggunakan Nama Investor itu sendiri",
    },
    {
      question: "Berikut yang tidak termasuk dalam jenis rekening dana dapat diblokir dan didebet untuk pembayaran tunggakan BCA Personal Loan adalah...",
      answer: "Deposito",
    },
    {
      question: "Berikut yang termasuk salah satu Misi BCA, Yaitu..",
      answer: "Meningkatkan nilai francais dan nilai stakeholder BCA",
    },
    {
      question: "Untuk menanamkan visi BCA, setiap harinya Insan BCA berusaha untuk mencapai target dan menyelaraskan tujuan bersama yang tercermin dalam slogan...",
      answer: "One Goal",
    },
    {
      question: "Berikut yang merupakan ketentuan Nominal pada Warkat yang digunakan dalam kliring lokal adalah",
      answer: "Nominal pada warkat Nota Debet tidak dibatasi",
    },
    {
      question: "Pak Kudrat mengajukan kredit BCA Secured Personal Loan dan mendapatkan plafon sebesar Rp 700 Juta. Berapakah biaya provisi yang harus ditanggung Pak Kudrat?",
      answer: "Rp 3.500.000",
    },
    {
      question: "Cash Advance merupakan fasilitas penerikan uang dari kartu kredit. Terdapat syarat Cash Advance untuk lokasi pengambilan di Counter BCA Tertentu yaitu..",
      answer: "Kartu Kredit BCA dan KTP/Paspor",
    },
    {
      question: "Infrastruktur sistem pembayaran Bank Indonesia untuk memfasilitasi pembayaran ritel yang dapat diakses setiap saat dapat disebut sebagai…",
      answer: "BI-FAST",
    },
    {
      question: "Yang dimaksud dengan Liveness Detection adalah",
      answer: "Kemampuan sistem dalam mendeteksi objek hidup untuk mencegah pemalsuan identitas",
    },
    {
      question: "Rahmat adalah seorang pelajar yang memiliki Simpanan Pelajar (SimPel) dan ingin melakukan transaksi setoran. Apa yang harus dilakukan oleh Rahmat untuk dapat melakukan transaksi setoran tersebut?",
      answer: "Transaksi langsung tanpa pengajuan khusus melalui counter",
    },
    {
      question: "Cara memulai menganalisis Transaksi Keuangan Mencurigakan dapat dilakukan dengan mengkategorikan nasabah sebagai Nasabah Risiko Tinggi (NRT). Yang dimaksud dengan NRT adalah..",
      answer: "Melakukan kegiatan terkait dengan pencucian uang dan/atau pendanaan terorisme, termasuk PEP (Politically Exposed Person)",
    },
    {
      question: "Dalam kebijakan dasar Manajemen Risiko Terintegrasi, BCA sebagai Entitas Utama dari Konglomerasi Keuangan, BCA harus mengelola 10 (sepuluh) jenis risiko, beberapa diantaranya yaitu…",
      answer: "Hukum, Reputasi, dan Pasar",
    },
    {
      question: "Penyediaan fasilitas kredit baru dan atau tambahan yang digunakan (calon) debitur untuk melunasi sebagian atau seluruh pinjamannya di bank lain/perusahaan non bank/Special Purpose Vehicle (SPV) disebut dengan..",
      answer: "Pengambilalihan Kredit",
    },
    {
      question: "Giro digunakan untuk transaksi bisnis. Jika nasabah ingin mengajukan sarana transaksi finansial rekening Giro, Maka yang dilakukan nasabah adalah…",
      answer: "Melakukan pemesanan warkat ke cabang asal",
    },
    {
      question: "Berikut yang benar terkait status penempatan dana 'ARO (Automated Roll Over)' di dalam Deposito adalah..",
      answer: "Bunga atas penempatan dana dapat ditransfer ke rekening lain di BCA atau bank lain sesuai pilihan nasabah.",
    },
    {
      question: "Berikut ini yang bukan termasuk prosedur pengenalan dan pemantauan profil karyawan dalam penerapan Know Your Employee (KYE) adalah…",
      answer: "Melakukan penelitian melalui internet apabila diperlukan",
    },
    {
      question: "Sesuai dengan Pedoman Tata Kelola Perusahaan BCA terbitan 31 Desember 2018. Pelaksanaan etika terdapat 2 jenis yaitu Etika Profesi dan Etika Pribadi. Berikut yang bukan merupakan Etika Profesi adalah.",
      answer: "Menghindari hal - hal yang dapat menimbulkan situasi conflict of interest",
    },
    {
      question:
        "Mr. Okin is a leader who always understands and feel the condition of other people and able to influence through a persuasive approach. Mr. Okin's behaviour shows the leadership of BCA Leader+ which is concluded in the character..",
      answer: "Empathy & Persuasiveness",
    },
    {
      question:
        "Untuk menentukan risk profile BCA secara keseluruhan, Maka risiko terkait TI (Teknologi Informasi) wajib dikaji ulang bersamaan dengan risiko - risiko lainnya. Risiko yang timbul karena ketidakcocokan/ketidaksesuaian TI adalah",
      answer: "Risiko Strategis",
    },
    {
      question: "Jenis rekening yang dapat didaftarkan sebagai rekening utama KlikBCA Bisnis adalah…",
      answer: "Tahapan Gold dan Giro Rupiah",
    },
    {
      question: "Giro account has 2 types of transaction facilities, namely…",
      answer: "Giro Rupiah and Giro Valas",
    },
    {
      question: "Berikut ini yang tidak termasuk cara pelunasan/pembayaran fasilitas kredit investasi adalah..",
      answer: "Pembayaran cicilan besar di depan, secara bertahap cicilan mengecil dibelakang",
    },
    {
      question: "Slogan yang dikumandangkan untuk mengajak seluruh Insan BCA bergerak bersama dengan 1 pemikiran solid bersama berkarya untuk BCA adalah",
      answer: "One BCA",
    },
    {
      question: "Pada bulan lalu, terdapat nasabah KPR Berbunga Tetap melakukan pelunasan dipercepat tanpa dikenakan penalti pada saat trend suku bunga sedang turun. Faktor penyebab hal ini terjadi masuk ke dalam kategori risiko…",
      answer: "Repricing Risk",
    },
    {
      question: "Manajemen Risiko disusun untuk mengidentifikasi, mengukur, memantau, dan mengendalikan risiko yang timbul dari seluruh kegiatan usaha BCA. Berikut merupakan tujuan penyusunan Kebijakan Dasar Manajemen Risiko BCA adalah…",
      answer: "Meyakinkan bahwa semua risiko dapat dikendalikan dengan baik",
    },
    {
      question: "Aplikasi yang dapat digunakan oleh nasabah/non nasabah untuk melakukan pengisian form dan/atau reservasi sebelum melakukan transaksi di cabang BCA adalah…",
      answer: "eBranch BCA",
    },
    {
      question:
        "Alena adalah nasabah BCA yang ingin memanfaatkan aplikasi remittanceBCA untuk mengirimkan uang valas (OR) kepada saudaranya di luar negeri melalui smartphone. Biaya transaksi sebesar IDR 35.000 yang dibebankan ke Alena merupakan biaya..",
      answer: "Telegraphic Transfer",
    },
    {
      question:
        "i. Aktif bertransaksi di BCA, dengan minimal transaksi selama 1 bulan terakhir di all channel lebih dari 9 kali dan total nominal transaksi lebih dari Rp 230 juta. ii. Memiliki outstanding dana di BCA selama 3 bulan dengan ketentuan untuk nasabah individu >= 200 juta dan nasabah organisasi >= 500 juta Kedua hal tersebut merupakan kriteria nasabah?",
      answer: "BCABIZZ",
    },
    {
      question: "Deva ingin melakukan transaksi penarikan tunai namun Deva lupa membawa kartu ATM miliknya. Hal mandiri yang bisa dilakukan Deva agar bisa melakukan penarikan tunai tanpa harus mengambil kartu ATM miliknya adalah…",
      answer: "Melakukan transaksi tarik tunai cardless melalui myBCA",
    },
    {
      question: "Kesesuaian pengelolaan Perseroan dengan peraturan perundang-undangan yang berlaku dan prinsip-prinsip pengelolaan bank yang sehat adalah penerapan dari prinsip Tata Kelola Perusahaan yang baik, yaitu..",
      answer: "Pertanggungjawaban",
    },
    {
      question: "Penyampaian informasi mengenai total dana dan investasi yang dimiliki Nasabah Prima dilakukan sesuai dengan kesepakatan antara BCA dengan Nasabah Prima yang mencakup informasi terkait…",
      answer: "Informasi rekening kredit, pembiayaan atau pinjaman",
    },
    {
      question: "Fasilitas kredit dengan agunan berupa produk investasi untuk tujuan pembiayaan konsumsi dan karakteristik tertentu adalah",
      answer: "BCA Secured Personal Loan",
    },
    {
      question:
        "Pak Broto nasabah prioritas yang sudah registrasi Vindi secara self service pada smartphonenya. Tujuan Pak Broto adalah agar dapat menganalisa pengeluaran Pak Broto yang melebihi kebiasaannya. Oleh karena itu Pak Broto harus menggunakan fitur ?",
      answer: "Spending Analysis (Analisis Pengeluaran)",
    },
    {
      question:
        'Manuel ingin melakukan pengkinian data melalui aplikasi Mobile Halo BCA. Namun pada prosesnya beliau menerima notifikasi dengan pesan "Nomor yang Anda pilih tidak dapat digunakan, mohon gunakan nomor yang lain." Apa yang sebaiknya Manuel lakukan?',
      answer: "Menunggu 10 menit untuk dapat bisa melakukan request OTP kembali atau Manuel bisa menggunakan nomor handphone yang berbeda.​",
    },
    {
      question:
        "Pak Nadi mengirimkan Outward Remittance (OR) melalui aplikasi remittanceBCA untuk sewa apartemen di Korea Selatan. Mengingat kebutuhannya sangat mendesak dan harus diterima di hari yang sama oleh pihak pengelola apartemen, apa yang harus atau sebaiknya Pak Nadi lakukan?",
      answer: "Transaksi pengiriman uang harus dipastikan dilakukan pada hari kerja dan sebelum pukul 15.00 WIB",
    },
    {
      question: "Sesuai dengan Peraturan Otoritas Jasa Keuangan (POJK), berikut ini yang bukan merupakan faktor penilaian penetapan kualitas kredit adalah…",
      answer: "Tujuan Kredit",
    },
    {
      question: "Mata uang dalam penempatan Term Deposit Valas Devisa Hasil Ekspor Sumber Daya Alam adalah",
      answer: "US Dollar",
    },
    {
      question: "Mencampurkan dana hasil tindak pidana dengan dana dari hasil kegiatan usaha yang legal dengan tujuan untuk mengaburkan sumber asal dana yang ilegal tersebut, merupakan modus pencucian uang jenis ?",
      answer: "Mingling",
    },
    {
      question:
        "Bu Reni (29 tahun) adalah direktur di perusahaan Permen BAC dengan saldo rata rata Rp 525 juta per tahun. Fani (15 tahun) adalah anak dari pemilik perusahaan Permen BAC dimana saldo rata rata Rp 7 Miliar per tahun. Lily (21 tahun) adalah supervisor di perusahaan Permen BAC dengan saldo rata rata Rp 325 juta per tahun. Berdasarkan ketiga profil tersebut, yang memenuhi karakter member BCA Young Community adalah..",
      answer: "Bu Reni",
    },
    {
      question: "Paket yang diterima oleh nasabah setelah selesai melakukan registrasi KlikBCA Bisnis adalah..",
      answer: "Flyer BCA dan KeyBCA Instan",
    },
  ];
  const [data, setData] = useState(asset);
  const handleChangeForm = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setKode(value);
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (kode === "mqbcdpp2023") {
      setError(false);
      setAuth(true);
    } else {
      setError(true);
    }
  };
  const handleChange = (e) => {
    setData(asset);
    e.preventDefault();
    const { value } = e.target;
    setForm(value);
    setNumber(value.length);
  };

  useEffect(() => {
    let result = [];
    data.map((item) => {
      if (item.question.toLowerCase().includes(form.toLowerCase())) {
        result = [...result, item];
      }
    });
    setData(result);
  }, [form]);

  return (
    <main className={styles.main}>
      {!auth ? (
        <div className={styles.authcontainer}>
          <div className={styles.authleftContainer}>
            <Image src="/anime.png" alt="logo" width={440} height={300} style={{ position: "relative", zIndex: 10 }} />
            <Image src="/ellipse.png" alt="logo" width={630} height={630} style={{ position: "absolute" }} />
          </div>
          <div className={styles.authrightContainer}>
            <div className={styles.formContainer}>
              <h1 className={styles.titleAuth}>Kode Akses</h1>
              <input onChange={handleChangeForm} value={kode} name="kode" type="password" className={styles.formStyle} placeholder="Masukan Kode Akses" />
              {error ? <p style={{ fontSize: 10, color: "red" }}>* Kode akses salah, silahkan coba lagi</p> : null}
              <button onClick={handleSubmitForm} className={styles.buttonForm}>
                Masuk
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.leftContainer}>
            <Image src="/anime.png" alt="logo" width={240} height={150} style={{ position: "relative", zIndex: 10 }} />
            <Image src="/ellipse.png" alt="logo" width={330} height={330} style={{ position: "absolute" }} />
          </div>
          <div className={styles.rightContainer}>
            <h1 className={styles.headerTitle}>Masukan keywords</h1>
            <div className={styles.topContainer}>
              <input className={styles.keywordForm} id="keyword" name="keyword" type="text" onChange={handleChange} />
              <p className={styles.amountQuestion}>{"Jumlah Soal : " + asset.length}</p>
            </div>
            <div className={styles.bottomContainer}>
              {data.map((item, index) => (
                <div className={styles.card} key={index}>
                  <div className={styles.qustionContainer}>
                    <span className={styles.question}>
                      <p style={{ fontWeight: 800 }}>SOAL : </p>
                      {item.question}
                    </span>
                    {/* <span className={styles.questionChoice}>{item.question.slice(0, number)}</span>
                    <span className={styles.question}>{item.question.slice(number)}</span> */}
                  </div>
                  <p className={styles.answerFinal}>{"JAWABAN : " + item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
