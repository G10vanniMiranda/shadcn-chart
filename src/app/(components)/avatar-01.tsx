import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface AvatarProps {
    perfil_url: string;
    className?: string;
}

export function Avatar_01({ perfil_url, className }: AvatarProps) {
    return (
        <Avatar>
            <AvatarImage
                src={`https://github.com/${perfil_url}.png`}
                alt={`Perfil do usuário: ${perfil_url}`}
                className={`rounded-full ${className}`} />
            <AvatarFallback>{perfil_url}</AvatarFallback>
        </Avatar>
    )
}
