-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 28, 2020 at 03:46 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `anidexv2`
--

-- --------------------------------------------------------

--
-- Table structure for table `anibase`
--

CREATE TABLE `anibase` (
  `animeid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `animename` varchar(255) NOT NULL,
  `episodes` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `anibase`
--

INSERT INTO `anibase` (`animeid`, `userid`, `animename`, `episodes`) VALUES
(7, 3, 'bleach', 3),
(10, 2, 'bleach', 2),
(16, 1, 'one piece', 1),
(18, 1, 'ouran high school host club', 1),
(32, 1, 'bleach', 1),
(34, 1, 'naruto', 1),
(40, 2, 'FMA', 2),
(41, 1, 'FMA', 0),
(46, 3, 'FMA', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'test', '$2y$10$m7QTIT6pyFXVfLD3SExeEOdViI6mg7akbYjf.WB6UP.cHh6knEksC'),
(2, 'test2', '$2y$10$wG.G10.Rjrerc2gGQJb2qOSvNAtjrNz.H9TpXFd9v8yofw.sgtPli'),
(3, 'new', '$2y$10$0nvhaw2yDREdkSlkmsR.gO1sJTNvcOfT.Wq7tBRNYVKntfXZiJyy.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anibase`
--
ALTER TABLE `anibase`
  ADD PRIMARY KEY (`animeid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anibase`
--
ALTER TABLE `anibase`
  MODIFY `animeid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
