import './style.css';

type BurgerIconProps = {
  open: boolean;
  onOpen: () => void;
};

function BurgerIcon({ open, onOpen }: BurgerIconProps) {
  return (
    <div onClick={onOpen} className={`burger ${open ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default BurgerIcon;
