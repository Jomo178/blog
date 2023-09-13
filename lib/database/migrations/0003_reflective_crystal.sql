RENAME TABLE `verificationToken` TO `verificationtoken`;--> statement-breakpoint
ALTER TABLE `user` MODIFY COLUMN `image` varchar(255) DEFAULT '/images/profile.webp';