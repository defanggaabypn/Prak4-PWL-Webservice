-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 25, 2022 at 11:37 PM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `porto`
--

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `published` tinyint(1) NOT NULL DEFAULT 0,
  `published_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `articles`
--

INSERT INTO `articles` (`id`, `user_id`, `title`, `slug`, `description`, `content`, `published`, `published_at`, `deleted_at`, `created_at`, `updated_at`) VALUES
(252, 52, 'DEF', 'def', 'ASDASDASDASDAS', 'ASDASDASDASDAS', 1, '2022-05-25 20:54:14', '2022-05-25 13:59:38', '2022-05-25 13:54:08', '2022-05-25 13:59:38'),
(253, 52, 'asfasfas', 'asfasfas', 'asfasfasfsafas', '<div class=\"mapouter\"><div class=\"gmap_canvas\"><iframe width=\"600\" height=\"500\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe><a href=\"https://putlocker-is.org\">putlocker</a><br><style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}</style><a href=\"https://www.embedgooglemap.net\">embed google map in html</a><style>.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style></div></div>', 1, '2022-05-25 20:59:02', '2022-05-25 13:59:37', '2022-05-25 13:58:57', '2022-05-25 13:59:37'),
(254, 52, 'asdasdasd', 'asdasdasd', 'asdasssssss', 'asddddddddd', 1, '2022-05-25 21:09:43', '2022-05-25 14:10:42', '2022-05-25 14:09:40', '2022-05-25 14:10:42'),
(255, 53, 'Sistem Informasi Rekam Medis', 'sistem-informasi-rekam-medis', 'Responsible for the development of the Medical Record Information System, using the Agile process method. Manage the project, coordinate with Frontend, Backend Developer, QA Tester, Tech Writer and Database Administration, and related Stakeholders.', 'View More at https://www.linkedin.com/in/defangga-aby-vonega-36185612b', 1, '2022-05-26 04:12:23', NULL, '2022-05-25 14:12:16', '2022-05-25 14:13:14'),
(256, 53, 'Polres Tulang Bawang Barat (Company Profile)', 'polres-tulang-bawang-barat-company-profile', 'Responsible for creating a public service information website using wordpress', 'View More at https://www.linkedin.com/in/defangga-aby-vonega-36185612b/details/experience/', 1, '2022-05-25 21:16:00', NULL, '2022-05-25 14:15:56', '2022-05-25 14:16:00'),
(257, 53, 'Project Management Officer', 'project-management-officer', 'Project Planning · Risk Management · Project Control · Project Evaluation · Enterprise Resource Planning (ERP)', 'Managed a team in search of 25 fishery internship students.\nResponsible for improvising the appearance Partnership Operation Management Playbook.\nOrganizing the website architecture of the Indonesia Telecommunication & Digital Research Institute.\nMake a strategy in segmenting myDigilearn passive customers to become active.', 1, '2022-05-25 21:17:24', NULL, '2022-05-25 14:17:20', '2022-05-25 14:17:24');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2017_03_24_122715_create_article_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `phone`, `about`, `is_admin`, `email_verified_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Moeen Basra', 'm.basra@live.com', '$2y$10$JYUGSK4YaiBjr7fcXwu6peqXzO1I4AeG.MtJbHpFahknRb3yh.3GO', '(918) 515-2669', 'Rem voluptates placeat repellendus possimus sunt eius consectetur.', 1, NULL, 'LaMKVANS7T', '2022-05-24 14:18:38', '2022-05-24 14:18:38'),
(2, 'Mr. Einar VonRueden II', 'margaret.lindgren@example.org', '$2y$10$aCiSPJub01.UY.xOH5vrfePHHCitP41x.M3bfsd1yKL60BqeNv76u', '760.936.0138', 'Quisquam ut hic inventore quis quia reprehenderit.', 0, NULL, 'Cyoh7TDhqj', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(3, 'Ephraim Treutel', 'carter86@example.com', '$2y$10$mlnIuZCy/vrvOEod9mbMwex8JEFOk7DmKKR/SL5fNMCJpGrIodaRK', '+1-239-816-1954', 'Ratione animi aut saepe id officia qui aut ut.', 0, NULL, 'QY6RGNKOm0', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(4, 'Maegan Murray', 'imosciski@example.net', '$2y$10$8J8qnG1bXYLlQRcWBUx5/uaRfNS.vNHlkg6D4ysWdr7mLeHiFNC1.', '380-244-7927', 'Ut totam doloremque et non maiores ipsa reprehenderit qui nihil deserunt accusamus a et.', 0, NULL, 'eOBMXdH7jb', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(5, 'Dr. Brandyn Balistreri IV', 'jefferey.kilback@example.org', '$2y$10$RhnyJ9y6sfsHcceYi9bGuO7iuv4ez/wkFa6CH4HSxqjKuqfimVwW6', '+1 (386) 483-2178', 'Ea excepturi iure voluptate sit qui libero aut eos libero libero dolorem.', 0, NULL, 'lD7sLbjCCV', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(6, 'Abel McClure', 'dhansen@example.org', '$2y$10$H42el.ZZBsA4FCsS/mloNeTvKC8dDDyiIROODNrGC4WZb2yC8VsPK', '(838) 496-6030', 'Illum magni illum laudantium delectus at unde.', 0, NULL, 'VnvfYHcWWu', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(7, 'Quinn Yundt V', 'bgusikowski@example.net', '$2y$10$aQtznY2pCBzWcqyl9A.EIOCilB8oEVgRVdKn3PilXkbPGbxq/YzaC', '1-810-530-3238', 'Autem ut asperiores repellat et corporis qui omnis consectetur quia molestiae.', 0, NULL, 'XKgMl14iGs', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(8, 'Jeanie Sipes', 'sarai.purdy@example.net', '$2y$10$mIgW5Sv6Gk/HgMfY1uW7K..ZfYTtujJW8s1enkTah6wCM4xHAZvxK', '1-970-787-2225', 'Consequatur sint similique delectus iusto excepturi quod.', 0, NULL, 'gZGmdYpnIM', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(9, 'Javier Wiza', 'koss.isaiah@example.net', '$2y$10$M/aL3qGrlxf8Ohoj4QKJtOJSnIKFKU.X/awYxO9FZ.xgAF9/i4Cnu', '+1.479.549.4341', 'Expedita vitae aut aut illo delectus corrupti dolor dolorum et ut.', 0, NULL, 'KaStx4lVI3', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(10, 'Rickie Kuphal', 'donnelly.maynard@example.com', '$2y$10$8rgGTlbxQoaYh8LjxhbxrOv3bjwAo4gOqH0AbMEUhL3o1PjesWGAe', '1-310-491-0142', 'Quo et debitis qui corrupti repellendus libero et ut.', 0, NULL, 'zuU29GR7xb', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(11, 'Arlene Fay V', 'assunta.schumm@example.org', '$2y$10$KcJAOg3IT8zVT9GATuW1vONFD4rEr7YM34LcrxhVFy1IBeAHqnQEy', '1-458-351-9544', 'Voluptas est libero ab est sit et perspiciatis corporis ut.', 0, NULL, 'Uif5sWKkOS', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(12, 'Gabriel Cruickshank', 'berge.cesar@example.org', '$2y$10$oN83o2LML0MslFQKWWwJsuvdgzABA6NkS71goDfnhrCi7BXMTPTSK', '+1.240.842.1920', 'Pariatur occaecati natus labore ipsum repellat amet quia fuga rem omnis.', 0, NULL, 'DlHRNYfyVU', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(13, 'Dr. Clara Erdman MD', 'eleonore98@example.net', '$2y$10$K2DQpOIu3rYb/jtAnb6m.eNi897ryp1z6CiZ4LZlm/SZ6RV6SpCyS', '+1-458-596-9710', 'Dignissimos error perspiciatis rerum laboriosam non quia alias id consequatur pariatur soluta rem.', 0, NULL, 's4KD94YBRq', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(14, 'Lenora Cormier', 'rdubuque@example.net', '$2y$10$1WUeHYw7BroIMchFDy3zEOEIOWF6x8IYdtLQYgp0em60ciF3yla2K', '+1 (989) 918-9618', 'Consectetur minus error accusantium nihil nisi perferendis pariatur expedita amet non dolorem quis.', 0, NULL, 'fv8HtDvGLO', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(15, 'Prof. Nick Luettgen', 'kira.renner@example.com', '$2y$10$LGlJLrU5gNP4UMpoIdzWa.MTRHU9Lh596.NqMntDY1yyLLFbGK17q', '920.245.0270', 'Corporis accusantium laborum illum facilis deleniti sed quod illo vel nam ea alias ut nobis.', 0, NULL, 'xsWnnWLLJv', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(16, 'Jacklyn Kohler', 'brandon62@example.com', '$2y$10$.y0J5CEvnsLw58SZKMt6cOh8sWI.0TwCxlb2kQc6SblHdvLZqsy7S', '(567) 266-8050', 'Dolorem sunt incidunt soluta error aut beatae iusto repellendus aut sapiente sint numquam.', 0, NULL, 'Y0pJEcLhgm', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(17, 'Prof. Jazmyn Nolan Sr.', 'iheaney@example.net', '$2y$10$fRCOJUPBQ7H2Zfx6jy9s6u885iu5o4TTUOG3BvEXqlRDevOQ0j4.G', '762.785.9993', 'Sed enim facere adipisci tempore animi autem hic quasi aspernatur ut.', 0, NULL, '1NNR9xxikS', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(18, 'Nelson Lemke', 'xmetz@example.net', '$2y$10$sSvIlsdgL2TiAqPteioxQODTIcvblVUxc.VoA2smP1IvuMQz5Y6yO', '1-936-716-9112', 'Ut quis qui odio ratione at accusantium.', 0, NULL, 'tGG7cqzV0b', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(19, 'Miss Kariane Russel Sr.', 'nikolaus.carol@example.com', '$2y$10$fYqcqFif9/HGo47rrM6hrORnLnfHhGIY/Koy9edTI7cHb/idjgwru', '726-694-2933', 'Rem dolores harum vero enim occaecati deleniti aut debitis qui voluptatem et.', 0, NULL, 'RquoJY88Nn', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(20, 'Bernadine Howe', 'hintz.lionel@example.org', '$2y$10$fFaJqrZ97OMupE8pz3/EWOH04ZP0w56TlAJfIgSR3hpRi6BdWa5FC', '+1-904-285-6795', 'Minima quia quo ullam nihil eius praesentium.', 0, NULL, 'SfC9NRXHCm', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(21, 'Karine Trantow', 'jessy.mayer@example.net', '$2y$10$U4h4TXuX3sDnZh.fRyiHLe5iC6vxP0IfYhwqZ.UX3am9klCdg7ByO', '330.556.6547', 'Culpa fugiat est et nulla aut iste sunt magni ut ipsam illo suscipit.', 0, NULL, '5Hgz75xHvL', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(22, 'Clemens Dickinson', 'thamill@example.net', '$2y$10$0zwx/PR.xm50.LmvhaTMwOD4ZZ/t1JS.beXxTQeGZ0vgYbv0k03w.', '+1-270-571-3671', 'Fuga temporibus possimus consectetur voluptatem quibusdam impedit corporis veniam ipsa totam neque autem.', 0, NULL, 'z7JhNcxXUA', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(23, 'Miss Aida Stehr I', 'dean.hyatt@example.net', '$2y$10$OrcCioGlpErFDLuwzen5nuEeHvErODFFZwPX4afQJPpkcKcirBjLm', '1-440-273-2385', 'Minus necessitatibus ad adipisci tempora quo ut dolor et dolorum unde eligendi alias esse commodi.', 0, NULL, 'wgXN1ElfJz', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(24, 'Percy Wehner', 'carter.fannie@example.net', '$2y$10$Bn0CmMnfDZlKEPyUspF1ne17aY1CtRhsLOhKMlnu8xmUedla.jk2m', '951.800.9887', 'Delectus fugit perspiciatis voluptatem totam similique occaecati error.', 0, NULL, 'VeN2MfW1XO', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(25, 'Jayden Bogisich', 'bherman@example.net', '$2y$10$pX2x/bs5h7k.Z8zi3ny2suabHKAVOYTxiOtWYXHgy73qlxvuInUhe', '+1-832-399-4850', 'Rem alias corrupti aut ipsum aut aperiam et iusto.', 0, NULL, 'T98jl8Ixke', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(26, 'Heloise Braun', 'dlubowitz@example.org', '$2y$10$wuoerc1TBGkc4CVFtU8guOqVhuwh13OkufnKQ2v2yJvbeJTfL1tgC', '(337) 860-7204', 'Reprehenderit non autem fuga totam minus non harum voluptatem odit fuga.', 0, NULL, 'Y4X5NtBxqd', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(27, 'Neoma Nienow', 'schaden.ella@example.net', '$2y$10$BFD57p28KKSz36dPh3ZnBu4ujWvHQwwb468ar1W8iaSwoCd7RyXCq', '1-269-943-3776', 'Ipsum ut laboriosam ullam fuga corrupti nobis sunt inventore.', 0, NULL, 'oinu215cDC', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(28, 'Amparo Balistreri', 'aaron51@example.net', '$2y$10$rrBsIP.P4ubH168Rvm8Q1eMzlooohgGnoZECxAqm8VR50i9bd2juK', '551-927-3920', 'Quia vitae ab et laboriosam consequatur perspiciatis nihil est aperiam alias itaque.', 0, NULL, 'Gz33x81rjX', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(29, 'Haskell Kerluke DVM', 'halle.hammes@example.org', '$2y$10$VClF4TTwlONdO9Gaep/sf.siKRQHQo59/x9Y1YcMKyXUnigBHkbYi', '925.933.5895', 'Ut fugiat non tempora deleniti quam qui aliquid animi et libero blanditiis reiciendis quo.', 0, NULL, 'nQFBJ2q91Q', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(30, 'Omer Bechtelar', 'vicky54@example.com', '$2y$10$2IUWl/b9FNxptDlRfKYR.egf3IVHU6t7kTL2t5u1XCqumvZiAYozG', '848.381.2671', 'Velit exercitationem exercitationem eos maiores nobis est sequi culpa neque nihil aspernatur quo.', 0, NULL, '06pE570Git', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(31, 'Ellie Stiedemann', 'gunner44@example.net', '$2y$10$hBm4GRmb1N0Cg53yt9JWNuKM46xt37UjqpOETfoLQjD6LUGR0mJ.i', '435-842-2767', 'Occaecati quo blanditiis placeat commodi ad iusto laborum.', 0, NULL, '4m0uh5331X', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(32, 'Leonie Rowe', 'oran.davis@example.net', '$2y$10$nZkvGMXun6VTlHa0u3Zq/e.k8.IqbUtbypF2.hjVfNnCGGFgWrOIm', '+15209491976', 'Dolores odio incidunt in soluta dolor et perspiciatis distinctio consequuntur.', 0, NULL, 'AM4VanOCsE', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(33, 'Jovan Daniel', 'lbartoletti@example.net', '$2y$10$SR1wJrRZmP5B71Aivxj6keA6mE7EQH2LVt8lMlSCxJB.cb7ykOgtq', '1-279-582-9274', 'Dolore et quo quibusdam sint hic possimus est quos nostrum possimus ut ut at.', 0, NULL, '4A7L0l3kvv', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(34, 'Cordelia Jacobson DVM', 'althea09@example.org', '$2y$10$yvAOy7BtMXx.VzLWT76M5Oi1lf8D1WcqxlHM5K8pmmr/oEJ9WbDvC', '856-802-9787', 'Omnis odio iure animi error expedita aliquam maxime modi placeat.', 0, NULL, 'iYPr2Ui7mf', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(35, 'Jena Cassin', 'jovany.jerde@example.net', '$2y$10$A6lxZDAbmgHZVLr/bfqHPeglONgJHKEsltxRCRfKubGe4v9oNoFxi', '+1-408-227-3202', 'Veniam animi quis architecto dolorem quae quia soluta saepe.', 0, NULL, 'UJLuUhFpgl', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(36, 'Javonte Gorczany', 'ratke.dana@example.com', '$2y$10$0TP1otkdHjUBA6I6gy8tiOVQaK0HNkgQMDVtIbFbZwbeG8.h64We2', '+1.774.388.9064', 'Iure accusamus ipsum et velit dicta sapiente.', 0, NULL, 'bgcNNhLHHm', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(37, 'Ashtyn Koss DVM', 'twiza@example.com', '$2y$10$FzUQ0KaJ6ukZFIMY9ZPRaeOYWxuI2Vm2UIkF6TzxXENriKc5L3EWK', '(218) 349-9400', 'Voluptatum quas hic culpa ratione est qui esse quia rerum sapiente sunt exercitationem.', 0, NULL, 'wCyhfpMPhw', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(38, 'Toni Gulgowski', 'billy.wuckert@example.com', '$2y$10$U05Jbolzp3k0sy5GC18PCuld2zThBvhQbdV9p.B1fbENS1BJ3Y1xa', '463.251.8505', 'Ullam vitae error et debitis est velit commodi consectetur.', 0, NULL, 'WhuisX1Rnb', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(39, 'Ms. Tamara Jacobs PhD', 'joannie45@example.com', '$2y$10$3vXehYCm2ApstFEU7bD3ROQXz.KLG2Zutlpj8irJfh1kq07kxd8du', '(850) 757-8974', 'Saepe provident nemo commodi ea aut unde perspiciatis nemo earum eius.', 0, NULL, 'z015rANn4q', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(40, 'Juliet O\'Hara', 'rodriguez.hanna@example.com', '$2y$10$BeySaRnrF4R1luLCqgPyvOLvoDDV8RsUx352hKrhxt6LezckRgSye', '1-541-487-5033', 'Sit non non repudiandae quisquam laborum voluptatem et minus voluptate corporis ipsam ea.', 0, NULL, 'MJbVqxAAnN', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(41, 'Prof. Kian Anderson', 'pjohnston@example.net', '$2y$10$ybIHcHh3imS/NSgyXgWSreFr9wQ2z0l6TkzENVns6RLLMqdr0o0SK', '(423) 699-7460', 'Temporibus commodi iste voluptatem tempore ut temporibus dolorum qui tenetur iure aliquid alias ullam.', 0, NULL, 'YK08AwOmSR', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(42, 'Cleta Reynolds IV', 'alessia.wilkinson@example.org', '$2y$10$BkaeeDDeo7aEHB28OddQf.hvTDvF5cfEN2VpMczyCI/GKy.OQRNfW', '1-878-627-3436', 'Temporibus dolores rerum dolorem praesentium consequuntur est et est.', 0, NULL, 'Q2yPOqdewq', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(43, 'Emmie Watsica III', 'aerdman@example.net', '$2y$10$jlEbpISDAyNWvDp8QXgj2eKbXk3c6Q1L23RuWZErP.vXOtWEHnayq', '+1.231.309.2233', 'Error aliquid possimus rerum dignissimos unde quae quas.', 0, NULL, 'W6llAixd8I', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(44, 'Cecile Langosh Jr.', 'gay.ernser@example.org', '$2y$10$475HdMeftB76dBPoavMTNO48pfyNgfWSGN06p9maiKCJqIj3PNojG', '+1.763.213.1313', 'Inventore accusantium neque aut distinctio minima provident qui at occaecati et delectus non.', 0, NULL, 'SmeUqrAF4c', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(45, 'Mr. Sheldon Sawayn', 'mosciski.rick@example.net', '$2y$10$4lw9r532.5bWJdGVduFExugCxkCuA68tIQrS.8vgeNKjPhFEFMQ/2', '820-450-5016', 'Eius quod nisi et esse aut maxime ipsa saepe alias alias sit dolore.', 0, NULL, 't9LLazBKx8', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(46, 'Mrs. Princess Weber', 'cathy.cartwright@example.org', '$2y$10$/9c326LLqVL0Ko35AF4n0eeqzH7w5asxUUYjvK6vnppjmPn785JnW', '612-519-1711', 'Ipsam sint minus corrupti adipisci repellat maxime minus magni delectus eos aut voluptatum consequatur.', 0, NULL, 'oBzzDZXcXx', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(47, 'Miss Joyce Marvin', 'cbechtelar@example.net', '$2y$10$w19iOm5903LSzEj2VPSZl.4Lj5F0DD.r08PeeqZp2SQbwKw8DpJf.', '915.668.0456', 'Voluptas assumenda voluptatem facilis doloribus ratione pariatur non omnis.', 0, NULL, 'KUtiPRHSzH', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(48, 'Mr. Garnet Steuber DVM', 'amurray@example.com', '$2y$10$uUYNUxoQFRGFf6vQl8Mugel2IImJPhvwY9rTp3AvUZvaksJJUF6qu', '+1-512-962-8790', 'Non aperiam dolorem accusantium deleniti voluptas fugiat et nam.', 0, NULL, 'n9SePbRA2j', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(49, 'Cordia Swaniawski I', 'hkerluke@example.org', '$2y$10$7E4756omelXjioeEFxFyJ.hFhtLWXoaoevjT.QEGNvHOntVcDg452', '1-225-313-7693', 'Nobis veritatis maxime voluptatem enim nulla nihil laudantium molestiae quis doloribus soluta.', 0, NULL, '2yF9ymeweO', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(50, 'Julia Harris', 'price.mercedes@example.net', '$2y$10$OupJW01fs5zoqQugDpBMyu8fpJRnLGyei8Y4j2ovNNJShqRSM8tM2', '239-820-3943', 'Nesciunt distinctio eveniet recusandae saepe labore sit.', 0, NULL, 'wHrXoGHrtI', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(51, 'Glenna Turner V', 'dromaguera@example.net', '$2y$10$BNCLikGoc6qRnh1PfYE/dO.5B0PyspMjyyJBPi/pPnid53nkXQf8u', '+1.862.581.9543', 'Incidunt quisquam non sunt deleniti quibusdam eligendi libero voluptatem excepturi.', 0, NULL, 'jxMo5NT1ew', '2022-05-24 14:18:42', '2022-05-24 14:18:42'),
(52, 'admin@lshc.com', 'admin@lshc.com', '$2y$10$Z0zVh2HG1ouMrBmVsBUjauxvSUqm0ugWz7JGUvqlLyEvBvF4ClqWK', NULL, NULL, 0, NULL, NULL, '2022-05-25 13:31:23', '2022-05-25 13:31:23'),
(53, 'Defangga Aby Vonega', 'admin@admin.com', '$2y$10$H/9XEsnmPmtz1LOyqhMVKODD3hzEUyqw8vo1hdbfQCmw7OFx4J0ty', NULL, NULL, 0, NULL, NULL, '2022-05-25 14:11:01', '2022-05-25 14:11:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=258;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
