-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Nov 12, 2021 at 03:19 AM
-- Server version: 8.0.27
-- PHP Version: 7.4.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gunmajoss`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookmarks`
--

CREATE TABLE `bookmarks` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `internship_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `internships`
--

CREATE TABLE `internships` (
  `id` bigint UNSIGNED NOT NULL,
  `location_id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `programName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isPaid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isWfh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imageUrl` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `benefit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `requirement` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `registrationLink` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isOpen` tinyint(1) NOT NULL,
  `duration` int NOT NULL,
  `closeRegistration` timestamp NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `internships`
--

INSERT INTO `internships` (`id`, `location_id`, `user_id`, `tag_id`, `programName`, `isPaid`, `isWfh`, `imageUrl`, `description`, `benefit`, `requirement`, `registrationLink`, `isOpen`, `duration`, `closeRegistration`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, 'Bank Indonesia Internship', '1', '1', 'https://tse2.mm.bing.net/th?id=OIP.o2Tm79NKvwQ4Nc1cwqk0TQHaKg&pid=Api&P=0&w=300&h=300', 'Beasiswa Bank Indonesia tidak terbatas pada pembiayaan untuk mendukung biaya pendidikan, tunjangan studi, maupun biaya hidup.', '- Uang\r\n- Pengalaman\r\n- Sertifikat', 'Merupakan mahasiswa aktif\r\nTelah menempuh 40 SKS atau berada di semester 3\r\nUsia maksimal 23 tahun pada saat menerima beasiswa\r\n\r\n', 'https://indbeasiswa.com/2021/02/beasiswa-bank-indonesia.html', 1, 6, '2021-11-24 07:45:25', '2021-10-27 20:01:39', '2021-10-15 20:01:39'),
(2, 2, 2, 1, 'Djarum Internship', 'Rp. 50.000', '0', 'https://lh3.googleusercontent.com/proxy/PSRgKBBHKzqIjHrNSHj9oHh9x0htB5EF_s4d0KMug4lD3cWLpdH-HGzvfP_R3-4ZvMTrJbtVdNb-gl9sqdGSPZKc3zHGi2bPW8jBNNpEEUaof185CD8Wm-ABJMVlbZllQpVR7wdD7RuOHe1PrQ', 'Internship Beswan Djarum Bagian System Information and Editing', '- Uang Jajan per bulan\r\n- Gold Sertifikat Bekerja\r\n- Pengalaman', '- Mahasiswa D3/D4 aktif\r\n- Maksimal Usia 23 tahun', 'https://djarumbeasiswaplus.org/', 1, 12, '2021-11-27 08:06:53', '2021-11-18 08:06:53', '2021-11-18 08:06:53'),
(3, 3, 2, 3, 'Tokopedia Intern', '1', '1', 'https://www.its.ac.id/wp-content/uploads/2019/05/WhatsApp-Image-2019-05-27-at-10.29.02.jpeg', 'Develop program start from concept - implementation - monitoring & evaluation for Nakama Experience and internalization culture with high touch and high tech approach', '- BPJS\r\n- Work Life Balance', 'Fast learner\r\nStrong initiative & Analytical thinking\r\n', 'https://tokopedia.darwinbox.com/ms/candidate/careers/a618a03449729a', 1, 6, '2021-11-24 07:45:25', '2021-10-27 20:01:39', '2021-10-15 20:01:39'),
(4, 3, 2, 2, 'Dokter Indonesia Internship', '1', '1', 'https://imgv2-2-f.scribdassets.com/img/document/428338919/original/b652313253/1632981958?v=1', 'Program Magang di Rumah Sakit Darma Husada', '- Pengalaman Berharga\r\n- Pahala \r\n- Hidayah\r\n- Pengingat sebelum mati', '- Mahasiswa D3 Aktif jurusan Kesehatan\r\n- Maksimal Usia 23 tahun\r\n- Niat Belajar\r\n- Memiliki Kesabaran lebih\r\n', 'https://internsip.kemkes.go.id/', 1, 6, '2021-11-27 08:06:53', '2021-11-19 07:58:21', '2021-11-30 08:11:51'),
(5, 1, 2, 1, 'Shopee Intern', '1', '1', 'https://cdn.statically.io/img/aikerja.com/f=auto%2Cq=70/wp-content/uploads/2021/05/1622470177_Lowongan-Kerja-PT-Shopee-International-Indonesia-Dibutuhkan-1-Recruitment.jpg', 'Participate in the recruitment process, especially in the sourcing of high caliber candidates, the screening and selection of ideal individuals \r\n', '- BPJS\r\n- Uang makan\r\n- Uang Transportasi', 'Currently pursuing a/enrolled in Bachelor\'s/ Master\'s Degree\r\nPassion for people, talent acquisition and culture', 'https://careers.shopee.co.id/students', 1, 6, '2021-11-24 07:45:25', '2021-10-27 20:01:39', '2021-10-15 20:01:39'),
(6, 4, 2, 4, 'Kementrian Riset Teknologi', '1', '0', 'https://4.bp.blogspot.com/-TQ43iXpu5Y0/V0W6WlizeLI/AAAAAAAAKvc/JGgAmea9t2IvrddJjaWbjOPgMtE4wvFNQCLcB/s1600/program-magang-mahasiswa-s1-kemenristekdikti.jpg', 'Internship bagian jurnalistik dan komunikais publik', '- pengalaman\r\n- sertifikat\r\n- uang saku\r\n- kesempatan bekerja pada perusahaan', '- mahasiswa aktif D3/D4/S1\r\n- memiliki niat magang tinggi\r\n', 'https://dikti.kemdikbud.go.id/', 1, 8, '2021-11-27 08:06:53', '2021-11-24 08:20:53', '2021-11-18 08:06:53'),
(7, 4, 2, 1, 'Front End Developer Intern', '0', '1', 'https://twitter.com/hmsi_its/status/1403315251378982912?lang=ar', 'Program ini merupakan kombinasi antara training dan penempatan magang. Peserta akan mendapatkan materi intensif dari instruktur profesional yang ahli di bidangnya selama 2 bulan (25 sesi, 3 jam setiap sesi).', 'Lulusan program ini diharapkan mampu membuat suatu website yang dinamis dan memiliki kemampuan untuk bekerja di Dunia Software Development sebagai Junior Web React Developer.', 'Untuk mengambil program ini, peserta diharapkan telah memahami kemampuan dasar komputer (web browsing, app installation, file navigating).', 'https://kampusmerdeka.kemdikbud.go.id/program/magang/browse/50753d41-eeea-4008-b9d1-b1b09bfbc395/40938252-a7ea-11eb-87b2-c2c15332c25a', 1, 3, '2021-11-24 07:45:25', '2021-10-27 20:01:39', '2021-10-15 20:01:39'),
(9, 1, 2, 4, 'Backend Intern', '1', '0', 'https://asset.kompas.com/crops/1f3IAej2zOfoNIGtz7rms-X2SoU=/0x0:599x399/750x500/data/photo/2021/03/31/606482a616046.jpg', 'PT Petrokimia Gresik memberikan kesempatan bagi pelajar Perguruan Tinggi\r\nmaupun Sekolah Menengah Atas/Kejuruan di seluruh Indonesia untuk berinovasi\r\nbersama kami.', 'Pengalaman menggunakan alat perusahaan OVN\r\nPengalaman Belajar di Perusahan BUMN', 'IPK 3.00\r\nMahasiswa semester 5\r\nBersedia onsite', 'http://prakerin.petrokimia-gresik.com/', 1, 6, '2021-11-24 07:45:25', '2021-10-27 20:01:39', '2021-10-15 20:01:39');

