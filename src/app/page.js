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
      question: "Salah satu kategori surat berharga memiliki ketentuan yaitu keputusan transaksi pembelian atau penjualan surat berharga sesuai dengan wewenang Dealer. Apakah kategori dari surat berharga yang memiliki ketentuan tersebut?",
      answer: "Fair Value Through Profit or Loss (FVTPL)",
    },
    {
      question:
        "Hari adalah seorang nasabah yang selalu melakukan pembayaran menggunakan kartu kredit. Ia memiliki BCA Card Platinum dan 2 kartu kredit tambahan, yaitu BCA Visa Singapore Airlines dan BCA Blibli Mastercard. Supaya memudahkan dalam pembayaran tagihan kartu kreditnya, Hari hendak menggunakan layanan Autopay untuk kartu-kartu kreditnya. Apakah semua kartu kredit Hari dapat diberi layanan Autopay?",
      answer: "Bisa untuk BCA Card Platinum dan BCA Blibli Mastercard-nya saja",
    },
    {
      question: "Jenis Transaksi Kliring dalam Sistem Kliring Nasional (SKN) adalah..",
      answer: "Kliring Warkat Debit dan Kliring Kredit",
    },
    {
      question:
        "Pak Dave adalah seorang nasabah KlikBCA Individu sejak tahun 2022. Di Januari 2023, Pak Dave ingin memblokir kartu ATM yang terkait dengan Klik BCA Individu (KBI) karena satu dan lain hal. Untuk proses pemblokiran ini, sistem akan memverifikasi Pak Dave melalui...",
      answer: "Tanggal lahir yang diinput oleh nasabah",
    },
    {
      question: "Analyzing the factors that can affect the level of risk in the future is type of risk...",
      answer: "Operational Risk",
    },
    {
      question:
        "Pak Zayyan setiap bulan nya melakukan transaksi Klik BCA Bisnis (KBB) setidaknya 5-10 transaksi dengan maksimal transaksi yaitu 1 miliar. Setiap melakukan transaksi, Pak Zayyan selalu mendapatkan informasi atas keberhasilan transaksi dan upload file di KBB yang ditampilkan dalam bentuk status. Selain mendapatkan informasi dalam bentuk status transaksi, Pak Zayyan juga mendapatkan informasi dalam bentuk....",
      answer: "Email Notifikasi",
    },
    {
      question: "In the financial institution remittance (Fire) service, remittances from overseas partners to the recipient's account at BCA can be made in currency..",
      answer: "IDR and Valas",
    },
    {
      question:
        "Pak Eky menggunakan Merchant BCA App untuk pengelolaan tokonya. Pada bulan Mei ini, Pak Eky berencana untuk menambah mesin EDC. Batasan maksimum pengajuan pengelolaan hanya 1 jenis pengelolaan per Merchant ID (MID) yang sedang di proses. Jika Pak Eky ingin melakukan pengajuan jenis lain pada MID yang sama, maka yang harus dilakukan oleh Pak Eky adalah...",
      answer: "Menunggu pengajuan sebelumnya selesai di proses",
    },
    {
      question:
        "Pak Jovan merupakan nasabah BCA yang selalu menggunakan BCA Mobile untuk melakukan transaksi. Suatu hari Pak Jovan diminta untuk memberikan akses lokasi perangkatnya saat sedang menggunakan BCA Mobile. Transaksi apakah yang sedang dilakukan Pak Jovan pada BCA Mobile-nya?",
      answer: "Pembukaan rekening Online",
    },
    {
      question: "Pada hari Selasa, 15 Agustus 2023 di jam 10 Pagi, Sally ingin melalukan perubahan layanan/data di KBB Integrated Solution (KBB -IS). Kapankah permohonan Sally akan diproses?",
      answer: "Selasa, 15 Agustus 2023",
    },
    {
      question:
        "Pak Eky menggunakan Merchant BCA App untuk pengelolaan tokonya. Pada bulan Mei ini, Pak Eky berencana untuk menambah mesin EDC. Batasan maksimum pengajuan pengelolaan hanya 1 jenis pengelolaan per Merchant ID (MID) yang sedang di proses. Jika Pak Eky ingin melakukan pengajuan jenis lain pada MID yang sama, maka yang harus dilakukan oleh Pak Eky",
      answer: "Menunggu pengajuan sebelumnya selesai di proses",
    },
    {
      question: "In SENADA, the color that illustrated loyalty, trust, wisdom, and confidence is…",
      answer: "Blue",
    },
    {
      question:
        "Patricia melakukan registrasi untuk melakukan investasi Surat Berharga Negara (SBN), Namun Patricia menemukan data diri yang tertampil pada layar registrasi tidak sesuai dengan data diri nya saat ini. Apakah yang sebaiknya dilakukan oleh Patricia?",
      answer: "Melakukan pengkinian data di kantor cabang terdekat",
    },
    {
      question: "Pada kegiatan transfer dana antar Bank, transaksi pembayaran yang dilakukan secara elektronik tanpa adanya intervensi secara manual dapat disebut sebagai…",
      answer: "Straight-through processing",
    },
    {
      question:
        "Jika dalam suatu kasus izin usaha bank dicabut dan seorang nasabah melakukan pengajuan klaim penjaminan, berapakah pembayaran klaim penjaminan oleh LPS atas simpanan nasabah sebesar Rp 3.5 miliar dimana ia juga memiliki kewajiban ke bank sebesar Rp 600 juta ?",
      answer: "Rp 1,4 miliar",
    },
    {
      question: "Working capital loans that are withdrawn using a Letter of Request for Withdrawal of Credit Facilities / Payment Extension (SPPFK) for a certain period of time is the condition of the credit product..",
      answer: "Time Loan",
    },
    {
      question:
        "Provisions in the law that prohibit the board of Directors, Commisioners, management or employees of the Bank from informing the Customers or the parties, in any way, about the Suspicious Financial Transaction reports is called the…",
      answer: "Anti-Tipping off",
    },
    {
      question:
        "Pak Ares sebagai komisaris dari PT Maju Bersama berencana memperluas jaringan usahanya di bidang budidaya ikan Nila. Untuk itu Pak Ares mengajukan kredit dengan Agunan sertifikat tanah kepada bank BCA di tahun 2023. Berikut yang bukan kriteria sertifikat tanah yang boleh diajukan oleh Pak Ares adalah :",
      answer: "Sertifikat yang dibeli dari yayasan dan telah dibalik nama ke Pak Ares di tahun 2021",
    },
    {
      question: "The Smart Solution Program that provides education infrastructure development, teacher capability development, facilities and infrastructure as well as student coaching is…",
      answer: "BCA Bakti assisted school",
    },
    {
      question: "BCA KlikPay payments cannot be made using…",
      answer: "KlikBCA Bisnis",
    },
    {
      question:
        "Vincent selalu melakukan pengecekan kembali saat tugas nya sudah selesai untuk memastikan apakah yang dikerjakannya sesuai dengan yang diinstruksikan, mulai dari konten, tata bahasa serta penulisan tanda baca. Apakah kriteria dari SMART Solution yang digambarkan oleh Vincent?",
      answer: "Vincent menggambarkan kriteria Teliti karena selalu memberikan hasil kerja dan informasi yang akurat",
    },
    {
      question:
        "Berdasarkan poin- poin berikut, manakah yang termasuk dalam aktivitas Aplikasi MyGrowth? i. Melakukan administrasi apresiasi atau saran terkait tata nilai BCA.​ ii. Mengakses dan melakukan update data serta melaksanakan pengembangan pekerja. iii. Melakukan administrasi performance planning dan competency assessment iv. Melakukan administrasi proses coaching dan penilaian prestasi",
      answer: "i dan iv",
    },
    {
      question: "Untuk mengetahui profil dan tingkat risiko Nasabah Prima, BCA wajib melakukan..",
      answer: "Enhanced Due Diligince (EDD) dan Risk Based Approach",
    },
    {
      question:
        "Bu Naya menemukan kejanggalan pada saat mengecek laporan keuangan bulanan yaitu terdapat beberapa pengeluaran yang tertulis di laporan keuangan namun tidak ada realisasinya. Tindakan yang tepat untuk dilakukan oleh pihak manajemen anti-fraud BCA kepada Bu Naya adalah...",
      answer: "Memberikan dukungan, perlindungan, dan menjamin kerahasiaan data Bu Naya",
    },
    {
      question: "Seorang karyawan tetap BCA merupakan pengguna kartu kredit dan ingin melakukan kenaikan kredit limit sementara. Berapakah yang dapat diberikan kepada karyawan tersebut untuk kenaikan kredit limit sementara?",
      answer: "Maksimal 2 kali dari kredit limit tetap",
    },
    {
      question: "The following are not types of letters with special formats/layouts available at BCA…",
      answer: "Cover Letter",
    },
    {
      question: "The four main objectives of BCA's internal Control System are..",
      answer: "Compliance, Information, Operations, and Risk Culture",
    },
    {
      question: "Miguel is a souvenir seller in a beach tourism area in West Java who wants to apply for business partnership to be able to use the transaction facilities provided by BCA. What is the right application for Miguel to use?",
      answer: "Merchant BCA Apps",
    },
    {
      question: "Yang bukan merupakan prinsip utama dalam Kode Etik Perseroan adalah..",
      answer: "Kepemimpinan",
    },
    {
      question: "The maximum term of the Installment Loan (IL) Working Capital Loan facility is…",
      answer: "5 years",
    },
    {
      question: "Berkomitmen memberikan yang terbaik untuk BCA dengan satu semangat dan satu jiwa merupakan salah satu spirit One BCA…",
      answer: "One Soul",
    },
    {
      question:
        "Bu Rose adalah seorang ibu rumah tangga yang menggunakan m-BCA untuk keperluan sehari-hari nya. Pada Februari lalu, sistem mendeteksi bahwa akun milik Bu Rose selama 30 hari terakhir sudah tidak digunakan lagi untuk bertransaksi. Untuk permasalahan ini, bagaimana cara untuk mengakhiri penggunaan m-BCA nya Bu Rose?",
      answer: "m-BCA Bu Rose akan tertutup secara otomatis oleh sistem",
    },
    {
      question: "The following are the products of credit that can be provided in channeling cooperation are..",
      answer: "People's Business Credit (KUR)",
    },
    {
      question: "Situs BCA yang berisi fitur seputar produk KPR BCA yang meliputi persyaratan KPR, simulasi angsuran KPR, pengajuan KPR secara online, informasi status pengajuan KPR adalah..",
      answer: "Rumahsaya",
    },
    {
      question: "Berikut yang bukan termasuk agunan berupa cash collateral atau setara cash collateral yang dapat diterima oleh BCA dari counterparty Kredit Antar Bank adalah…",
      answer: "Standby L/C non prime bank",
    },
    {
      question: "Basuki memiliki kartu ATM BCA jenis TabunganKu. Jika Basuki ingin melakukan transaksi di ATM, apakah jenis transaksi yang dapat diakses dengan kartu ATM BCA Basuki?",
      answer: "Transfer ke rekening BCA dan Penarikan Tunai",
    },
    {
      question:
        "Pak Yadi menggunakan aplikasi MyWiki untuk memudahkan Ia dalam menemukan istilah- istilah yang biasa digunakan di BCA. Suatu ketika Pak Yadi mencari beberapa istilah dan tidak dapat menemukannya dalam MyWiki. Jika Anda adalah rekan kerja Pak Yadi, apa saran paling tepat yang dapat Anda sampaikan?",
      answer: "Menyarankan Pak Yadi untuk mendaftarkan seluruh istilah dengan ketentuan istilah umum dan tercantum dalam ketentuan yang berlaku",
    },
    {
      question: "Kredit modal kerja yang penarikannya dan pelunasannya dapat dilakukan sewaktu-waktu selama jangka waktu fasilitas kredit melalui rekening Giro​ disebut dengan..",
      answer: "Kredit Lokal",
    },
    {
      question: "Bonita melihat teman nya sedang menggunakan layanan debit online. Bonita tertarik untuk menggunakan layanan tersebut. Apakah hal yang harus diperhatikan Bonita sebelum menggunakan layanan debit online?",
      answer: "Memastikan apakah kartu ATM yang digunakan Bonita adalah kartu paspor BCA berlogo Mastercard",
    },
    {
      question: "Bagaimana cara meminimalkan kemungkinan dampak negatif dari tidak berfungsinya proses intern, kesalahan manusia, kegagalan sistem, dan/atau kejadian-kejadian ekstern ?",
      answer: "Mengembangkan pemahaman mengenai risiko operasional melalui proses identifikasi sendiri (self identification) dan penilaian sendiri (self assessment) atas risiko operasional dan kontrol yang ada",
    },
    {
      question:
        "Pak Yozi menggunakan Merchant BCA Apps sejak tahun 2020. Pada akhir tahun 2022, Pak Yozi mengakhiri penggunaan Merchant BCA-Apps dengan melakukan uninstall aplikasi nya. Pada Maret 2023, Pak Yozi ingin menggunakan Merchant BCA Apps kembali. Apa yang harus dilakukan oleh Pak Yozi jika User ID nya masih aktif?",
      answer: "Menginstall Merchant BCA-Apps kembali di handphone",
    },
    {
      question:
        "Andrew merupakan pengguna layanan KeyBCA. Pada satu waktu, KeyBCA response yang diinput pada saat melakukan transaksi selalu ditolak oleh sistem dengan message out of sync. Apa solusi tepat yang dapat diberikan kepada Andrew atas kondisi tersebut?",
      answer: "Mengganti KeyBCA dengan KeyBCA yang baru",
    },
    {
      question: "Fatih merupakan pengguna eBranch BCA. Saat melakukan pengisian mobile form di eBranch BCA, Fatih mendapat nomor referensi. Berapa lama Fatih dapat menggunakan nomor referensi tersebut?",
      answer: "30 hari sejak pengisian mobile form",
    },
    {
      question:
        "Pak Purwanto mengajukan KUR di Bank XYZ untuk membiayai usaha toko bangunan miliknya. Lalu istri dari Pak Purwanto mengajukan KUR di BCA untuk membiayai usaha yang sama. Apakah tanggapan yang tepat untuk pengajuan KUR BCA yang diajukan oleh istri Pak Purwanto?",
      answer: "Istri Pak Purwanto tidak dapat mengambil KUR di BCA dikarenakan sedang menerima KUR dari Bank lain untuk usaha yang sama.",
    },
    {
      question:
        "Alvin beriniat mengubah kartu fisik yang dimilikinya saat ini menjadi bentuk digital. Salah satu kartu yang ingin diubah Alvin adalah Kartu Paspor BCA yang dimilikinya. Hal yang bisa dilakukan Alvin untuk mengganti kartu paspor fisik menjadi kartu paspor tanpa fisik adalah..",
      answer: "Melakukan penggantian kartu paspor fisik menjadi kartu paspor tanpa fisik di CS Digital",
    },
    {
      question: "Erlina is the head of finance at a manufacturing company who wants to get her employee's salary payment transaction services automatically with BCA. What type of cooperation does Erlina need?",
      answer: "Payroll",
    },
    {
      question:
        "Pak Yanto senantiasa membimbing timnya dalam membuat improvement di area kerja agar proses kerja lebih baik setiap harinya. Hal ini memotivasi timnya untuk menjadi terlibat aktif dalam program BCA Innovation Award. Nilai apakah yang diimplementasikan oleh pak Yanto ?",
      answer: "Naungi",
    },
    {
      question:
        "Aplikasi m-BCA mengalami error selama beberapa hari terakhir yang menyebabkan nasabah tidak bisa melakukan transaksi apapun. Karena error ini, BCA mendapat banyak complain dari nasabah melalui sosial media. Berdasarkan hal ini, proses manajemen risiko terkait teknologi informasi yang wajib dikaji ulang oleh BCA adalah Risko...",
      answer: "Reputasi",
    },
    {
      question: "Berdasarkan opsi berikut, produk yang termasuk sebagai produk untuk modal kerja adalah..",
      answer: "Kredit Ekspor",
    },
    {
      question:
        "Untuk mengurangi timbulnya risiko operasional yang berasal dari profil nasabah dan calon nasabah, BCA memiliki Customer Due Diligence (CDD) / Enhanced Due Dilligence (EDD) yang didukung oleh sistem informasi dan sistem pengendalian internal yang efektif dengan tujuan untuk....",
      answer: "Meminimalkan terjadinya kesalahan dan upaya pencegahan terhadap kejahatan internal",
    },
    {
      question:
        "Terdapat suatu proyek yang sedang dijalankan dan melibatkan beberapa tim. Bu Yuriko sebagai project leader membuat jadwal meeting setiap minggu nya agar terjalin komunikasi yang intensif dan setiap tim dapat terlibat dalam penyampaian ide. Apakah nilai pada The BCA Way yang diterapkan oleh Bu Yuriko?",
      answer: "Team Work",
    },
    {
      question: "Berikut ini yang tidak termasuk pembelian yang bisa dibiayai dengan Investment Financing adalah…",
      answer: "Tertiary",
    },
    {
      question:
        "Victor merupakan seorang pengusaha muda yang mempunyai bisnis dalam bidang jasa penyewaan mesin. Suatu hari, Victor ingin mengambil KUR dan ingin menjadikan salah satu mesin nya sebagai agunan. Apakah agunan tersebut sudah sesuai dengan jenis yang diterima untuk pengambilan KUR?",
      answer: "Sudah sesuai, karena mesin adalah salah satu jenis agunan yang bisa diterima ketika pengambilan KUR",
    },
    {
      question: "Berdasarkan list berikut, jenis transaksi reksa dana yang dapat dilakukan di BCA adalah.. I. Pembayaran II. Pembelian Berkala III. Pengalihan IV. Penjualan Kembali",
      answer: "II, III, dan IV",
    },
    {
      question: "Apakah aplikasi pendukung layanan eService yang digunakan oleh Nasabah..",
      answer: "Self Service Interaction",
    },
    {
      question: "Makna dari Business Continuity Plan (BCP) adalah",
      answer: "Proses manajemen terpadu dan menyeluruh mengenai dampak potensi apabila kritikal bisnis dari BCA tidak dapat berfungsi karena adanya gangguan",
    },
    {
      question:
        "Ibu Regina melakukan pemesanan Surat Berharga Negara (SBN) via online pada hari Rabu pukul 8.00 pagi dan status pemesanan telah berubah menjadi 'menunggu pembayaran' pada pukul 8.15. Setelah itu Bu Regina melanjutkan pekerjaan-nya dan baru menyadari jika Bu Regina belum melakukan pembayaran di jam 10 Pagi. Apakah Bu Regina masih bisa melakukan pembayaran?",
      answer: "Bisa, karena paling lambat 3 jam setelah melakukan pemesanan SBN",
    },
    {
      question: "Harta peninggalan milik pewaris yang meninggal dunia yang tidak bisa disimpan/dititipkan/diagunkan kepada BCA adalah…",
      answer: "Barang yang dijadikan sebagai agunan kredit (fasilitas kredit belum lunas)",
    },
    {
      question: "Kredit yang digunakan untuk melunasi L/C atau SKBDN yang diterbitkan oleh BCA untuk pembiayaan persediaan barang disebut dengan…",
      answer: "Trust Receipt",
    },
    {
      question: "Salah satu hal yang perlu diperhatikan BCA dalam melaksanakan prosedur Layanan Nasabah Prima adalah…",
      answer: "Penerapan Program APU dan PPT",
    },
    {
      question: "Kredit Ekspor merupakan kredit modal kerja yang diberikan untuk membiayai kegiatan produksi, pengumpulan, dan penyiapan barang dalam rangka ekspor. Jenis debitur yang dapat diberikan Kredit Ekspor adalah..",
      answer: "Pemasok",
    },
    {
      question:
        "Pak Scotty mengalami kecelakaan dan meninggal dunia bulan lalu. Pak Scotty masih memiliki rekening pinjaman yang mengatas namakan dirinya. Jika ahli waris Pak Scotty tidak dapat menyelesaikan pinjaman Pak Scotty, maka tidak lanjut nya adalah…",
      answer: "Mengeksekusi agunan",
    },
    {
      question: "Setiap waktu tertentu, rekening Marissa terpotong secara otomatis dalam jumlah tertentu untuk membayar tagihan. Layanan yang Marissa gunakan adalah…",
      answer: "Autodebet",
    },
    {
      question:
        "Kartu Flazz yang digunakan Pak Dony saat ini bersifat unregistered dan sisa saldonya saat ini adalah sebesar Rp2.000.000,-. Pak Dony berencana melakukan top up sebesar Rp500,000,- karena Pak Dony akan melakukan perjalanan jauh. Saldo akhir yang akan terdapat di Kartu Flazz Pak Dony adalah sebesar...",
      answer: "Rp2.000.000,- karena limit maksimum kartu Flazz Pak Dony adalah sebesar Rp 2.000.000,-",
    },
    {
      question:
        "Kate berencana untuk mengajukan kredit jangka panjang dengan fasilitas KPR BCA Produktif Rp 25 miliar dan kredit jangka pendek dengan fasilitas Kredit Lokal Rp 12 Miliar. Dengan total eksposur kredit tersebut, Kate termasuk dalam kategori kredit...",
      answer: "Komersial (M)",
    },
    {
      question: "Berikut ini yang bukan merupakan ketentuan penjaminan KUR BCA adalah..",
      answer: "Kapasitas daya saing usaha mikro, kecil dan menengah perusahaan penjamin",
    },
    {
      question: "Sebelum seorang nasabah dapat melakukan transaksi debit dengan cara mendekatkan ATM BCA tanpa memasukkan PIN (contactless tanpa PIN), berikut yang bukan merupakan ketentuan pengaturan fitur contactless adalah…",
      answer: "Mengubah PIN ATM BCA",
    },
    {
      question:
        "Kartu ATM Rieka tertelan di mesin ATM. Lalu Rieka menelfon Halo BCA untuk menceritakan kejadian yang dialami. Solusi dari karyawan BCA kepada Rieka adalah dengan cara memblokir kartu atm dan setelah itu Rieka harus datang langsung ke cabang terdekat. Kriteria apa yang telah diterapkan karyawan BCA tersebut dalam kaitannya dengan Program Smart Solution?",
      answer: "Telling Solution",
    },
    {
      question: "What currencies cannot be transacted via BCA remittance?",
      answer: "TRY (Lira Turki), KWD (Dinar Kuwait), KRW (Won Korea Selatan)",
    },
    {
      question: "Angelina merupakan Nasabah Solitaire yang mempunyai kartu Paspor BCA untuk sarana bertransaksi. Berikut informasi yang tercantum pada kartu BCA Solitaire yang memiliki kartu paspor BCA sebagai sarana transaksi, yaitu..",
      answer: "Nama Nasabah, Nomor Kartu dan Tanggal Kadaluwarsa",
    },
    {
      question: "Seorang Nasabah mengajukan ganti kartu pada BCA Mobile, namun setelah menerima kartu tersebut, Nasabah tidak melakukan aktivasi selama 1 bulan lebih. Apakah yang akan terjadi jika tidak melakukan aktivasi pada kartu?",
      answer: "Kartu Nasabah akan dihapus oleh sistem dan nasabah mengajukan kartu baru kembali",
    },
    {
      question:
        "Yani akan melakukan perjalanan ke kantor dengan menggunakan transportasi umum KRL. Saat Yani melakukan tap kartu Flazz untuk masuk stasiun, ternyata akses kartu ditolak karena saldo Yani tidak cukup. Yani juga tidak membawa uang cash di dompetnya. Alternatif yang dapat dilakukan Yani adalah..",
      answer: "Melakukan Top Up Flazz menggunakan EDC Self Service Top Up Center",
    },
    {
      question: "Which meaning in SENADA is represented by the determination to work together as well as continuous and never-ending assistance?",
      answer: "Icon",
    },
    {
      question:
        "Kredit yang diberikan oleh dua atau lebih bank / lembaga pemberi pinjaman lainnya (kreditur) dengan persyaratan dan kondisi (terms and conditions) antara debitur dengan masing-masing kreditur dituangkan dalam Perjanjian Kredit terpisah, namun jaminan yang diberikan saling mengikat dalam satu perjanjian jaminan (security sharing agreement) merupakan pengertian dari skema kredit korporasi...",
      answer: "Club Deal",
    },
    {
      question: "Every transaction displayed in Financial Diary (Vindi), will be automatically categorized by the system according to the type of transaction. Which category below is not included in the transaction category at Vindi?",
      answer: "Loan & Financing",
    },
    {
      question: "Azhar ingin menutup rekening Giro, namun Azhar tidak mengetahui dokumen apa saja yang perlu disiapkan sehingga Azhar menelfon ke Halo BCA. Apakah informasi yang tepat untuk disampaikan kepada Azhar?",
      answer: "Azhar perlu menyiapkan dokumen yaitu Kartu Identitas, Kartu paspor, dan warkat yang belum terpakai",
    },
    {
      question: "Ibrahim berencana melakukan pembayaran kartu kredit non BCA miliknya menggunakan rekening BCA melalui m-BCA. Pembayaran kartu kredit Ibrahim dapat dilakukan dengan cara..",
      answer: "Dapat menggunakan menu payment",
    },
    {
      question: "Local Loan (KL) is a working capital credit whose withdrawal and repayment can be made at any time during the term of the credit facility where the withdrawal can be made through..",
      answer: "Current Account",
    },
    {
      question: "Transaksi setoran/tarik tunai bisa dilakukan tanpa kartu dengan cara menginputkan kode berupa 6 digit angka yang didapatkan dari m-BCA ke mesin ATM. Masa aktif kode adalah selama...",
      answer: "1 jam",
    },
    {
      question: "Pengertian dari Walk In Customer (WIC) adalah…",
      answer: "Pihak yang menggunakan jasa Bank namun tidak memiliki rekening pada Bank tersebut dan tidak termasuk pihak yang mendapatkan perintah untuk melakukan transaksi atas kepentingan Nasabah",
    },
    {
      question: "Pak Rino meminta Surat Keterangan Dukungan Keuangan dari Bank (SKDB) sebagai surat pernyataan dukungan keuangan dalam jumlah tertentu. Salah satu kemungkinan tujuan Pak Rino meminta SKDB ini adalah..",
      answer: "Pengajuan tender proyek tertentu",
    },
    {
      question:
        "Pak Rahmat adalah sosok leader yang memiliki hobi membaca berita dan buku. Seiring dengan perubahan zaman, pak Rahmat merasa harus terus meningkatkan kemampuan dan pengetahuannya. Ia aktif mengikuti training-training dan selalu mengikuti project-project di luar pekerjaan utamanya. Sosok pak Rahmat tersebut menggambarkan karakter BCA Leader+ yang disebut..",
      answer: "Enhance Learning Agility & Invest in Yourself",
    },
    {
      question:
        "Pak Abar memiliki beberapa rekening dana di BCA yaitu Giro Rupiah, BCA Dollar dan Tahapan Berjangka . Pada bulan lalu, Pak Abar memiliki tunggakan BCA Personal Loan. Maka rekening dana Pak Abar yang dapat didebet untuk pembayaran tunggakan nya adalah…",
      answer: "Giro Rupiah",
    },
    {
      question: "Rekening BCA yang dapat digunakan sebagai rekening tujuan hasil inkaso adalah..",
      answer: "Tapres",
    },
    {
      question:
        "Bu Giselle melakukan penggantian kartu melalui BCA Mobile dan dikirimkan ke kantor cabang terdekat. Namun Bu Giselle lupa untuk mengambil kartu tersebut lebih dari 60 hari kalender. Apa yang akan terjadi pada kartu yang bu Giselle pesan tersebut?",
      answer: "Dihancurkan dengan berita acara",
    },
    {
      question: "The symbol of the wings as a counterweight to the running of the plane as we must work together in a team to achieve the company's common goals reflects the value called..",
      answer: "Teamwork",
    },
    {
      question: "Every Kredit Kendaraan Bermotor (KKB) must be covered with insurance. The following are types of loss insurance, called..",
      answer: "​Total Lost Only (TLO)",
    },
    {
      question: "Ibu Nabilla mengambil KPR di BCA dan ingin melihat informasi kredit nya di myBCA. Berikut yang bukan merupakan hal yang perlu diperhatikan oleh Ibu Nabilla ketika ingin melakukan akses kredit nya di BCA yaitu..",
      answer: "Sering melakukan transaksi di myBCA",
    },
    {
      question:
        "Pak Handi ingin mendaftarkan diri sebagai pemilik Kartu Kredit, oleh karena itu Pak Handi mengakses fitur Mobile Form di eBranch Apps. Namun setelah selesai mengisi form di eBranch Apps, Pak Handi tidak mendapatkan nomor referensi atas pengisian form transaksi. Langkah penanganan mandiri yang dapat dilakukan oleh Pak Handi adalah..",
      answer: "Mengecek menu Ringkasan Transaksi pada tab Transaksi Tertunda untuk melihat form transaksi yang telah mendapatkan nomor referensi",
    },
    {
      question: "Ensuring the availability of complete, accurate, appropriate and timely reports is the objective of BCA's internal control system in the aspect of…",
      answer: "Information",
    },
    {
      question: "Ivana merupakan seorang wiraswasta yang ingin mengajukan BCA Personal Loan pada bulan ini. Persyaratan tambahan yang harus diperhatikan Ivana untuk pengajuan-nya adalah..",
      answer: "Minimum keanggotaan Kartu Kredit BCA selama 1 (satu) tahun",
    },
    {
      question: "Simon ingin mengambil KUR di BCA untuk membuka usaha butik nya, namun jaminan dari kredit tersebut atas nama orang tua Simon. Apakah diperbolehkan jika menggunakan jaminan atas nama orang tua?",
      answer: "Diperbolehkan, dengan syarat orang tua Simon bersedia menandatangani akte pengikatan agunan (tidak diwakilkan)",
    },
    {
      question:
        "Seorang Nasabah memiliki keinginan untuk melakukan transaksi Surat Berharga Negara (SBN) rekening Join Account, namun terdapat info jika nasabah tersebut mengalami demensia. Apakah nasabah tersebut diperbolehkan untuk melakukan transaksi SBN dengan rekening Join Account?",
      answer: "Tidak diperbolehkan, untuk nasabah tersebut diarahkan untuk melakukan pembukaan rekening dana dengan perlakuan khusus",
    },
    {
      question: "Mr. Ridit has a productive KPR BCA facility of IDR 20 billion and a non-collateral cash credit facility of IDR 5 billion. Then Mr.Ridit is categorized as...",
      answer: "SME Debtors",
    },
    {
      question:
        "Hugo dan Nikita adalah sepasang suami istri yang bekerja di BCA. Kedua-nya ingin mengajukan KUR namun tidak diperbolehkan dikarenakan status mereka adalah karyawan BCA. Apakah solusi yang tepat jika mereka ingin tetap mengambil KUR di BCA?",
      answer: "Yang mengajukan KUR adalah anggota keluarga dari Hugo/Nikita, namun pemilik e-KTP dan Surat Izin Usaha atau Surai izin lain nya atas nama cadeb",
    },
    {
      question: "Pak Isa mempunyai sumber dana yaitu Rekening Tabungan BCA dan Kartu Kredit BCA. Jika Pak Isa melakukan transaksi di suatu Merchant dengan sarana Transaksi EDC. Manakah sumber dana yang tepat untuk Pak Isa gunakan?",
      answer: "Pak Isa dapat menggunakan kedua sumber dana yang dimilikinya",
    },
    {
      question: "Ibu Lisye membutuhkan pembiayaan dari BCA untuk membiayai badan usaha miliknya. Berikut ini adalah persyaratan yang harus dipenuhi oleh Ibu Lisye agar pemberian kredit dapat cair sesuai dengan yang diharapkan adalah…",
      answer: "Badan usaha yang dibiayai Ibu Lisye juga harus memiliki fasilitas kredit di BCA",
    },
    {
      question:
        "Seorang nasabah ingin melakukan perjalanan ke Singapura sehingga nasabah tersebut ingin membuka kartu kredit untuk membeli kebutuhan pribadi di Singapura. Apakah jenis kartu kredit berdasarkan prinsipal nya yang tepat untuk nasabah tersebut?",
      answer: "BCA Card",
    },
    {
      question: "Tindakan pengendalian dilakukan untuk memitigasi risiko operasional dan harus didasarkan pada hasil pengukuran risiko residu yang telah dilakukan atas risiko tersebut. Tindakan mitigasi tersebut antara lain..",
      answer: "Alih daya pada sebagian kegiatan operasional",
    },
    {
      question: "Analyzing the factors that can affect the level of risk in the future is type of risk…",
      answer: "Market Risk",
    },
    {
      question: "Ester wants to open a consumer credit card with the card type BCA Mastercard. The transaction facility on the BCA channel that Ester cannot get by using this type of credit card is..",
      answer: "BCA KlikPay",
    },
    {
      question: "Dandito is a blind person who plans to open a BCA account. The type of account suggested by BCA for Dandito to use is..",
      answer: "Savings account with passport card facility",
    },
    {
      question: "Timothy pergi ke Cabang untuk membuka Tahapan dengan opsi tidak menggunakan Buku tabungan. Keesokan hari nya Timothy berubah pikiran untuk menggunakan Buku Tabungan. Apakah Timothy bisa melakukan perubahan tersebut?",
      answer: "Bisa, dengan mengisi Formulir Fasilitas​ (centang pada pilihan “Tahapan/Tahapan Gold Dengan Buku”)",
    },
    {
      question: "Pak Vito berprofesi sebagai karyawan dan berniat untuk mengajukan permohonan KPR dengan gaji yang diperoleh Pak Vitor sebesar Rp12.000.000,-. Berapakah nilai maksimum angsuran yang didapatkan oleh Pak Vito?",
      answer: "Rp9.000.000,-",
    },
    {
      question: "Mr. Laely plans to apply for a BCA credit card for his business, where the payment of all his credit card bills will be covered by the company. One type of credit card that can be used by Mr.Laely is….",
      answer: "BCA Visa Corporate",
    },
    {
      question: "Dari fitur-fitur di bawah ini, manakah yang bukan merupakan fitur pada Vindi (Financial Diary) yang dapat digunakan oleh nasabah BCA Prioritas dan BCA Solitaire?",
      answer: "Payments & Investments History",
    },
    {
      question:
        "Jika seorang Nasabah Prioritas ingin membuka kartu kredit BCA Amex, maka terdapat beberapa karakteristik dari Kartu Kredit BCA Amex yang perlu diperhatikan. Manakah yang merupakan karakteristik dari Kartu Kredit BCA Amex? I. Terdapat bunga (interest) II. Termasuk charge card, yaitu pembayaran penuh atas semua tagihan III. Dikenakan late charge jika pembayaran dilakukan setelah tanggal jatuh tempo",
      answer: "II dan III",
    },
    {
      question: "Inkaso masuk dapat diartikan sebagai..",
      answer: "Proses penerimaan warkat bank lain yang dikirim dari cabang lain untuk dikliringkan ke bank penerbit warkat yang berada di kota/wilayah kliring yang sama dengan cabang penerima warkat",
    },
    {
      question:
        "Pak Bastan melakukan penyetoran uang tunai menggunakan slip penyetoran sebesar Rp90.000.000,- sebanyak 9 kali, penyetoran slip sebesar Rp130.000.000,- sebanyak 7 kali, dan penyetoran slip sebesar Rp200.000.000,- sebanyak 7 kali dalam jangka waktu kurang dari 3 bulan. Transaksi yang dilakukan Pak Bastan dapat dikategorikan sebagai...",
      answer: "Transaksi keuangan mencurigakan dengan pola transaksi tunai dalam jumlah besar",
    },
    {
      question: "Perseroan senantiasa memperhatikan kepentingan pemegang saham dan pemangku kepentingan lainnya (stakeholders) berdasarkan asas keadilan dan kesetaraan adalah prinsip dari tata kelola perusahaan, yaitu…",
      answer: "Fairness",
    },
    {
      question: "Pak Marcus menginginkan pembatalan transaksi pembayaran belanja barang di KlikBCA Individu. Jika Pak Marcus sudah melakukan pembayaran, maka penanganan yang tepat untuk masalah tersebut adalah..",
      answer: "Menyarankan Nasabah untuk menghubungi Call Centre Company Partner untuk proses penyelesaiannya",
    },
    {
      question: "Ms. Novia is a customer who has been using the Vindi (Financial Diary) app since last year. This month Ms. Novia plans to end her Vindi usage which can be done by..",
      answer: "Uninstall the Vindi App on the smartphone",
    },
    {
      question: "Pak Agung melakukan perpanjangan kredit dimana keputusan kreditnya telah ada sebelum jatuh tempo kredit. Perpanjangan kredit yang dilakukan oleh Pak Agung ini termasuk kedalam..",
      answer: "Perpanjangan normal fasilitas kredit",
    },
    {
      question: "Dalam rangka pencegahan penggunaan Bank sebagai sarana atau tujuan pencucian uang dan/atau pencegahan pendanaan terorisme, maka Bank wajib menerapkan Know Your Employee (KYE), yang meliputi..",
      answer: "Pre-employee screening, pengenalan dan pemantauan terhadap profil karyawan",
    },
    {
      question: "Ozzie adalah nasabah BCA yang baru saja membuka fasilitas m-banking. Ozzie ingin membayar tagihan telepon dan masuk ke menu E-Commerce. Apakah yang dilakukan Ozzie sudah tepat?",
      answer: "Belum Tepat, seharusnya Ozzie membuka menu M-Payment",
    },
    {
      question:
        "BCA Secured Personal Loan memiliki salah satu karakteristik dan ketentuan yaitu merupakan fasilitas kredit cash collateral dengan beberapa Agunan. Berikut yang bukan agunan dari karakteristik dan ketentuan tersebut adalah…",
      answer: "Kontrak Asuransi",
    },
    {
      question: "Jenis rekening yang dapat digunakan sebagai rekening autodebet offline, namun tidak dapat digunakan sebagai rekening autodebet online adalah..",
      answer: "TabunganKu",
    },
    {
      question: "The type of business debit card (BDC) used for the needs of providing funds/operational needs of business customers to their employees is..",
      answer: "Petty Cash Card",
    },
    {
      question: "Lio mengajukan fasilitas kredit investasi (KI) jangka menengah untuk modal usahanya. Lio ingin mengetahui kisaran total nilai kredit yang didapatkannya. Dasar perhitungan total nilai kredit Lio adalah..",
      answer: "Outstanding Pinjaman dan Sisa Plafon yang belum ditarik",
    },
    {
      question: "Rekening join account yang dapat digunakan untuk autodebet online adalah rekening join account dengan status…",
      answer: "Atau",
    },
    {
      question:
        "Bu Vivi berencana ingin menggunakan Klik BCA Individu sebagai sarana transaksi mandiri melalui komputer atau smartphone/HP. Berikut yang dapat dilakukan Bu Vivi untuk melalukan transaksi pembelian di Klik BCA Individu, yaitu…",
      answer: "Voucher untuk PLN Prabayar",
    },
    {
      question: "Application can be used to conduct financial transaction or obtain information related to wealth products marketed by BCA is…",
      answer: "Welma",
    },
    {
      question: "Terjadi gagal autodebet BPJS pada rekening Natasia pada tanggal 4 September 2023 karena saldo yang tersedia pada rekening Natasia tidak mencukupi. Tindakan selanjutnya yang dilakukan oleh BCA terkait hal ini adalah…",
      answer: "Melakukan pendebetan kembali ke rekening Natasia pada tanggal 20 September 2023",
    },
    {
      question:
        "Christofer ingin melakukan pembukaan rekening BCA karena melihat seluruh keluarga nya merupakan nasabah BCA, namun Christofer masih dibawah umur sehingga harus diwakili oleh orang tuanya. Jika pembukaan rekening dilakukan melalui Video Banking, maka data yang harus diisi pada formulir adalah",
      answer: "Nama Orang Tua, Nomor rekening Orang Tua dan Tanda tangan Orang Tua",
    },
    {
      question:
        "Pak Adji (60 tahun) merupakan pensiunan karyawan swasta yang saat ini menggeluti bisnis kuliner di kota kelahirannya. Pak Adji adalah pengguna BCA by Phone. Suatu hari ia melakukan salah input response KeyBCA sebanyak 3 kali secara berturut-turut. Bagaimana penanganan kasus pak Adji ?",
      answer: "Melakukan reset PIN BCA by Phone pada aplikasi CRM",
    },
    {
      question: "Gwen melakukan perpanjangan Tahaka di KBI, namun Gwen ingin saldo dan Bunga Tahaka pada periode sebelumnya dapat dikreditkan ke rekening yang bukan rekening Tahaka. Apakah hal tersebut dapat dilakukan?",
      answer: "Tidak dapat dilakukan, karena bunga yang telah diperoleh sejak awal pembukaan rekening Tahaka akan tetap didalam rekening Tahaka",
    },
    {
      question: 'Munculnya tulisan "Baca KTP Elektronik gagal" saat melakukan penggantian kartu rusak/hilang di CS Digital bisa terjadi karena beberapa penyebab. Berikut yang bukan penyebab munculnya tulisan tersebut adalah..',
      answer: "KTP saat di tap lurus dan berada didalam kotak perangkat pembaca KTP elektronik",
    },
    {
      question: "What do people who want to have Tahapan BCA savings account need to know?",
      answer: "Minimum balance held Rp50.000,- and minimum average balance per month Rp100.000,- after account opening",
    },
    {
      question:
        "Pak Jamal merupakan nasabah Bank BCA yang menggunakan m-BCA. Pada suatu hari, Pak Jamal ingin melakukan transaksi tanpa kartu, namun Pak Jamal salah menginput kode transaksi sebanyak 3 kali berturut turut, yang mengakibatkan kode transaksi terblokir otomatis. Jika Pak Jamal tetap ingin ber transaksi tanpa kartu, apa yang harus dilakukan Pak Jamal...",
      answer: "Membuat kode ulang",
    },
    {
      question: "Saat melakukan registrasi myBCA, Ria melakukan kesalahan penginputan alamat email untuk aktivasi. Hal yang perlu diketahui Ria terkait hal ini adalah..",
      answer: "Ria dapat mendaftar BCA ID kembali dengan alamat email yang benar setelah H+1",
    },
    {
      question:
        "Pak Amir mengajukan Kredit SME di BCA dengan agunan berupa Banknotes. Setelah berkunjung ke salah satu cabang, ternyata terdapat syarat yang harus dipenuhi oleh Pak Amir agar agunan Banknotes yang dimilikinya dapat diterima BCA, yaitu…",
      answer: "Seri penerbitan dan pecahan Banknotes Pak Amir masih berlaku",
    },
    {
      question:
        "Bu Lily ingin mengakses layanan Halo BCA melalui WhatsApp. Bu Lily sudah mendaftarkan nomor telepon seluler resmi BCA pada aplikasi WhatsApp-nya. Apa yang harus dilakukan selanjutnya jika Bu Lily ingin melakukan layanan percakapan online dengan Halo BCA?",
      answer: "Bu Lily harus mengirimkan pesan dengan mengetik #HaloBCA pada awal percakapan",
    },
    {
      question: "Gwen melakukan perpanjangan Tahaka di KBI, namun Gwen ingin saldo dan Bunga Tahaka pada periode sebelumnya dapat dikreditkan ke rekening yang bukan rekening Tahaka. Apakah hal tersebut dapat dilakukan?",
      answer: "Tidak dapat dilakukan, karena bunga yang telah diperoleh sejak awal pembukaan rekening Tahaka akan tetap didalam rekening Tahaka",
    },
    {
      question:
        "Pak Adji (60 tahun) merupakan pensiunan karyawan swasta yang saat ini menggeluti bisnis kuliner di kota kelahirannya. Pak Adji adalah pengguna BCA by Phone. Suatu hari ia melakukan salah input response KeyBCA sebanyak 3 kali secara berturut-turut. Bagaimana penanganan kasus pak Adji ?",
      answer: "Melakukan reset PIN BCA by Phone pada aplikasi CRM",
    },
    {
      question: "Roy merupakan nasabah dari Tahapan Berjangka siMuda dan ingin melihat e-Statement untuk memonitoring pengeluarannya. Apakah sarana yang tepat untuk digunakan Roy melihat e-Statement?",
      answer: "myBCA",
    },
    {
      question: "Tahapan Gold account will be closed automatically by the system if the remaining balance is IDR 0 and there are no debit and credit transactions on the account during the time…",
      answer: "18 months in a row",
    },
    {
      question:
        "Veni mengalami kendala saat melakukan transaksi penggantian kartu, yaitu mesin tidak mengeluarkan kartu ATM baru. Veni memutuskan untuk membatalkan transaksi dan menarik kartu ATM lamanya kembali, namun mesin CS Digital juga tidak mengeluarkan kartu ATM lama Veni. Hal yang dapat dilakukan Veni atas kendalanya tersebut adalah..",
      answer: "Melakukan registrasi kartu tertahan dan penggantian kartu di Customer Service",
    },
    {
      question: "Jenis perhitungan angsuran dimana nilai angsuran yang harus dibayar setiap bulan tetap sampai pinjaman lunas disebut dengan…",
      answer: "Angsuran Anuitas",
    },
    {
      question: "Jasa penagihan yang dilakukan berdasarkan suatu warkat (cek/bilyet giro) kepada pihak yang wajib membayar/pihak tertagih untuk kepentingan dan atas risiko pihak yang memiliki tagihan disebut sebagai..",
      answer: "Inkaso",
    },
    {
      question: 'Berdasarkan ketentuan, penutupan rekening joint account milik salah satu nasabah yang meninggal dunia dengan status join account "DAN" dilakukan oleh…',
      answer: "Digantikan oleh ahli waris yang sah",
    },
    {
      question:
        "Christofer ingin melakukan pembukaan rekening BCA karena melihat seluruh keluarga nya merupakan nasabah BCA, namun Christofer masih dibawah umur sehingga harus diwakili oleh orang tuanya. Jika pembukaan rekening dilakukan melalui Video Banking, maka data yang harus diisi pada formulir adalah",
      answer: "Nama Orang Tua, Nomor rekening Orang Tua dan Tanda tangan Orang Tua",
    },
    {
      question: "The type of account that cannot be opened in a joint account is..",
      answer: "Tahapan Xpresi",
    },
    {
      question: "Jenis rekening yang dapat dibuka oleh Warga Negara Indonesia yang bekerja sebagai Tenaga Kerja Indonesia (TKI) adalah…",
      answer: "Tahapan",
    },
    {
      question:
        "Bu Amel dalam kesehariannya sebagai Kepala Bagian, selalu senantiasa rendah hati dan melayani customer dengan tulus. Ia juga tidak segan membantu anggota timnya yang mengalami kendala. Karakter BCA Leader+ yang dicerminkan oleh Bu Amel adalah…",
      answer: "Always Humble & Serve Others",
    },
    {
      question:
        "Xpresi Passport Cards that are reported lost by savers will be blocked by BCA until a request for opening the blocked card is received. Transaction that can still be done in Tahapan Xpresi with the condition of the card are..",
      answer: "Can receive incoming funds",
    },
    {
      question:
        "Bu Kiki membutuhkan mobil untuk operasional perusahaan, maka Bu Kiki mengajukan Kredit Kendaraan Bermotor(KKB) dengan mendanai sendiri uang muka/DP-nya. Jika harga dari mobil yang akan dibeli Bu Kiki adalah Rp 750 Juta, maka besar persentase minimum uang muka yang harus dibayar oleh Bu Kiki jika NPL KKB BCA nya <5% adalah..",
      answer: "10%",
    },
    {
      question: "Liam melakukan Outward Remittance (OR) melalui aplikasi remittanceBCA pada hari Sabtu, 12 Agustus 2023. Kapankah transaksi Pak Liam akan diproses?",
      answer: "Pada hari Senin, 14 Agustus 2023",
    },
    {
      question:
        "Dean adalah seorang nasabah eBranch Apps yang ingin melakukan penghapusan akun. Namun Dean tidak bisa melakukan penghapusan akun pada eBranch Apps sehingga Dean pergi ke cabang BCA untuk menanyakan alasan tersebut. Apakah penyebab dari gagal melakukan penghapusan akun eBranch Apps?",
      answer: "Dean masih terdapat transaksi pada eBranch yang belum diselesaikan di cabang",
    },
    {
      question:
        "Bu Muna ingin membuka usaha baru yaitu toko makanan. Bu Muna mengajukan pendaftaran kerja sama merchant melalui Merchant BCA – Apps, namun Bu Muna tidak memiliki izin usaha. Maka apakah yang dapat Bu Muna lampirkan sebagai ganti nya?",
      answer: "Foto Lokasi Usaha",
    },
    {
      question: "The right characteristic of Sakuku account is…",
      answer: "No interest given",
    },
    {
      question: "Berikut jenis rekening yang dapat didaftarkan ke KBB Integrated Solution (KBB-IS) yang dapat berfungsi sebagai Rekening biaya dan Rekening Operasional yaitu",
      answer: "Tahapan, Tahapan Xpresi, Tapres",
    },
    {
      question: "Proses autodebet online dari rekening Daud mengalami kegagalan sebanyak 2 kali. Informasi yang harus disampaikan oleh BCA kepada Daud adalah..",
      answer: "Rekening Daud akan diblokir sementara oleh sistem sampai Daud melakukan pembayaran",
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
