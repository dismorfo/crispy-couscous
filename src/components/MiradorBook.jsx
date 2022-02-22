import mirador from "mirador";
import { miradorImageToolsPlugin } from 'mirador-image-tools';


export default function MiradorBook(props) { 
    
    const { config, miradorImageToolsPlugin} = props;

    return ( 
        mirador.viewer(config, miradorImageToolsPlugin)
    )
}

