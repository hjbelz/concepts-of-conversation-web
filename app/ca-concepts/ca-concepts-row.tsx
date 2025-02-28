export interface CAConceptsOverviewRowProps {
  rowHeight: number;
  children: React.ReactNode;
}

export function CAConceptsOverviewRow({
  rowHeight,
  children,
}: CAConceptsOverviewRowProps) {
  return (
    <div className={`flex h-[${rowHeight}px] w-[1888px] flex-row gap-2`}>
      {children}
    </div>
  );
}

export interface CAConceptsOverviewTitleColumnProps {
  image: string;
  imageAltText: string;
  superText?: string;
  title: string;
  subText?: string;
}

export function CAConceptsOverviewTitleColumn({
  image,
  imageAltText,
  superText,
  title,
  subText,
}: CAConceptsOverviewTitleColumnProps) {
  return (
    <div className="flex w-[232px] flex-col items-center justify-center bg-[#F0F6FF] text-[#608DCC]">
      <img src={image} alt={imageAltText} className="mb-2 w-[160px]" />
      {superText && (
        <div className="text-center text-xl font-light">{superText}</div>
      )}
      <div className="text-2xl font-bold">{title}</div>
      {subText && (
        <div className="text-center text-xl font-light">{subText}</div>
      )}
    </div>
  );
}

export function CAConceptsOverviewRowSeparator() {
  return (
    <div className={`h-[8px] w-[1888px] bg-[#C3DCFF]`} aria-hidden="true"></div>
  );
}
