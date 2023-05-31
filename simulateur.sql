-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 29, 2023 at 11:25 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `simulateur`
--

-- --------------------------------------------------------

--
-- Table structure for table `clients_credit`
--

CREATE TABLE `clients_credit` (
  `id_client` int(11) NOT NULL,
  `nom_prenom_client` varchar(255) NOT NULL,
  `numero_cin_client` varchar(55) DEFAULT NULL,
  `age_client` int(11) DEFAULT NULL,
  `date_naissance_client` date DEFAULT NULL,
  `revenu_principale_client` int(11) DEFAULT NULL,
  `telephone_client` varchar(11) DEFAULT NULL,
  `profession_client` varchar(55) DEFAULT NULL,
  `adresse_client` varchar(255) DEFAULT NULL,
  `ville_client` varchar(255) DEFAULT NULL,
  `email_client` varchar(255) DEFAULT NULL,
  `notes_client` varchar(255) DEFAULT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clients_credit`
--

INSERT INTO `clients_credit` (`id_client`, `nom_prenom_client`, `numero_cin_client`, `age_client`, `date_naissance_client`, `revenu_principale_client`, `telephone_client`, `profession_client`, `adresse_client`, `ville_client`, `email_client`, `notes_client`, `deleted`) VALUES
(1, 'adel zak', 'g72766', 28, '0000-00-00', 50000, '0613993917', 'salarié', 'kenitra', NULL, NULL, 'test', 0),
(2, 'hsqman', 'T6545', 33, '0199-05-18', 90000, '7677655', NULL, NULL, NULL, NULL, NULL, 0),
(3, 'najia kobban', 'G72766', 22, '2023-05-12', 50000, '806666612', 'Salarié', 'HHHH', 'Kenitra', 'zaki@gmail.com', NULL, 0),
(4, 'simo nb', 'G777', 55, '2023-05-11', 5000, '888', 'Salarié', 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'Kenitra', 'zakariaaadel@gmail.com', NULL, 0),
(6, 'simonbs', 'G7770', 22, '2023-05-24', 5000, '96666', 'Salarié', 'Maghrib arabi A1 NR 291 KENITRA MAROC', 'Kenitra', 'zeko.mansorii@gmail.com', NULL, 0),
(7, 'meryem ', 'G777', 22, '2023-05-10', 60000, '6666', NULL, 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'Kenitra', 'zakariaaadel@gmail.com', NULL, 0),
(8, 'HJKO', 'G77779', 222, '2023-05-11', 6889, '98808', 'Salarié', 'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH', 'Kenitra', 'zakariaaadel@gmail.com', NULL, 0),
(9, 'Hkkkk', 'G777', 22, '2023-05-05', 6000, '666', 'Salarié', NULL, 'Kenitra', NULL, NULL, 0),
(10, 'Hkkkk', 'G777', 22, '2023-05-05', 6000, '666', 'Salarié', NULL, 'Kenitra', NULL, NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `simulation_credit`
--

CREATE TABLE `simulation_credit` (
  `id_simulation` int(11) NOT NULL,
  `prix_produit_simulation` int(11) DEFAULT NULL,
  `duree_simulation` int(11) DEFAULT NULL,
  `type_taux_simulation` varchar(255) DEFAULT NULL,
  `tauxinteret_simulation` int(11) DEFAULT NULL,
  `montant_remise_simulation` int(11) DEFAULT NULL,
  `frequence_simulation` int(11) DEFAULT NULL,
  `assurance_deces_simulation` int(11) DEFAULT NULL,
  `avance_credit_simulation` int(11) DEFAULT NULL,
  `frais_dossier_simulation` int(11) DEFAULT NULL,
  `echeance_mensuelle_simulation` int(11) DEFAULT NULL,
  `assurances_simulation` int(11) DEFAULT NULL,
  `caractéristiques_simulation` varchar(255) DEFAULT NULL,
  `mensualite_simulation` int(11) DEFAULT NULL,
  `id_client` int(11) NOT NULL,
  `date_simulation` date DEFAULT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `simulation_credit`
--

INSERT INTO `simulation_credit` (`id_simulation`, `prix_produit_simulation`, `duree_simulation`, `type_taux_simulation`, `tauxinteret_simulation`, `montant_remise_simulation`, `frequence_simulation`, `assurance_deces_simulation`, `avance_credit_simulation`, `frais_dossier_simulation`, `echeance_mensuelle_simulation`, `assurances_simulation`, `caractéristiques_simulation`, `mensualite_simulation`, `id_client`, `date_simulation`, `deleted`) VALUES
(1, 500000, 100, 'variable', 7, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, 0),
(2, 1000000, 150, 'variable', 6, 50000, 12, 0, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2023-05-27', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users_credit`
--

CREATE TABLE `users_credit` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_type` enum('staff','client','animateur','admin','pointfocal') COLLATE utf8_unicode_ci DEFAULT 'client',
  `is_admin` tinyint(1) DEFAULT 0,
  `email` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `image` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` enum('active','inactive') COLLATE utf8_unicode_ci DEFAULT 'active',
  `message_checked_at` datetime DEFAULT NULL,
  `client_id` int(11) DEFAULT 0,
  `notification_checked_at` datetime DEFAULT NULL,
  `job_title` varchar(100) COLLATE utf8_unicode_ci DEFAULT 'Untitled',
  `disable_login` tinyint(1) DEFAULT 0,
  `note` mediumtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alternative_phone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `gender` enum('male','female') COLLATE utf8_unicode_ci DEFAULT 'male',
  `enable_web_notification` tinyint(1) DEFAULT 1,
  `enable_email_notification` tinyint(1) DEFAULT 1,
  `created_at` datetime DEFAULT NULL,
  `entite_id` int(11) DEFAULT NULL,
  `date_validation` datetime DEFAULT NULL,
  `deleted` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `users_credit`
--

INSERT INTO `users_credit` (`id`, `first_name`, `last_name`, `username`, `user_type`, `is_admin`, `email`, `password`, `image`, `status`, `message_checked_at`, `client_id`, `notification_checked_at`, `job_title`, `disable_login`, `note`, `address`, `phone`, `alternative_phone`, `gender`, `enable_web_notification`, `enable_email_notification`, `created_at`, `entite_id`, `date_validation`, `deleted`) VALUES
(1, 'ADMIN', 'SAKANI', 'Mr Benani', 'admin', 1, 'sakani@gmail.com', '1be7efd35d1bd287bd5b24ada752e488', NULL, 'active', NULL, 1, NULL, 'Admin', 0, NULL, NULL, NULL, NULL, 'male', 1, 1, '2021-10-12 14:26:05', 0, '2021-08-20 00:00:00', 0),
(45, 'MOHAMMEDjj', 'NABOULSIpp', NULL, 'client', 1, 'simonaboulssi@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'active', NULL, 0, '2023-03-22 11:08:41', 'Untitled', 0, NULL, NULL, NULL, NULL, 'male', 1, 1, '2022-06-16 00:00:00', NULL, NULL, 0),
(46, 'zaki', 'aadel', NULL, 'client', 0, 'zakiadel@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'active', NULL, 0, NULL, 'Untitled', 0, NULL, NULL, NULL, NULL, 'male', 1, 1, '2022-06-16 00:00:00', 2, NULL, 0),
(47, 'admin', 'vente', NULL, 'client', 0, 'adminvente@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'active', NULL, 0, NULL, 'Untitled', 0, NULL, NULL, NULL, NULL, 'male', 1, 1, '2022-06-22 00:00:00', NULL, NULL, 0),
(48, 'responsable', 'comercial', NULL, 'client', 0, 'rcomercial@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'active', NULL, 0, '2023-05-12 17:03:07', 'Untitled', 0, NULL, NULL, NULL, NULL, 'male', 1, 1, '2022-06-22 00:00:00', 1, NULL, 0),
(51, 'societe', 'merveil', NULL, 'client', 0, 'merveail@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'active', NULL, 0, '2023-05-11 13:29:08', 'Untitled', 0, NULL, NULL, NULL, NULL, 'male', 1, 1, '2022-08-01 00:00:00', 1, NULL, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clients_credit`
--
ALTER TABLE `clients_credit`
  ADD PRIMARY KEY (`id_client`);

--
-- Indexes for table `simulation_credit`
--
ALTER TABLE `simulation_credit`
  ADD PRIMARY KEY (`id_simulation`);

--
-- Indexes for table `users_credit`
--
ALTER TABLE `users_credit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_type` (`user_type`),
  ADD KEY `email` (`email`),
  ADD KEY `client_id` (`client_id`),
  ADD KEY `deleted` (`deleted`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clients_credit`
--
ALTER TABLE `clients_credit`
  MODIFY `id_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `simulation_credit`
--
ALTER TABLE `simulation_credit`
  MODIFY `id_simulation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users_credit`
--
ALTER TABLE `users_credit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
