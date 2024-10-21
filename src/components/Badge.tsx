
interface BadgeProps{
    children : React.ReactNode;
}


export default function Badge({children}: BadgeProps){
    return <span className='border text-sm font-medium rounded px-2 py-0.5 bg-muted text-muted-foreground'>
        {children}
    </span>
}
