import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";
import TableHead from "./TableHead";

export default function TableView (){
 return(
 <>
 <table border="1" width="35%">
<thead>
    <TableHead/>
</thead>

    <tbody>
        <Row1 />
        <Row2/>
        <Row3 />
        <Row4 />
        <Row5 />
    </tbody>
 </table>
 </>
 );
}