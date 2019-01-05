import React from "react";
import Header from "../header-teritiary";
import Footer from '../footer';
const Article = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container" id="article">
          <div className="article-content">
            <p>
              <span className="publisher">Savesteps</span> – Musim kemarau telah
              usai kini saat nya kita menghadapi musim penghujan. Banyak masalah
              muncul saat musim penghujan salah satunya adalah bencana banjir.
              Hujan derasa yang terus menerus dapat mengakibatkan banjir datang
              dengan cepat, dan banjir sendiri masih menjadi momok menakutkan
              bagi sebagian masyarakat.
            </p>
            <p>
              Sekarang ini, penyebab banjir bukan hanya karena faktor alam saja
              tetapi juga karena kerusakan lingkungan yang disebabkan oleh
              manusia seperti membuang sampah sembarangan, penataan kota yang
              tidak baik sehingga semakin sedikitnya daerah resapan air untuk
              air hujan.
            </p>
            <p>
              Walau sekarang banjir dapat diprediksi saat musim penghujan namun
              tidak ada salahnya bagi anda yang tinggal di daerah yang rawan
              terjadi bencana banjir harus tetap waspada akan datangnya bencana
              ini. Mengingat cuaca yang terus berubah dan intensitas hujan yang
              terus meningkat, mungkit 4 Tips ini dapat membantu anda dalam
              menghadapi bencana banjir.
            </p>
          </div>
          <div className="infographics-wrapper">
            <img src="./img/bencana1.png" alt srcSet className="infographics" />
          </div>
          <div className="article-list-content">
            <ol>
              <li>
                <p>Ikuti Intruksi yang diberikan oleh pemerintah</p>
                <p>
                  Nah, cara yang pertama ialah mengikuti intruksi pemerintah
                  setempat. Jika kondisi semakin memburuk untuk tinggal di
                  rumah, segera bersiap-siap membawa barang yang diperlukan dan
                  segera mengungsi di pengungsian yang disediakan oleh
                  pemerintah.
                </p>
              </li>
              <li>
                <p>Hindari penggunaan alat elektronik</p>
                <p>
                  Saat debit air semakin tinggi dan masuk ke dalam rumah, segera
                  matikan aliran listrik rumah, bersihkan lantai dan alas dari
                  kabel yang menjuntai, cabut dan pindahakan alat elektronik ke
                  tempat yang kering agar tidak konslet.
                </p>
                <p>
                  Jangan sekali – kali mencoba menyalakan alat elektronik yang
                  terkena atau tergenang air karena dapat memicu konslet dan
                  api. Selain alat elektronik, pastikan juga memindahkan tabung
                  gas ke tempat yang kering.
                </p>
              </li>
              <li>
                <p>Selamatkan dokumen yang dianggap penting</p>
                <p>
                  Tips hadapi banjir selanjutnya adalah menyelamatkan dokumen
                  yang dianggap penting seperti akta kelahiran, Kartu Keluarga
                  (KK), Ijazah, Surat Tanah dan dokumen atau surat yang dianggap
                  beharga dan penting. Jadikan satu tempat dokumen tersebut agar
                  tidak tercecer dan hilang. Simpan di tempat yang kering dan
                  aman yang mudah diingat.
                </p>
              </li>
              <li>
                <p>Hindari keluar rumah saat malam hari</p>
                <p>
                  Tips yang terakhir adalah jangan keluar rumah atau pengungsian
                  saat malam hari karena kondisi lingkungan ynag tidak dapat
                  diprediksi dan kurangnya penerangan. Hati-hati juga terhadap
                  kemungkinan serangan hewan buas seperti ular, buaya, dll.
                </p>
              </li>
            </ol>
          </div>
          <div className="article-footer">
            <p>
              Itulah beberapa tips yang mungkin bisa membantu kalian apabila
              terkena bencana banjir, selalu waspada terhadap segala ancaman
              bencana termasuk banjir. Walaupun begitu kita harus bisa mencegah
              terjadinya banjir itu sendiri sebelum terlambat.
            </p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Article;
