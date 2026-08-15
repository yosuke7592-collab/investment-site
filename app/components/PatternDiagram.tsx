type Props = { type: string; label: string };

const paths: Record<string, string> = {
  doubleTop: "M8 84 L24 55 L40 27 L54 58 L69 29 L83 57 L96 91",
  doubleBottom: "M8 18 L24 49 L40 81 L54 50 L69 79 L83 48 L96 16",
  headShoulders: "M7 85 L22 57 L35 37 L47 61 L59 16 L70 62 L82 38 L94 64",
  inverseHeadShoulders: "M7 18 L22 47 L35 67 L47 42 L59 88 L70 41 L82 66 L94 37",
  tripleTop: "M7 84 L21 35 L34 68 L49 34 L62 68 L77 36 L94 83",
  rounding: "M7 22 C20 35 25 76 50 82 C75 76 80 34 96 18",
  vBottom: "M8 18 L50 88 L96 17",
  flag: "M7 85 L38 18 L43 35 L83 43 L55 66 L95 9",
  pennant: "M7 86 L36 16 M39 31 L86 47 L43 64 M63 48 L96 12",
  ascendingTriangle: "M8 83 L25 56 L40 77 L58 45 L72 69 L93 25 M16 24 L95 24",
  descendingTriangle: "M8 18 L25 46 L40 23 L58 58 L72 31 L93 74 M14 76 L95 76",
  symmetricTriangle: "M8 17 L24 80 L40 30 L56 69 L72 42 L89 58 M8 17 L94 56 M8 82 L94 56",
  rectangle: "M7 48 L18 22 L31 77 L44 23 L58 76 L72 24 L86 76 L96 35",
  cupHandle: "M7 22 C16 90 62 90 73 23 C80 33 86 44 94 30",
  risingWedge: "M7 76 L24 31 L39 64 L56 22 L71 52 L92 12 M7 78 L94 42 M10 31 L94 10",
  channel: "M7 77 L24 49 L39 63 L58 31 L73 45 L95 15 M8 58 L90 6 M12 94 L97 40",
  breakout: "M7 72 L20 28 L34 70 L48 29 L62 69 L75 27 L83 70 L96 9",
  retest: "M7 72 L23 30 L39 70 L55 29 L68 67 L78 16 L85 33 L96 8",
  falseBreakout: "M7 72 L22 30 L38 70 L53 29 L68 69 L80 9 L88 40 L96 78",
  gap: "M7 76 L20 62 L33 70 L43 54 M58 30 L70 18 L83 29 L96 12",
};

const candleTypes = new Set(["pinbar", "engulfing", "inside", "doji", "stars"]);

export default function PatternDiagram({type,label}:Props){
  if(candleTypes.has(type)) return <svg className={`atlas-diagram candle-${type}`} viewBox="0 0 104 104" role="img" aria-label={`${label}の概念図`}><line x1="5" y1="88" x2="99" y2="88" className="guide"/>{[0,1,2,3,4].map(i=><g key={i} className={`candle candle-${i}`} transform={`translate(${12+i*19} 0)`}><line x1="5" y1="25" x2="5" y2="83"/><rect x="1" y="42" width="8" height="25"/></g>)}</svg>;
  return <svg className="atlas-diagram" viewBox="0 0 104 104" role="img" aria-label={`${label}の概念図`}><line x1="5" y1="88" x2="99" y2="88" className="guide"/><path d={paths[type]||paths.rectangle}/></svg>;
}
