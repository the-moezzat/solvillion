import React from "react";

type Props = React.RefAttributes<SVGPathElement> & {
    onMouseOver: (e: React.MouseEvent<SVGPathElement>) => void;
    className: string;
};

function Ajlun(props: Props) {
    return <path
        {...props}
        d="M224.2 307.9l0.8-2.2 0.2-1.3-0.5-1.9-2.6-6-1.1-3.5-0.3-3.4 2.8-13.7 1.3-3.4 1.8-2.3 2.7-1.2 3.2-0.2 4.7 0.3 4.5-1.3 5.6-3.1 3.1-0.6 5.4 0.3 3-0.4 2.2-1.4 1.3-1.8 1.3-0.9 1.3 0.6 0.8 2.9 0.9 1.8 3.7 2.9 4 5.7-4 2.2-2 0.8-2.9 2-2.9 2.9-3.1 5-1.3 3.6-0.6 3.1 0.2 2-0.4 2-1.7 1.9-12.7 5.8-7.7 8.8-4.9-1-3.1-1.3-3-3.7z"
        id="JOAJ"
        name="Ajlun"
    />;
}

export default Ajlun;