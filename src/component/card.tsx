import React from 'react';
import { Github, Linkedin, Twitter } from "lucide-react";

// Social icon component
interface SocialIconProps {
  platform: 'github' | 'linkedin' | 'twitter';
}

const SocialIcon: React.FC<SocialIconProps> = ({ platform }) => {
  switch (platform) {
    case 'github':
      return <Github className="w-6 h-6" />;
    case 'linkedin':
      return <Linkedin className="w-6 h-6" />;
    case 'twitter':
      return <Twitter className="w-6 h-6" />;
    default:
      return null;
  }
};

interface ProfileStats {
  totalCommits?: number;
  createdPRs?: number;
  reviewedPRs?: number;
  contributedRepos?: number;
}

export interface ProfileCardProps {
  name?: string;
  company?: string;
  role?: string;
  startDate?: string;
  avatarUrl?: string;
  stats?: ProfileStats;
  socialLinks: {
    platform: 'github' | 'linkedin' | 'twitter';
    url: string;
  }[];
  className?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  company,
  role,
  startDate,
  avatarUrl,
  stats,
  socialLinks,
  className = '',
}) => {
  return (
    <div
      className={`relative drop-shadow-xl h-72 max-w-xl w-full min-w-[36rem] overflow-hidden rounded-xl bg-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out ${className}`}
    >
      <div className="bg-gray-700 text-gray-200 p-6 rounded-lg absolute z-10 opacity-90 inset-0.5">
        <div className="flex justify-between items-center">
          <div className="space-y-4 flex-grow">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={avatarUrl || "/api/placeholder/64/64"}
                  alt={`${name}'s profile`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-cyan-500 text-xl font-semibold">
                  {name}{company ? ` @ ${company}` : ''}
                </h2>
                <p className="text-gray-400">
                  {role}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Data since {startDate}
                </p>
              </div>
            </div>

            <table className="w-full text-left">
              <tbody>
                <tr>
                  <td className="py-1 pr-4 text-neutral-100">
                    Total commits:
                  </td>
                  <td className="py-1 font-mono">{stats?.totalCommits}</td>
                </tr>
                <tr>
                  <td className="py-1 pr-4 text-neutral-100">
                    Created PRs:
                  </td>
                  <td className="py-1 font-mono">{stats?.createdPRs}</td>
                </tr>
                <tr>
                  <td className="py-1 pr-4 text-neutral-100">
                    Reviewed PRs:
                  </td>
                  <td className="py-1 font-mono">{stats?.reviewedPRs}</td>
                </tr>
                <tr>
                  <td className="py-1 pr-4 text-neutral-100">
                    Contributed repos:
                  </td>
                  <td className="py-1 font-mono">{stats?.contributedRepos}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 ml-4">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full border-4 border-gray-600" />
              <div
                className="absolute inset-0 rounded-full border-4 border-cyan-500"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                  transform: "rotate(-90deg)",
                }}
              />
              <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                <img src="https://pbs.twimg.com/profile_images/1760832404304830464/RufnghxR_400x400.jpg" alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex space-x-4">
              {socialLinks?.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="text-gray-500 hover:text-cyan-500 transition-colors"
                  aria-label={link.platform}
                >
                  <SocialIcon platform={link.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-56 h-48 bg-gray-200 blur-[50px] animate-border-move"></div>
    </div>
  );
};

export default ProfileCard;