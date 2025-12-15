
import Logo from '../logo/Logo'

const CopyRight = () => {

  return (
     <div className="flex items-center justify-between gap-4 max-w-[var(--max-width)] mx-auto flex-col md:flex-row">    
        <Logo/>
        <p className="text-white/40">© 2025 iCanHeal. All rights reserved.</p>
        
        </div>
  )
}

export default CopyRight;