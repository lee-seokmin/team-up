import Image from 'next/image';
import { Member } from '@/types/Member';
interface MemberCardProps {
  member: Member;
  isLeader: boolean;
  isManager: boolean;
  isExplore?: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function MemberCard({ member, isLeader, isManager, isExplore, onClick }: MemberCardProps) {
  return (
    <div
      className="bg-component-background backdrop-blur p-6 rounded-lg shadow-md
                transition-all duration-300 border border-component-border  
                hover:border-point-color-indigo-hover cursor-pointer space-y-3"
      onClick={onClick}
      style={{ isolation: 'auto' }}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <span className="w-8 h-8 relative border border-component-border bg-component-secondary-background rounded-full flex items-center justify-center mr-2 text-sm">
            {member.profileImage ? (
              <Image src={member.profileImage} alt="Profile" className="w-full h-full object-fit rounded-full" quality={100} width={32} height={32} />
            ) : (
              <p>{member.name.charAt(0)}</p>
            )}
          </span>
          <h2 className="text-xl font-bold text-text-primary transition-colors">
            {member.name}
          </h2>
        </div>
        <div className="flex flex-row gap-2 items-end">
          {!isExplore && (
            <>
              {isLeader ? (
                <div className="flex items-center bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full">
                  <span className="text-sm">프로젝트 리더</span>
            </div>
          ) : isManager ? (
            <div className="flex items-center bg-blue-500/20 text-blue-500 px-3 py-1 rounded-full">
              <span className="text-sm">관리자</span>
            </div>
          ) : (
            <div className="flex items-center bg-green-500/20 text-green-500 px-3 py-1 rounded-full">
              <span className="text-sm">멤버</span>
              </div>
            )}
          </>
          )}
          <div className="flex items-center bg-component-secondary-background px-3 py-1 rounded-full">
            <span className={`w-3 h-3 rounded-full ${member.status === "활성" ? "bg-emerald-500" :
              member.status === "자리비움" ? "bg-amber-500" : "bg-gray-500"
              } animate-pulse`} />
            <span className="ml-2 text-sm text-text-secondary">{member.status}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <span className="px-3 py-1 bg-component-secondary-background rounded-md text-sm text-text-secondary">
          {member.role}
        </span>
      </div>

      <div className="border-t border-component-border pt-3 mt-3">
        <div className="text-sm">
          <span className="text-text-secondary font-medium">전문 분야</span>
          <div className="mt-2 p-3 bg-component-secondary-background rounded-lg text-text-secondary flex gap-2">
            <p>{member.skills.length === 0 && "전문 분야가 없습니다."}</p>
            {member.skills.map((skill, idx) => (
              <p key={idx}>{skill}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
