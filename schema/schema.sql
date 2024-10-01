CREATE TABLE `Grump_Cards` (
  `ID` int(11) NOT NULL,
  `Name` varchar(500) NOT NULL,
  `Strength` decimal(5,3) NOT NULL,
  `Stamina` decimal(5,3) NOT NULL,
  `Reliability` decimal(5,3) NOT NULL,
  `Intimidation` decimal(5,3) NOT NULL,
  `Strengths` text NOT NULL,
  `Weaknesses` text NOT NULL,
  `Finishing Move` text NOT NULL,
  `HP` decimal(5,3) NOT NULL,
  `Image` varchar(500) NOT NULL,
  `AirDate` date NOT NULL,
  `EpisodeUrl` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `Grump_Cards`
  ADD PRIMARY KEY (`ID`);

ALTER TABLE `Grump_Cards`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