-- --------------------------------------------------------

--
-- Table structure for table `locations`
--

CREATE TABLE `locations` (
  `id` bigint UNSIGNED NOT NULL,
  `locationName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `locations`
--

INSERT INTO `locations` (`id`, `locationName`, `created_at`, `updated_at`) VALUES
(1, 'Surabaya', '2021-10-27 20:01:39', '2021-10-15 20:01:39'),
(2, 'Jogja', '2021-11-19 07:58:21', '2021-11-27 07:58:21'),
(3, 'Malang', '2021-10-27 20:01:39', '2021-10-15 20:01:39'),
(4, 'Jakarta', '2021-11-12 08:15:39', '2021-11-27 08:15:39');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2001_10_07_153122_create_locations_table', 1),
(2, '2003_10_07_153231_create_tags_table', 1),
(3, '2004_10_08_000018_create_users_table', 1),
(4, '2005_10_07_153038_create_internships_table', 1),
(5, '2006_10_07_153149_create_notifications_table', 1),
(6, '2007_10_07_153213_create_bookmarks_table', 1),
(7, '2014_10_12_100000_create_password_resets_table', 1),
(8, '2019_08_19_000000_create_failed_jobs_table', 1),
(9, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` bigint UNSIGNED NOT NULL,
  `user_id` bigint UNSIGNED NOT NULL,
  `tag_id` bigint UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 1, 'authToken', 'a3a3d87a2ca0aecb81c1d0847630431601b31dabe0aabc35f7d55c33afbe0bd2', '[\"*\"]', NULL, '2021-11-09 13:27:04', '2021-11-09 13:27:04'),
