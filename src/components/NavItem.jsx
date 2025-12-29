function NavItem({ label }) {
  return (
    <li
      className="relative cursor-pointer text-gray-700 hover:text-[#4B2E4B] transition group"
    >
      <span className="pb-2 inline-block">{label}</span>

      {/* Animated underline */}
      <span
        className={`
          absolute left-0 -bottom-1 h-[3px] w-full rounded-full
          bg-gradient-to-r from-[#4B2E4B] to-transparent
          transform origin-left
          transition-all duration-500
          scale-x-0 opacity-0
          group-hover:scale-x-100 group-hover:opacity-100
        `}
      />
    </li>
  );
}

export default NavItem;
