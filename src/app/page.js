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
      question: "Rafael merupakan nasabah yang sering menggunakan layanan ATS Online. Pada suatu hari, Rafael ingin melakukan perubahan rekening menjadi Tahapan di kantor cabang Cibubur. Apakah persyaratan yang harus dibawa Rafael?",
      answer: "Membawa kartu identitas dan Buku Tahapan Gold yang lama",
    },
    {
      question: "Abraham adalah nasabah yang sedang mengantri lama di Cabang BCA untuk melakukan transaksi. Apakah yang dapat Abraham lakukan agar lebih efisien saat melakukan transaksi selanjutnya di Cabang?",
      answer: "Abraham dapat menggunakan e-branch untuk reservasi ke cabang",
    },
    {
      question:
        "Seorang karyawan mengambil produk simpanan dalam jangka waktu 6 bulan dan sudah memiliki Bilyet. Pada suatu hari karyawan tersebut kehilangan Bilyetnya karena terjadi kebakaran. Hal yang harus dilakukan karyawan tersebut jika ingin tabungannya tetap dicairkan adalah...",
      answer: "Karyawan tersebut melaporkan kepada pihak bank dengan membawa surat keterangan hilang dari kepolisian",
    },
    {
      question:
        "Untuk mempermudah transaksi bisnisnya, Pak Yusuf menggunakan salah satu produk simpanan yang di miliki BCA, yaitu Giro. Pada suatu hari pak Yusuf mendapatkan info jika Pak Yusuf terpilih untuk mendapatkan suku bunga khusus dari BCA. Mengapa Pak Yusuf bisa terpilih untuk mendapatkan suku bunga khusus?",
      answer: "Karena Pak Yusuf memenuhi syarat yang berlaku berdasarkan pertimbangan funding, lending, dan transaksi yang dilakukan.",
    },
    {
      question:
        "Pak Rahmat menceritakan kepada tetangga nya mengenai rekening tabungan yang mempunyai setoran awal sebesar Rp 20 ribu serta mendapatkan bukutabungan. Tetangga Pak Rahmat ternyata tertarik dengan produk simpanan yang tidak menggunakan buku tabungan. Apakah respon yang tepat dari Pak Rahmat kepada tetangganya?",
      answer: "Pak Rahmat menyarankan menggunakan produk simpanan BCA yang lain dikarenakan yang beliau ceritakan adalah produk simpanan Tabunganku",
    },
    {
      question:
        "Gita memiliki rekening tabungan di BCA dengan sisa saldo sebesar Rp 3000. Selama 12 bulan, Gita tidak menabung di rekening nya. Saat ingin menggunakan nya kembali, Gita heran mengapa rekening nya tidak dapat digunakan. Apakah penyebab yang tepat dari kendala yang dialami Gita?",
      answer: "Rekening Gita ditutup oleh sistem karena saldo dibawah Rp 5000 dan tidak aktif selama 12 bulan berturut - turut",
    },
    {
      question: "Jika dalam sebuah kasus kredit, terdapat tanda-tanda penurunan kualitas kredit. Maka Bank harus…",
      answer: "Menyusun program penyelesaian masalah kredit",
    },
    {
      question: "Mobile application yang dapat digunakan sebagai sarana pengajuan kerjasama untuk menjadi Merchant BCA​​ dan mengakses berbagai informasi dan layanan untuk merchant adalah…",
      answer: "Merchant BCA Apps",
    },
    {
      question:
        "Pak Wahyu ingin mencairkan simpanan e-Deposito dengan kondisi Automatic Roll Over (ARO), namun Pak Wahyu menerima notifikasi dari email nya jika bunga gagal dikreditkan ke rekening Pak Wahyu. Atas kegagalan tersebut, kapan Pak Wahyu akan menerima bunga e-Deposito-nya?",
      answer: "Pak Wahyu akan menerima bunga pada saat melakukan pencairan rekening",
    },
    {
      question:
        "Robi merupakan warga negara asing dan baru saja pindah ke indonesia kurang dari 1 tahun. Robi ingin melakukan transaksi di BCA dengan menggunakan Banknotes. Banknotes yang dimiliki Robi adalah pecahan 100 dengan jumlah 100 lembar berseri dalam kondisi tidak terdapat coretan dan lipatan. Apakah mata uang yang digunakan Robi?",
      answer: "USD",
    },
    {
      question:
        "Sarah adalah seorang karyawan yang ingin mengajukan kredit untuk membeli mobil baru. Sebagai debitur baru yang belum pernah melakukan pinjaman sebelumnya, Bank melakukan analisa kondisi perusahaan Sarah. Termasuk ke dalam jenis analisa apakah yang dilakukan oleh Bank tersebut?",
      answer: "Analisa Bonafiditas Debitur",
    },
    {
      question: "Nasabah perlu memberikan akses lokasi perangkat di BCA Mobile saat melakukan transaksi…",
      answer: "Pembukaan rekening online",
    },
    {
      question: "Keuntungan yang didapat oleh nasabah apabila melakukan penyimpanan barang berharga di Safe Deposit Box (SDB) BCA adalah...",
      answer: "Barang yang disimpan mendapat pengamanan berupa khazanah dan pintu jeruji",
    },
    {
      question: "Jangka waktu kredit investasi dengan tujuan pembelian kendaraan bermotor untuk usaha adalah…",
      answer: "6 tahun",
    },
    {
      question:
        "Jika terdapat seorang Nasabah yang ingin membeli kendaraan bermotor dengan Kredit Kendaraan Bermotor (KKB), Nasabah tersebut harus mengetahui terlebih dahulu minimal plafon yang dapat diberikan. Berapakah minimal plafon yang dapat diberikan kepada Nasabah agar dapat melakukan pembelian dengan KKB?",
      answer: "50 juta",
    },
    {
      question: "Terdapat beberapa manfaat dari penggunaan KlikBCA Bisnis - Integrated Solution (KBB-IS) untuk Nasabah dan BCA. Berikut yang merupakan manfaat untuk Nasabah KBB-IS adalah..",
      answer: "Melakukan transaksi perbankan tanpa dibatasi waktu dan tempat",
    },
    {
      question: "Langkah awal cara akses Virtual Assistant Chat Banking BCA (VIRA) dengan menggunakan aplikasi Google Assistant adalah",
      answer: "Memberikan input suara atau teks “Bicara dengan Bank BCA”",
    },
    {
      question: "i. Kelonggaran waktu pembayaran \n ii. Plafon transfer antar Bank \n iii. Suku Bunga per 4 bulan \n Yang termasuk dalam informasi yang tertera pada tagihan Kartu Kredit adalah..",
      answer: "i saja",
    },
    {
      question:
        "Bu Heniza adalah seorang kepala divisi di salah satu cabang BCA. Pada setiap project pekerjaannya, Bu Heniza selalu menginisiasi kerja sama dan mendorong tim-nya untuk terlibat dan berkolaborasi dengan pihak-pihak terkait, guna mencapai tujuan secara optimal. Bu Heniza juga senantiasa memberikan apresiasi secara personal kepada anggota tim yang menjadi motor penggerak di setiap project. Karakter yang dimiliki oleh Bu Heniza adalah penerapan dari BCA Leader+ yaitu...",
      answer: "Collaboration and Personal Appreciation",
    },
    {
      question:
        "Penerapan sistem Newbie & Buddy yang bertujuan untuk membentuk lingkungan yang enjoyable agar seluruh insan BCA dapat mencapai prestasi gemilang untuk tujuan yang dapat dinikmati bersama, merupakan makna dari salah satu slogan OneBCA yaitu ...",
      answer: "One Joy",
    },
    {
      question: "Dalam penerapan Tata Kelola Terintegrasi mencangkup beberapa prinsip salah satunya prinsip kejelasan fungsi dan pelaksanaan tanggung jawab sehingga pengelolaan dapat berjalan efektif yang disebut juga dengan prinsip...",
      answer: "Accountability",
    },
    {
      question:
        "Dalam penerapan kebijakan Bring your own device (BYOD), BCA perlu melakukan identifikasi untuk mendeteksi dan/atau mencegah akses tidak sah dan serangan dari atau melalui perangkat pribadi. Pelaksanaan identifikasi dengan cara tersebut disebut dengan…",
      answer: "Penerapan Intrusion Detection Prevention",
    },
    {
      question:
        "Dian merupakan seorang pemegang kartu kredit BCA yang berencana untuk menaikkan sementara kredit limit miliknya. Apabila Dian adalah seorang pengusaha dengan pendapatan > Rp 10 juta per bulan, maka periode kenaikan kredit limit sementara yang dapat diberikan oleh BCA adalah…",
      answer: "Maksimum 6 bulan dan dapat diperpanjang sesuai kebutuhan",
    },
    {
      question: "Pada minggu lalu, terdapat kejadian pusat data komputer mati di salah satu cabang BCA. Untuk mengantisipasi hal tersebut terjadi lagi dikemudian hari, dilakukan disaster recovery yang memiliki tujuan utama untuk…",
      answer: "Memperkecil dampak kejadian yang dapat menyebabkan gangguan pelayanan kepada para nasabah",
    },
    {
      question: "Pak Fauzi ingin membuka Kartu Kredit Konsumtif dengan tipe kartu yaitu BCA UnionPay yang mempunyai fasilitas Halo BCA Prioritas. Apakah Pak Fauzi dapat membuka Kartu Kredit Konsumtif dengan fasilitas yang diinginkannya?",
      answer: "Tidak bisa, karena tipe kartu BCA Union Pay tidak mendapatkan fasilitas Halo BCA Prioritas",
    },
    {
      question:
        "Pak Matius dan Pak Markus adalah pengusaha di bidang pariwisata, sedangkan Pak Lukas adalah seorang pengusaha di bidang produksi. Pak Matius, Pak Markus, dan Pak Lukas memiliki fasilitas kredit dari beberapa cabang. Pak Matius merupakan debitur pada cabang Pontianak, sedangkan Pak Markus dan Pak Lukas merupakan 1 grup debitur pada cabang Singkawang. Berdasarkan kondisi tersebut, agunan debitur manakah yang harus dibuat saling mengikat?",
      answer: "Pak Markus dan Pak Lukas",
    },
    {
      question: "Membuat checklist pekerjaan secara teratur sebagai sarana monitoring pada saat Work From Home merupakah contoh cerminan dari value ?",
      answer: "Integrity",
    },
    {
      question: "Sari has just signed up for myBCA, but Sari has not done any financial activation on her mobile number. The features that Sari can access are…",
      answer: "Administration and Information Features",
    },
    {
      question:
        "Jika terdapat seorang Nasabah yang ingin membeli motor dengan Kredit Kendaraan Bermotor (KKB), Nasabah tersebut harus mengetahui terlebih dahulu minimal plafon yang dapat diberikan. Berapakah minimal plafon yang dapat diberikan kepada Nasabah agar dapat melakukan pembelian motor dengan KKB?",
      answer: "50 Juta",
    },
    {
      question: "Jenis produk dana yang disediakan oleh BCA dapat digolongkan dalam 3 (tiga) kelompok besar, salah satu nya adalah..",
      answer: "Produk Investasi",
    },
    {
      question: "A continuous effort to achieve excellence in order to provide added value to customers, including the following…",
      answer: "Continuous Improvement of Excellence",
    },
    {
      question: "Perangkat-perangkat untuk mengidentifikasi dan menemukan kejadian fraud yang terdapat di dalam pilar deteksi adalah…",
      answer: "Whistleblowing, Surprise Audit, Surveillance System",
    },
    {
      question: "The validity period of Prioritas BCA cards is for…",
      answer: "5 years",
    },
    {
      question: "Berikut yang merupakan 5 Pilar dalam penerapan program APU dan PPT adalah",
      answer: "Pengawasan aktif Direksi dan Dewan Komisari, Kebijakan dan Prosedur, Pengendalian Intern, Sistem Informasi dan Manajemen, dan Sumber Daya Manusia dan Pelatihan Karyawan",
    },
    {
      question: "Kerugian karena tindakan yang dilakukan pihak ketiga yang dimaksudkan untuk menipu, menyalahgunakan properti atau melanggar hukum, merupakan jenis kejadian risiko operasional berdasarkan kategori?",
      answer: "Kecurangan ekstern",
    },
    {
      question:
        "Dalam pekerjaan nya sehari - hari, Pak Rinatza melaksanakan pekerjaan sesuai ketentuan dan kode etik perusahaan serta tidak jarang juga, Pak Rinatza melakukan langkah perbaikan jika ada kesalahan. Kriteria apa yang sudah diterapkan dalam Program Smart Solution?",
      answer: "Teliti",
    },
    {
      question: "Michael ingin melakukan transaksi penukaran uang sebesar USD 1,200 dengan pecahan 100 tidak berseri dengan kondisi terlipat. Kondisi banknotes yang dimiliki oleh Michael merupakan kondisi..",
      answer: "Cap (C)",
    },
    {
      question: "Efforts to place funds generated from a criminal activity into the financial system, including the money laundering stage of the process…",
      answer: "Placement",
    },
    {
      question: "Sikap jujur tanpa dipengaruhi pendapat dan pertimbangan pribadi atau golongan dalam mengambil keputusan atau tindakan, merupakan prinsip dalam restrukturisasi kredit yang disebut..",
      answer: "Objektivitas",
    },
    {
      question: "BCA dapat melakukan kerja sama dengan perusahaan mitra terkait penawaran produk dan/atau aktivitas tertentu bagi Nasabah Prima dengan memerhatikan prinsip-prinsip kerjasama, salah satu nya yaitu…",
      answer: "Prinsip Kehati-hatian",
    },
    {
      question: "What types of transactions cannot be served at Mobil Kas Online?",
      answer: "Account closing",
    },
    {
      question: "Flazz merupakan alat pembayaran elektronik berbentuk kartu dari BCA yang berfungsi sebagai pengganti uang tunai dan memiliki beberapa jenis. Berikut yang merupakan jenis - jenis kartu Flazz yaitu…",
      answer: "Perdana, Fleet, Unregistered",
    },
    {
      question:
        "Dalam perjanjian kredit, pemilihan domisili hukum harus dilakukan dengan mempertimbangkan proses gugatan serta menghindari adanya pendelegasian sita eksekusi dan lelang di pengadilan. Jika agunan/jaminan berupa benda tidak bergerak berjumlah lebih dari 1, maka pemilihan domisili hukum dalam perjanjian kredit adalah...",
      answer: "Sesuai dengan letak agunan yang nilainya tertinggi",
    },
    {
      question: "Pilar strategi anti fraud yang memuat perangkat-perangkat yang ditujukan untuk mengurangi potensi terjadinya fraud seperti kesadaran anti fraud, identifikasi kerawanan, kebijakan mengenal pegawai disebut pilar..",
      answer: "Pencegahan",
    },
    {
      question: "Memastikan penampilan mulai dari menggunakan seragam sesuai ketentuan perusahaan serta memastikan kerapihan dari seragam yang akan dikenakan, menggambarkan salah satu kriteria dari SMART Solution yaitu ...",
      answer: "Menarik",
    },
    {
      question: "Layanan yang diberikan kepada nasabah pada hari Sabtu dan/atau Minggu di Cabang yang ditunjuk disebut dengan Weekend Banking. Berikut ini yang bukan merupakan tujuan dari Weekend Banking adalah..",
      answer: "Meningkatkan jumlah transaksi Bank",
    },
    {
      question:
        "Dira melakukan transfer ke rekening BCA sebanyak 2 kali dengan nominal Rp 1 juta dan Rp 2 juta. Kemudian Dira kembali melakukan 3 kali transfer ke bank lain dengan metode BI FAST dengan nomimal Rp 2,5 juta, Rp 4 juta, dan Rp 8 juta. Berapakah biaya transfer yang dibayarkan oleh Dira ?",
      answer: "Rp 7,500",
    },
    {
      question:
        "I. Layanan pengambilan dokumen agunan KKB \n II. Transaksi dengan melakukan pengisian slip \n III. Tarikan Giro Rupiah yang selalu dikonfirmasikan \n Manakah yang merupakan Benefit dari Nasabah BCA Solitaire yang sama dengan Benefit Nasabah BCA Prioritas?",
      answer: "I saja",
    },
    {
      question: "Two types of risk in investing in marketable securities are…",
      answer: "Market risk and Liquidity risk",
    },
    {
      question: "Web - based application that provide convenience for customers to conduct trade - related transactions via the internet is…",
      answer: "Client Trade BCA",
    },
    {
      question: "One of BCA's policies to reduce the possibility of operational risk arising from human resources is…",
      answer: "Training and Development",
    },
    {
      question:
        "BCA dapat menerbitkan beberapa surat sesuai pengajuan dari nasabah dengan batasan-batasan tertentu. Selain Surat Referensi dan Surat Keterangan Dukungan Keuangan dari Bank (SDKB), surat lainnya yang dapat diterbitkan berdasarkan pengajuan dari nasabah, yaitu..",
      answer: "Surat Legalisasi Rekening",
    },
    {
      question: "Keuntungan penggunaan aplikasi mobile Halo BCA bagi pengguna adalah..",
      answer: "Praktis, dapat dilakukan di mana saja",
    },
    {
      question: "Status deposito dibedakan menjadi 3 berdasarkan perpanjangan jangka waktu simpanan. Simpanan yang diperpanjang otomatis saat Deposito jatuh tempo, untuk jangka waktu yang sama adalah...",
      answer: "ARO Plus (Automated Roll Over Plus)",
    },
    {
      question: "Berikut ini adalah salah satu hal yang perlu diperhatikan pekerja dalam mengakses media sosial internal BCA melalui aplikasi mobile…",
      answer: "Smartphone yang digunakan untuk menginstal aplikasi mobile media sosial internal BCA harus dipasang password",
    },
    {
      question:
        "Pak Herman merupakan seorang Leader dari departemen Learning and Development. Setiap pagi nya Pak Herman selalu mengadakan briefing sebelum bekerja dan selalu menyampaikan terkait nilai - nilai yang terdapat di BCA. Case di atas menggambarkan nilai yang terkandung dalam SENADA, yaitu..",
      answer: "Dampingi",
    },
    {
      question: "The following is not a type of service that can be done at BCA Express is…",
      answer: "Deposit placement and disbursement",
    },
    {
      question: "The type of currency in which interbank credit can be granted is in..",
      answer: "IDR and USD",
    },
    {
      question: "Internal fraud yang terjadi di suatu perseroan dapat diungkapkan apabila nominalnya lebih dari…",
      answer: "Rp100.000.000",
    },
    {
      question:
        "Zulfikar mempunyai bisnis yaitu menjual produk handmade. Ia ingin memonitor laporan keuangan dengan KBB (KlikBCA Bisnis), namun ia meminta bantuan kepada Siti sebagai wali nya untuk mengajukan registrasi KBB dengan rekening Zulfikar yang diwakili Siti. Apakah Siti dapat mengajukan registrasi KBB menggunakan rekening tersebut?",
      answer: "Tidak bisa, karena rekening Siti tidak join account dengan rekening Zulfikar",
    },
    {
      question:
        "Transaksi antara dua pihak untuk membeli dan menjual valas terhadap rupiah ataupun valas terhadap valas lainnya, dengan harga dan waktu penyerahan yang telah disepakati bersama pada saat transaksi serta melalui transfer ke rekening (tanpa ada fisik valas/banknotes) disebut sebagai transaksi?",
      answer: "Telegraphic Transfer Valuta Asing (TT Valas)",
    },
    {
      question: "Yang merupakan tahapan pelaksanaan penilaian sendiri risiko operasional adalah",
      answer: "Identifikasi Risiko, Pengukuran Risiko, Pengendalian Risiko, Pemantauan Risiko",
    },
    {
      question: "Andi seorang pengusaha yang menjual barang elektronik. Andi ingin menggunakan EDC BCA untuk meningkatkan efisiensi proses pembayaran di tokonya. Apakah jenis kerja sama Merchant yang tepat?",
      answer: "Merchant Reguler",
    },
    {
      question: "Dalam penerapan Program APU dan PPT, kegiatan apa saja yang dilakukan dalam rangka penerapkan kebijakan Customer Due Diligence (CDD) ?",
      answer: "Identifikasi, verifikasi, dan pemantauan terhadap transaksi agar sesuai dengan profil calon Nasabah, Nasabah, atau Walk In Customer (WIC), dan Beneficial Owner (BO)",
    },
    {
      question: "Andi wants to open a new account, but does not have time to come to the BCA branch. Andi decided to open an account online. What application can be used by Andi to open an account online?",
      answer: "BCA Mobile",
    },
    {
      question:
        "Noel seorang nasabah pemegang kartu kredit yang ingin melakukan pendaftaran atas produk asuransi melalui Website BCA. Noel memiliki kartu kredit dengan jenis kartu BCA Visa Corporate. Apakah Noel dapat mengajukan pendaftaran asuransi dengan kartu yang dimilikinya?",
      answer: "Tidak bisa, karena berlaku untuk Kartu Kredit BCA tujuan konsumtif dan kartu SmartCash",
    },
    {
      question: "Sikap yang teguh dalam menjunjung tinggi kejujuran dan keterbukaan untuk membangun kepercayaan nasabah adalah penerapan dari tata nilai perseroan, yaitu…",
      answer: "Integritas",
    },
    {
      question:
        "Bu Zea mendaftarkan diri melalui suatu aplikasi online untuk pengajuan kartu kredit dan sudah terdapat notifikasi approval. Untuk mendapatkan Kartu Kredit secara fisik, Bu Zea mengunjungi cabang BCA terdekat dan bertanya mengenai Kartu Kredit tersebut. Jawaban yang tepat didapati oleh Bu Zea adalah...",
      answer: "Bu Zea dapat melakukan pencetakan kartu fisik dengan mesin cetak instan pada hari yang sama saat Approval dan memasukan kode referensi ACCO",
    },
    {
      question: "The types of card that can be used to make transaction / digital product service at Digital Customer Service are...",
      answer: "Xpresi Passport Card",
    },
    {
      question:
        "Bethany adalah seorang kepala cabang di salah satu cabang BCA. Bethany selalu menyarankan anggota timnya untuk mengikuti training guna mengembangkan kemampuan anggota timnya. Selain itu juga Bethany melakukan private training khususnya untuk anggota timnya yang baru agar dapat berkembang lebih baik di cabangnya. Apakah karakter yang tepat dalam BCA Leader+ yang menggambarkan Bethany?",
      answer: "Reliable on Growing People",
    },
    {
      question: "Willing and able to deliver more than expected is included in the BCA Leader+ category, namely…",
      answer: "(+) Extra Mile",
    },
    {
      question: "Nathan ingin mengajukan Kredit Kendaraan Bermotor (KKB) BCA untuk membeli kendaraan bermotor dalam kondisi bekas. Apakah jenis produk dan jenis agunan yang dapat Nathan ambil?",
      answer: "Jenis produk yaitu KKB Joint Financing dan Jenis Agunan yaitu Kendaraan Bekas",
    },
    {
      question: "Apakah fasilitas pembayaran online atas produk/jasa, dimana nasabah dapat secara langsung melakukan pembayaran pada situs/aplikasi Company Partner yang bekerja sama dengan BCA ?",
      answer: "OneKlik",
    },
    {
      question: "Layanan Nasabah Prima dapat dibagi menjadi 2 kelompok yaitu…",
      answer: "BCA Solitaire dan BCA Prioritas",
    },
    {
      question:
        "Lewis tidak bisa melakukan pengecekan mutasi rekening kartu kredit melalui Virtual Assistant Chat Banking BCA (VIRA). Setelah menyampaikan ke Halo BCA, diketahui bahwa status akun VIRA Lewis saat ini adalah half blocked. Langkah yang dapat dilakukan BCA kepada Lewis terkait hal ini adalah..",
      answer: "Menginformasikan pada Lewis bahwa akun VIRA saat ini half blocked sehingga perlu untuk melakukan registrasi perbankan akun VIRA dengan menghubungkan kartu dengan user ID yang terdaftar di aplikasi",
    },
    {
      question: "Berikut ini yang tidak termasuk ketentuan pengelolaan password media sosial untuk korporasi BCA, yaitu …",
      answer: "Password akun resmi wajib menggunakan strong password",
    },
    {
      question:
        "Roni yang merupakan nasabah pemegang kartu Gold memerlukan uang cash untuk keperluan mendesak sebesar 30jt rupiah. Di lokasi terdekat Roni saat ini terdapat layanan mobil kas online. Transaksi apakah yang dapat Roni lakukan di mobil kas online tersebut?",
      answer: "Penarikan dana di mobil kas online sebesar Rp 30 juta rupiah",
    },
    {
      question: "Yang dimaksud dengan Operasi Moneter adalah",
      answer: "Pelaksanaan kebijakan moneter oleh Bank Indonesia dalam rangka pengendalian moneter melalui operasi pasar terbuka dan koridor suku bunga (Standing Facilities).",
    },
    {
      question: "The repayment period for principal and interest installments of an invesment loan is…",
      answer: "Once a month",
    },
    {
      question:
        "Apabila seorang teller menggunakan data nasabah produk simpanan untuk kebutuhan pribadi yaitu mendapatkan poin dari suatu program member get member, apakah tindakan yang dilakukan teller tersebut dapat dikategorikan sebagai fraud?",
      answer: "Ya, termasuk dalam penyimpangan yang sengaja dilakukan, fraud yang tergolong ke dalam pembocoran informasi",
    },
    {
      question: "Andi seorang pengusaha yang menjual barang elektronik. Andi ingin menggunakan EDC BCA untuk meningkatkan efisiensi proses pembayaran di tokonya. Apakah jenis kerja sama Merchant yang tepat?",
      answer: "Merchant Reguler",
    },
    {
      question: "Customers can book airline tickets and hotel reservation directly through BCA Mobile. BCA Mobile features used for this activity is..",
      answer: "Lifestyle",
    },
    {
      question: "Tim Pak Yanto senantiasa membimbing, mendukung dan mengayomi rekan kerjanya dalam membuat improvement agar proses kerja lebih baik setiap harinya. Nilai apakah yang diimplementasikan oleh Tim Pak Yanto?",
      answer: "Naungi",
    },
    {
      question:
        "Seorang Nasabah telah terdaftar untuk layanan Klik BCA Individu dan ingin melihat rekening koran elektronik (E-Statement) melalui Klik BCA Individu. Jika ingin melihat rekening koran, apakah jenis transaksi yang diakses oleh Nasabah tersebut?",
      answer: "KBI (Klik BCA Individu) Versi Full Site",
    },
    {
      question: "The head of the plane as a symbol of the spearhead of the company that leads to value creation and customer satisfaction is a symbol of the value…",
      answer: "Customer Focus",
    },
    {
      question: "Salah satu tujuan dari kriteria SMART Solution yang ingin dicapai yaitu memiliki semangat memberikan yang terbaik bagi nasabah internal dan eksternal. Apakah kriteria yang dimaksud?",
      answer: "Antusias",
    },
    {
      question: "Laura mempunyai fasilitas KPR BCA Produktif sebesar Rp 10 Miliar, fasilitas kredit non cash collateral Rp 7 Miliar dan fasilitas kredit cash collateral Rp 1 Miliar. Kesimpulan yang tepat dari case tersebut adalah..",
      answer: "Total Eksposur kredit yaitu Rp 18 Miliar, Laura dikategorikan sebagai Debitur SME",
    },
    {
      question: "Makna dari Risiko nilai tukar yang tepat adalah…",
      answer: "Risiko kerugian akibat pergerakan yang berlawanan dari nilai tukar pada saat bank memiliki posisi terbuka",
    },
    {
      question:
        "Bu Wulan merupakan seorang Nasabah yang menggunakan produk Tahapan Berjangka. Jika Bu Wulan ingin melakukan pengecekan saldo, berikut yang tidak termasuk sarana untuk melakukan pengecekan saldo Tahapan berjangka yaitu melalui",
      answer: "OneKlik",
    },
    {
      question:
        "Budi sedang berjalan-jalan ke Thailand. Saat berbelanja, Budi ingin melakukan pembayaran secara cashless karena uang tunai yang dibawa-nya kurang. Aplikasi apakah yang dapat Budi gunakan untuk melakukan pembayaran tersebut?",
      answer: "QRIS di BCA Mobile",
    },
    {
      question: "Di bawah ini yang termasuk dari ketentuan pemberian Kredit Kendaraan Bermotor- Joint Financing (KKB-JF) Produktif adalah..",
      answer: "Nilai KKB-JF Produktif yang dibiayai BCA adalah maksimum 80% dari harga on the road",
    },
    {
      question:
        "Ibu Bertha berniat untuk menyisihkan sebagian uangnya ke produk Deposito BCA dengan jangka waktu 3 bulan. Saldo awal yang diberikan oleh Ibu Bertha sebesar Rp 150 juta per tanggal 1 Januari 2023 dengan bunga sebesar 4%. Berapakah bunga deposito yang dibayarkan saat jatuh tempo kepada Ibu Bertha jika beliau tidak memperpanjang depositonya? (dengan asumsi 1 bulan= 30 hari, 1 tahun= 360 hari, pajak deposito= 20% dan nominal sama dengan saldo awal)",
      answer: "Rp1.200.000",
    },
    {
      question: "Terdapat salah satu karakteristik dari Safe Deposit Box (SDB) yaitu Nasabah mengakses SDB secara mandiri tanpa bantuan petugas cabang. Apakah Jenis SDB dengan karakteristik tersebut?",
      answer: "Robotic Safe Deposit Box (RSDB)",
    },
    {
      question: "Customers can register KlikBCA individual (KBI) through..",
      answer: "Mesin ATM BCA",
    },
    {
      question: "Last Month, There was a case of trying to avoid reporting by fragmenting transactions. This money laundering action was carried out by many actors. The money laundering mode is categorized into…",
      answer: "Smurfing",
    },
    {
      question: "Monik melakukan pembelian makanan dan hendak melakukan pembayaran, namun Monik tidak membawa uang cash ataupun kartu debit miliknya. Opsi pembayaran yang dapat dilakukan oleh Monik adalah..",
      answer: "Membayar menggunakan QRIS",
    },
    {
      question: "Debitur yang memiliki kredit non cash collateral dengan total eksposur kredit per grup debitur > Rp 500 Miliar merupakan kategori kredit produktif yaitu …",
      answer: "Kredit Korporasi",
    },
    {
      question: "Selain di cabang, nasabah dapat melakukan transaksi pembukaan rekening dan pencetakan kartu rekening Tahapan di...",
      answer: "CS Digital",
    },
    {
      question:
        "Untuk mengurangi kasus anti fraud Pak Marteen dan tim melakukan sosialisasi kepada pihak internal dan eksternal BCA terkait kebijakan dan komitmen BCA untuk tidak memberikan toleransi pada tindakan fraud. Tindakan yang dilakukan Pak Marteen tersebut merupakan upaya untuk menumbuhkan Anti Fraud Awareness melalui?",
      answer: "Penyusunan dan Sosialisasi Deklarasi Anti Fraud dan Identifikasi Kerawanan",
    },
    {
      question:
        "Louis melakukan top up kartu Flazz melalui ATM, namun karena terjadi error saldo kartu Flazz Louis tidak bertambah padahal saldo ATM-nya sudah terdebet. Louis melaporkan hal ini dan pihak BCA akan mengembalikan saldo Louis yang terdebet melalui..",
      answer: "Transfer ke nomor rekening yang digunakan Louis untuk Top Up",
    },
    {
      question:
        "Yohanes ingin membuka rekening melalui layanan eService. Yohanes menyiapkan beberapa persyaratan yaitu Data di KTP-el, Foto KTP-el, Guratan tanda tangan, dan Nomor handphone yang sudah terkoneksi dengan fasilitas BCA Mobile. Apakah persyaratan yang disiapkan Yohanes sudah tepat?",
      answer: "Belum tepat, seharusnya menggunakan nomor handphone yang belum terkoneksi dengan BCA Mobile",
    },
    {
      question:
        "Pak Wonu hendak membeli rumah tinggal dengan Luas Bangunan 70 m2 dengan mengajukan KPR BCA. Pak Wonu saat ini masih lajang. Hasil iDeb (Informasi Debitur) dan Surat pernyataan LTV menunjukkan Pak Wonu telah memiliki fasilitas KPR BCA. Berapakah besaran LTV Maksimum yang didapatkan oleh Pak Wonu untuk fasilitas KPR BCA yang baru diajukan?",
      answer: "0.9",
    },
    {
      question: "m-BCA account will be closed automatically if it has not been use for any financial or non-financial transaction for a period of…",
      answer: "5 years",
    },
    {
      question:
        "Bu Rini berencana untuk mengajukan kredit jangka panjang dengan fasilitas KPR BCA Produktif Rp 1 miliar, fasilitas cash collateral Rp 750 juta dan fasilitas non cash collateral Rp 750 juta. Dengan total eksposur kredit tersebut, Bu Rini termasuk dalam kategori kredit...",
      answer: "Small and Medium Enterprises (SME)",
    },
    {
      question:
        'Gideon memiliki kartu ATM Chip dengan Fitur Flazz, Suatu hari Gideon ingin melakukan Top Up Flazz, Namun keluar keterangan pada layar Electronic Data Capture (EDC) yaitu "Proses Kartu Gagal". Apakah penyebab yang tepat dari kendala yang dialami oleh Gideon?',
      answer: "Kartu ATM chip dengan fitur flazz sudah expired",
    },
    {
      question: "If you want to block a credit card, there are several methods you can use. The following is not a way to block a credit card...",
      answer: "SMS Banking",
    },
    {
      question: "Raul merupakan pengusaha yang memerlukan layanan pick up uang tunai. Ia memiliki total nominal transaksi sebesar Rp 250 juta dalam 1 bulan terakhir ini. Raul sudah memenuhi kriteria nasabah…",
      answer: "BCABIZZ",
    },
    {
      question: "Bu Rahmi mempunyai produk simpanan yaitu TabunganKu. Apa saja bukti kepemilikan yang dimiliki Bu Rahmi atas produk simpanan yang ia punya?",
      answer: "Buku TabunganKu dan fasilitas kartu TabunganKu",
    },
    {
      question:
        "Bu Anna adalah seorang pensiunan. Meskipun sudah pensiun, Bu Anna memiliki tabungan yang cukup dan ingin memanfaatkannya untuk berinvestasi, sehingga Bu Anna memberikan kuasa penuh kepada putra nya untuk mengelola transaksi investasi. Berdasarkan case tersebut, apakah transaksi produk investasi yang tepat untuk Bu Anna dan putra nya?",
      answer: "Obligasi",
    },
    {
      question: "Tiga pilar Tata Kelola Keberlanjutan PT BCA Tbk adalah",
      answer: "Pilar Perbankan Berkelanjutan, Pilar Budaya Berkelanjutan, Pilar Berkarya Memberi Nilai",
    },
    {
      question: "Hans ingin memantau saldo kartu kreditnya secara real time. Rekan kerja Hans menyarankan untuk menggunakan aplikasi perbankan digital myBCA. Apakah saran rekan kerja Hans sudah tepat?",
      answer: "Sudah tepat, karena pada aplikasi myBCA dapat melihat informasi mengenai transaksi, tagihan dan saldo kartu kredit",
    },
    {
      question: "What is the amount of outstanding funds at BCA in the last 3 months that an individual customer must have to obtain the BCABIZZ service?",
      answer: "≥ IDR 200 mio",
    },
    {
      question: "Kriteria Reksa Dana yang melakukan investasi paling sedikit 80% dari Nilai Aktiva Bersih dalam bentuk Efek bersifat Ekuitas merupakan salah satu kriteria jenis reksa dana...",
      answer: "Saham",
    },
    {
      question: "The use of masks and hand sanitizers as well as the application of the Covid Protocol during a pandemic is a reflection of the value of…",
      answer: "Customer Focus",
    },
    {
      question: "Kina yang merupakan seorang nasabah BCA ingin melakukan pembayaran menggunakan kartu debit di suatu toko. Namun pada toko tersebut tidak tersedia EDC BCA, maka kemungkinan yang terjadi adalah..",
      answer: "Kina dapat melakukan pembayaran asalkan EDC yg tersedia memiliki logo Maestro dan Mastercard",
    },
    {
      question:
        "Pada awal tahun, PT Sinar dan PT Cahaya memiliki Limit Grup Debitur Non Bank Kredit Korporasi (Grup ABC) sebesar Rp 3.5 Triliun dengan kondisi PT Sinar sebesar Rp 800 Miliar dan PT Cahaya sebesar Rp 1 Triliun. Bank Terang yang juga merupakan Counterparty BCA dan tergabung dalam Grup ABC memilki eksposur sebesar Rp 1 Triliun. Pada pertengahan tahun, Bank Terang mengajukan kredit tambahan sebesar 500 Miliar, dan PT Sinar juga mengajukan kredit tambahan sebesar Rp 100 M. Sisa availability Limit Grup ABC saat ini menjadi...",
      answer: "Rp 100 Miliar",
    },
    {
      question:
        "Fahira adalah seorang pengusaha yang usahanya berkembang pesat dan kini dia memiliki kebutuhan keuangan yang lebih besar. Fahira memiliki kartu kredit dari BCA dan ingin mengajukan kenaikan kredit limit diatas Rp 50 Juta. Apakah dokumen tambahan yang wajib dilampirkan Fahira?",
      answer: "Fotocopy NPWP",
    },
    {
      question: "Pak Kevin ingin melakukan pembelian voucher isi ulang melalui ATM. Berapakah besaran maksimum dari limit gabungan pembelian voucher melalui ATM maupun delivery channel BCA lainnya?",
      answer: "Rp2.500.000",
    },
    {
      question: "Ketentuan yang harus diperhatikan untuk program cicilan BCA yang diberikan kepada pemegang kartu kredit dengan tujuan konsumtif dan pemegang kartu BCA Smartcash adalah..",
      answer: "Dapat dilakukan lebih dari satu kali transaksi jika kredit limit masih mencukupi dan Minimum transaksi Rp 500.000 dalam 1 kali transaksi",
    },
    {
      question:
        "Ayu ingin membuka rekening di BCA untuk menabung dan menerima transfer bulanan dari orang tuanya. Ayu datang ke kantor cabang dengan membawa dana untuk setoran awal sebesar Rp 350.000. Dengan jumlah uang tersebut, rekening apakah yang dapat dibuka oleh Ayu?",
      answer: "Tahapan Xpresi",
    },
    {
      question:
        "Pada tahun 2022 lalu, Bu Karina seorang karyawan swasta yang berusia 25 tahun mengajukan pinjaman Kredit Kendaraan Bermotor (KKB) beroda 2 dengan Non Performing Loan (NPL) <5%. Maka besaran minimum persentase uang muka yang dibayar oleh Bu Karina adalah sebesar…",
      answer: "0.15",
    },
    {
      question: "Pak Baim melakukan pencairan Deposito Berjangka Money Market (DBMM) nya pada saat tanggal jatuh tempo yang bertepatan dengan libur nasional. Apakah Pak Baim tetap dapat melakukan pencairan pada tanggal tersebut?",
      answer: "Tidak, Pencairan dilakukan pada hari kerja berikutnya dengan tetap memperhitungkan bunga",
    },
    {
      question: "Produk tahapan yang digunakan sebagai penyimpanan dana yang ditujukan untuk kebutuhan bisnis adalah…",
      answer: "Tahapan Gold",
    },
    {
      question: "Berikut ini yang tidak termasuk hal yang harus diperhatikan pekerja dalam menggunakan media sosial pribadi adalah...",
      answer: "Menjawab langsung segala bentuk pertanyaan ataupun keluhan konsumen yang ditemukan di media sosial",
    },
    {
      question: "Which of the following services is not included in the Halo BCA Mobile service?",
      answer: "Mobile and Web",
    },
    {
      question: "Manakah di bawah ini aplikasi pihak ketiga yang tidak dapat digunakan untuk mengakses VIRA (Virtual Assistant Chat Banking BCA)?",
      answer: "Telegram",
    },
    {
      question: "Payment transactions through OneKlik can be made in any currency…",
      answer: "Rupiah",
    },
    {
      question:
        "Bu Ami merupakan nasabah Solitaire yang mengambil produk simpanan dalam mata uang rupiah dengan jangka waktu 12 bulan. Sebelum mencairkan tabungannya saat tepat bulan ke-12, berikut hal yang tepat untuk perlu diketahui oleh Bu Ami yaitu..",
      answer: "Bu Ami dapat mencairkan tabungan nya secara antar cabang",
    },
    {
      question: "Berdasarkan Pernyataan di bawah ini, manakah yang termasuk dalam makna One Soul BCA?",
      answer: "Satu semangat dan satu jiwa dan BCA adalah milik segenap Insan BCA",
    },
    {
      question: "Jika dalam satu team terdiri dari Agus, Indra, dan fatah akan membuat akun media sosial BCA, kemudian Indra ditunjuk sebagai pemegang password, maka …",
      answer: "Tidak menggunakan email pribadi, email di pegang oleh Agus, password dipegang oleh Indra",
    },
    {
      question: "Hana kehilangan dompet yang berisi kartu debit BCA miliknya saat berlibur. Untuk mencegah terjadinya transaksi tak dikenal pada kartu debitnya yang hilang, maka hal mandiri yang dapat dilakukan Hana adalah…",
      answer: "Memblokir kartu debit melalui myBCA",
    },
    {
      question: "The benefits obtained by Electronic Data Capture (EDC) users as customers/cardholders are…",
      answer: "No need to carry large amount of cash",
    },
    {
      question:
        "Daniel adalah warna negara Australia yang menetap di Indonesia dan berencana untuk membuka produk simpanan BCA dengan setoran awal menggunakan mata uang AUD. Produk simpanan yang dapat direkomendasikan untuk Daniel adalah..",
      answer: "Deposito",
    },
    {
      question:
        "Untuk meminimalisir risiko gangguan /kerusakan yang disebabkan oleh alam maupun manusia dimana kerusakan yang terjadi tidak hanya berdampak pada kemampuan teknologi BCA, tetapi juga berdampak pada kegiatan operasional bisnis BCA terutama pelayanan terhadap nasabah, maka BCA memiliki penerapan manajemen risiko operasional yang disebut..",
      answer: "Business Continuity Management (BCM)",
    },
    {
      question:
        "Eric seorang pemegang kartu tahapan sedang dalam perjalanan dari Jakarta menuju Kota Solo. Ia hendak mengambil uang cash di salah satu mini market di rest area yang Ia lewati. Sayangnya Ia tidak menemukan Mesin ATM BCA, apa yang dapat Eric lakukan?",
      answer: "Menggunakan layanan Transaksi Tunai di EDC BCA",
    },
    {
      question:
        "Bu Sinta akan membuka E-Deposito dengan myBCA sejumlah Rp 30.000.000 untuk waktu 6 bulan dan suku bunga deposito yang berlaku sebesar 2.50% p.a dengan pajak sebesar 20%. Berapakah keuntungan yang didapatkan dari bunga selama 6 bulan nya? (dengan asumsi 1 bulan 30 hari dan 1 tahun 360 hari)",
      answer: "Rp300.000",
    },
    {
      question: "In April, Mr. Fachri's BCA App Merchant application was automatically rejected by the system for not completing the document. When could Mr. Fachri submit the application again?",
      answer: "August",
    },
    {
      question:
        "The infrastucture used by Bank Indonesia in the implementation of fund transfer and scheduled clearing to process electronic financial data on fund transfer services, debit clearing services, regular payment services and regular billing services is...",
      answer: "SKNBI",
    },
    {
      question:
        "Pak Ghifari adalah seorang Nasabah produk Tahapan dengan kartu paspor BCA Gold. Pada bulan lalu, Pak Ghifari melakukan transfer uang sebesar Rp 25 juta rupiah ke rekening BCA salah satu teman nya. Sore harinya, Pak Ghifari mendadak harus melakukan transfer ke keluarga nya. Berapakah besaran maksimum yang bisa di transfer Pak Ghifari melalui ATM BCA ke keluarganya, jika keluarganya juga pengguna rekening BCA?",
      answer: "Rp 50 juta",
    },
    {
      question: "Manfaat reksa dana bagi nasabah adalah...",
      answer: "Diversifikasi portofolio",
    },
    {
      question: "Fitur di channel/layanan BCA bagi pemegang kartu luar negeri untuk mengetahui informasi nominal transaksi dan melakukan transaksi belanja/tarik tunai dalam mata uang negara asal adalah…",
      answer: "Dynamic Currency Conversion",
    },
    {
      question: "In addition to filling out the mobile form, other transactions that customers can make on BCA's eBranch app are…",
      answer: "Make a reservation to make a transactions at the Branch",
    },
    {
      question:
        "Dalam melakukan restrukturisasi kredit, Bank wajib memperhatikan prinsip-prinsip restrukturisasi. Salah satunya adalah keadilan dan kesetaraan dalam memenuhi hak-hak para pemangku kepentingan yang timbul berdasarkan perjanjian dan peraturan perundang-undangan yang termasuk ke dalam prinsip...",
      answer: "Kewajaran",
    },
    {
      question: "Aplikasi yang berfungsi sebagai wadah untuk komunitas nasabah muda yang merupakan Nasabah BCA Solitaire/ BCA Prioritas atau anak dari nasabah BCA Solitaire / BCA Prioritas adalah..",
      answer: "BCA Young Community",
    },
    {
      question:
        "Jordan ingin mengajukan penyewaan SDB (Safe Deposit Box) sehingga Jordan harus datang ke cabang yang memiliki layanan SDB dengan membawa kelengkapan dokumen. Berikut dokumen yang perlu dibawa Jordan saat datang ke cabang adalah…",
      answer: "KTP dan Buku Tabungan",
    },
    {
      question: "Fitur BCA Mobile yang memungkinkan pengguna untuk mengirimkan dana ke beberapa pengguna lainnya baik secara fixed maupun random dengan tambahan berupa kartu ucapan virtual adalah...",
      answer: "BagiBagi",
    },
    {
      question: "Banking transaction services through the customer telephone network served by IVR (answeing machine) are..",
      answer: "BCA by Phone Bisnis",
    },
    {
      question: "Transaksi yang dapat dilakukan apabila pemegang kartu BCA melakukan transaksi perbankan pada mesin Electronic Data Capture (EDC) bank lain adalah…",
      answer: "Transaksi informasi saldo dan transaksi pembayaran",
    },
    {
      question:
        "Joyan adalah seorang pelajar berusia 15 tahun yang ingin membuka rekening tabungan bersama ibu nya. Ketika pembukaan rekening sudah berhasil, Ibu dari Joyan ingin mengajukan kartu secara terpisah. Apakah yang dilakukan Ibu dari Joyan sudah tepat?",
      answer: "Belum tepat, karena setelah pembukaan rekening berhasil dilakukan tidak perlu pengajuan kartu karena kartu sudah merupakan satu kesatuan dengan pembukaan rekening",
    },
    {
      question: "One of the target (potential) debtors of BCA Secure Personal Loan users is…",
      answer: "BCA Solitaire Customers",
    },
    {
      question: "The following is not included in the multi scheme in granting credit is..",
      answer: "Multi Financing",
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