(2, 'App\\Models\\User', 2, 'authToken', '32cbbfa0dc0c4d8c6ba56adebeb4d73de9b92aeee2845a8d6137a9eaad08cb59', '[\"*\"]', NULL, '2021-11-09 13:31:59', '2021-11-09 13:31:59'),
(3, 'App\\Models\\User', 2, 'authToken', 'd4956b0ae794f807c157b1e7a51e598b5eac9f55308839a11030b91c02eb4f06', '[\"*\"]', NULL, '2021-11-09 14:26:50', '2021-11-09 14:26:50'),
(4, 'App\\Models\\User', 2, 'authToken', 'd2885e34d847aa654c65fd2e8f515b2dcfae58feb57ef45a253036b71bde7d2f', '[\"*\"]', NULL, '2021-11-09 14:37:42', '2021-11-09 14:37:42'),
(5, 'App\\Models\\User', 2, 'authToken', '08049d2c577b4fae4b29890b2181d5ba0ae0a90c84c5fa89847961259cabc44d', '[\"*\"]', NULL, '2021-11-09 15:01:44', '2021-11-09 15:01:44'),
(6, 'App\\Models\\User', 2, 'authToken', 'ddea498abcacb9b427d26512921f27b91a60a7fda84ee555cb8c30e191c6a922', '[\"*\"]', NULL, '2021-11-09 15:19:58', '2021-11-09 15:19:58'),
(7, 'App\\Models\\User', 2, 'authToken', '0f2a581da9ab456034a47ed168d80c589b196e701b6c3ac656f1ead1b9c71e7f', '[\"*\"]', NULL, '2021-11-09 15:19:58', '2021-11-09 15:19:58'),
(8, 'App\\Models\\User', 4, 'authToken', 'ac005f4e7483bd6182d25d6721b7af3a98aef3aab7f5719fa6d5c1f4c1def5c5', '[\"*\"]', NULL, '2021-11-10 00:49:31', '2021-11-10 00:49:31'),
(9, 'App\\Models\\User', 4, 'authToken', '86468375edf3092b2c4375bf9e399f0c561ce2c52170761a9f95fa5457a673ac', '[\"*\"]', NULL, '2021-11-10 00:50:59', '2021-11-10 00:50:59'),
(10, 'App\\Models\\User', 4, 'authToken', 'd476183c250a80f354edeec7747eb827c15f27333aa215dfe12a6941aad54b8a', '[\"*\"]', NULL, '2021-11-10 00:51:20', '2021-11-10 00:51:20'),
(11, 'App\\Models\\User', 4, 'authToken', '67fae21261a0389588c3c5f5f35ba889b2325711a49b41d15cbfa29d523c569b', '[\"*\"]', NULL, '2021-11-10 01:00:10', '2021-11-10 01:00:10'),
(12, 'App\\Models\\User', 4, 'authToken', 'e1cb1aec5ed5649e40c9c15d5f226875db85a79106c87563cbf60aa3ce7e4a30', '[\"*\"]', NULL, '2021-11-10 01:10:12', '2021-11-10 01:10:12'),
(13, 'App\\Models\\User', 4, 'authToken', '8c096d1dabd683d29c46ba18117a1fe17ea5adbe021aee3269060e7a5a7d4239', '[\"*\"]', NULL, '2021-11-10 01:14:24', '2021-11-10 01:14:24'),
(14, 'App\\Models\\User', 4, 'authToken', '3612989815993da94f407918e09107147cac43ab0e2f87d52946bf3f743dfeeb', '[\"*\"]', NULL, '2021-11-10 01:17:27', '2021-11-10 01:17:27'),
(15, 'App\\Models\\User', 4, 'authToken', 'dcf9f8dd671798fa91f500eefafcaf0c716732761e23154bbde97ac36923dd4c', '[\"*\"]', NULL, '2021-11-10 01:34:48', '2021-11-10 01:34:48'),
(16, 'App\\Models\\User', 4, 'authToken', 'ca6423412670b4853367f32262350653fa21f9f6fc189bfa408a51153cc3d704', '[\"*\"]', NULL, '2021-11-10 01:40:06', '2021-11-10 01:40:06'),
(17, 'App\\Models\\User', 4, 'authToken', '29fc390e137755b0caf477d5915fcc7b05403a52163088c6d0d8dd571079e5ad', '[\"*\"]', NULL, '2021-11-10 01:41:08', '2021-11-10 01:41:08'),
(18, 'App\\Models\\User', 4, 'authToken', '7e33b901665d432630f03608c501d643d374008fc1713720d51bdf4743ec0bdf', '[\"*\"]', NULL, '2021-11-10 01:45:45', '2021-11-10 01:45:45'),
(19, 'App\\Models\\User', 4, 'authToken', '27000dc4b203db65dbf3182457b9a7436df5e3fab8b48e4b11f42c8124ad16c5', '[\"*\"]', NULL, '2021-11-10 01:48:24', '2021-11-10 01:48:24'),
(20, 'App\\Models\\User', 4, 'authToken', '46f8f458bbc18d10bc5dacae207af82216b6baa1c24266adbdb1d67684489f49', '[\"*\"]', NULL, '2021-11-10 01:53:28', '2021-11-10 01:53:28'),
(21, 'App\\Models\\User', 4, 'authToken', 'd5022c90c2f768dff7eb11e69419e45621e4814fcca29420db2eadd2685487c7', '[\"*\"]', NULL, '2021-11-10 01:56:10', '2021-11-10 01:56:10'),
(22, 'App\\Models\\User', 4, 'authToken', '55622b42dc0e21821fd4ef6c5fab44692008ada7f4fd1aea2d7353a789cf044c', '[\"*\"]', NULL, '2021-11-10 01:56:59', '2021-11-10 01:56:59'),
(23, 'App\\Models\\User', 4, 'authToken', '66207e3b469a3af16ae6382c7501dd27f6a1c6af6e955863f1443cfeb738cda1', '[\"*\"]', NULL, '2021-11-10 02:03:44', '2021-11-10 02:03:44'),
(24, 'App\\Models\\User', 4, 'authToken', 'c7cd64d4a9d5c198844f3fe97dfc063185b2e6b60a76b2b98d85db5ab57d9c7f', '[\"*\"]', NULL, '2021-11-10 02:08:22', '2021-11-10 02:08:22'),
(25, 'App\\Models\\User', 4, 'authToken', 'a47f8f799d2fbb2ff70db5da5275efc72c5011f948a5c295daf1439052e4849a', '[\"*\"]', NULL, '2021-11-10 02:14:45', '2021-11-10 02:14:45'),
(26, 'App\\Models\\User', 5, 'authToken', '07ee53ff3683033213b1a5c43679ec8e979e4486c040d15a060f8e30df2c3673', '[\"*\"]', NULL, '2021-11-10 02:41:06', '2021-11-10 02:41:06'),
(27, 'App\\Models\\User', 5, 'authToken', '1da364f356492e7f6f50e77106345c57188560dcc65c4a6a69e1cf24fe117a5e', '[\"*\"]', '2021-11-10 02:43:30', '2021-11-10 02:41:50', '2021-11-10 02:43:30'),
(28, 'App\\Models\\User', 4, 'authToken', 'a8b1f29b8d0b804c4493aa2c269d8c18414e1a73c3873bbafaab1c26c4e26561', '[\"*\"]', NULL, '2021-11-10 02:48:07', '2021-11-10 02:48:07'),
(29, 'App\\Models\\User', 4, 'authToken', 'd28b74f31edcb520a4d680a32a2039f915e40d58a41f7f928a44e42a0cfa33b7', '[\"*\"]', NULL, '2021-11-10 03:02:42', '2021-11-10 03:02:42'),
(30, 'App\\Models\\User', 4, 'authToken', 'a965daeb4461fb735d82301a40d91c00a01d85702dd6b220472e4b15848b1561', '[\"*\"]', NULL, '2021-11-10 03:13:08', '2021-11-10 03:13:08'),
(31, 'App\\Models\\User', 4, 'authToken', 'ecb917785d1ecd1d3d9dd7b381fe20928739d8b7ddc12a21e98aa3ba74762976', '[\"*\"]', NULL, '2021-11-10 03:18:35', '2021-11-10 03:18:35'),
(32, 'App\\Models\\User', 6, 'authToken', 'ba6b3ca28b37183363d57924d71558f87557ab7d0d462292fbbf079fcf4f3d58', '[\"*\"]', NULL, '2021-11-10 07:16:38', '2021-11-10 07:16:38'),
(33, 'App\\Models\\User', 7, 'authToken', '5501245044e9cf9d90c75a74a1f302fe6e498b5532dafe2a06913790b8ee5001', '[\"*\"]', NULL, '2021-11-10 07:17:57', '2021-11-10 07:17:57'),
(34, 'App\\Models\\User', 7, 'authToken', '0ac839880540a70e385a4d02c0f3fbdfa58ff2f26ef931ade7e6887c2228061e', '[\"*\"]', NULL, '2021-11-10 07:21:03', '2021-11-10 07:21:03'),
(35, 'App\\Models\\User', 4, 'authToken', '8c08265910bb0f56bb10d976a559cb39c115dd86de2d324b91817fe7c495dea7', '[\"*\"]', NULL, '2021-11-10 08:09:30', '2021-11-10 08:09:30'),
(36, 'App\\Models\\User', 1, 'authToken', 'f087b32179582cfabca71a16994636270941412a73b70fa6f519a63a0574b2ec', '[\"*\"]', NULL, '2021-11-10 09:15:53', '2021-11-10 09:15:53'),
(37, 'App\\Models\\User', 4, 'authToken', '7770ab312ce03c12df3278cabe1090e119ae73f26f8443541330b041b8403b61', '[\"*\"]', NULL, '2021-11-10 09:18:00', '2021-11-10 09:18:00'),
(38, 'App\\Models\\User', 2, 'authToken', '9642a3c953166911db9ed293c2ee5aba2e1c645b765841d6f49b8bc1667a6487', '[\"*\"]', NULL, '2021-11-12 00:41:11', '2021-11-12 00:41:11'),
(39, 'App\\Models\\User', 2, 'authToken', '22dbb2ab600491d2c67a4adc86af01e0626c684c0116ce6fb034e3acdadc0d19', '[\"*\"]', NULL, '2021-11-12 00:51:09', '2021-11-12 00:51:09'),
(40, 'App\\Models\\User', 2, 'authToken', '6cf669b74dc030baa98435cc81d71eb7883009e5a37a6f49461af05510e13c22', '[\"*\"]', NULL, '2021-11-12 00:56:21', '2021-11-12 00:56:21'),
(41, 'App\\Models\\User', 2, 'authToken', '439e9dd6bb15fc82545f767f9f9653b2b0e75c1eb72b87163e474a10acb41115', '[\"*\"]', NULL, '2021-11-12 00:56:25', '2021-11-12 00:56:25');

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` bigint UNSIGNED NOT NULL,
  `tagName` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `tagName`, `created_at`, `updated_at`) VALUES
(1, 'Sistem Informasi', '2021-10-27 20:01:39', '2021-10-15 20:01:39'),
(2, 'Kesehatan', NULL, NULL),
(3, 'Geologi', '2021-10-27 20:01:39', '2021-10-15 20:01:39'),
(4, 'Komunikasi', '2021-11-26 08:16:01', '2021-11-27 08:16:01');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isAdmin` tinyint(1) NOT NULL,
  `isVerified` tinyint(1) NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phoneNumber` int DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `isAdmin`, `isVerified`, `email`, `address`, `phoneNumber`, `description`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'dhaniganteng', 0, 0, 'tes2@gmail.com', NULL, NULL, NULL, NULL, '$2y$10$Eg62w3YNMAjn37nXFYGsEOZNFqLrutqwRknV4DEcSERh/civo9tGa', NULL, '2021-11-09 13:27:03', '2021-11-09 13:27:03'),
(2, 'asdqwe', 0, 0, 'asdqwe@gmail.com', NULL, NULL, NULL, NULL, '$2y$10$LuZIfBLo8fxw0BCYV/8hwO44EDpBwKL9Jf2l8/WzTY97ygAx2vpxG', NULL, '2021-11-09 13:31:58', '2021-11-09 13:31:58'),
(3, 'asd', 0, 0, 'asd@gmail.com', 'jl. kapuas', 12345, 'asd adalah huruf', NULL, 'asd', 'tokenasd', NULL, NULL),
(4, 'yoan', 0, 0, 'yoan@gmail.com', NULL, NULL, NULL, NULL, '$2y$10$MIyoUHnqPklOY15JzWbKZ.9DNdKDEEObfaR8aFTmqHh.BZFskZdL6', NULL, '2021-11-10 00:49:31', '2021-11-10 00:49:31'),
(5, 'rizki', 0, 0, 'rizki@gmail.com', NULL, NULL, NULL, NULL, '$2y$10$8kPNFs3NzV9yNd5MkP3cZO0EqBGFX9FVoSZBja.G2k7KrX5mTaZma', NULL, '2021-11-10 02:41:06', '2021-11-10 02:41:06'),
(6, 'sam', 0, 0, 'sam@gmail.com', NULL, NULL, NULL, NULL, '$2y$10$dz23HQFCwNGdHKgLo8aR6eZE027rwLAWZtGKUzC.06NAqpHha5.mC', NULL, '2021-11-10 07:16:38', '2021-11-10 07:16:38'),
(7, 'tan', 0, 0, 'tan@gmail.com', NULL, NULL, NULL, NULL, '$2y$10$l4GjT8lCRBmz.UjHpGqsV.RBwnLFW7TMNVaqGHcPNbJ4fg0scvTy6', NULL, '2021-11-10 07:17:57', '2021-11-10 07:17:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookmarks_user_id_foreign` (`user_id`),
  ADD KEY `bookmarks_internship_id_foreign` (`internship_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `internships`
--
ALTER TABLE `internships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `internships_location_id_foreign` (`location_id`),
  ADD KEY `internships_user_id_foreign` (`user_id`),
  ADD KEY `internships_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `locations`
--
ALTER TABLE `locations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_user_id_foreign` (`user_id`),
  ADD KEY `notifications_tag_id_foreign` (`tag_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookmarks`
--
ALTER TABLE `bookmarks`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `internships`
--
ALTER TABLE `internships`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `locations`
--
ALTER TABLE `locations`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookmarks`
--
ALTER TABLE `bookmarks`
  ADD CONSTRAINT `bookmarks_internship_id_foreign` FOREIGN KEY (`internship_id`) REFERENCES `internships` (`id`),
  ADD CONSTRAINT `bookmarks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `internships`
--
ALTER TABLE `internships`
  ADD CONSTRAINT `internships_location_id_foreign` FOREIGN KEY (`location_id`) REFERENCES `locations` (`id`),
  ADD CONSTRAINT `internships_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`),
  ADD CONSTRAINT `internships_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `notifications_tag_id_foreign` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`),
  ADD CONSTRAINT `notifications_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
