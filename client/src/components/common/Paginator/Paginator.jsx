import React, { useState } from 'react'
import styles from './Paginator.module.css'
import {Link} from 'react-router-dom'

const Paginator = ({totalCount, pageSize, portionSize=3, pageNumber, onPageChanged}) => {
let pagesCount = Math.ceil(totalCount / pageSize);
let pages = [];
for (var i = 1; i <= pagesCount; i++) {
    pages.push(i);
}
let portionCount=Math.ceil(pagesCount/portionSize)
let [portionNumber,setPortionNumber]=useState(1)
let leftPortion=(portionNumber-1)*portionSize+1;
let rightPortion=portionNumber*portionSize;
    
    return (
        <div className={styles.productsPagination}>
            {portionNumber > 1 ?
                <button onClick={() => { setPortionNumber(portionNumber -1) }}>   <li className={styles.pageItem}>
                <Link to="#"className={styles.pageLink}> <i className="fas fa-chevron-left" aria-hidden="true"></i></Link>
            </li></button>:<button>   <li className={styles.pageItem}>
                    <Link to="#"className={styles.pageLink}> <i className="fas fa-chevron-left" aria-hidden="true"></i></Link>
                </li> </button>}
                
            {pages
                .filter(p => p >= leftPortion && p <= rightPortion)
                .map((p) => 
                <li key={p} className={styles.pageItem}><Link to="#" className={pageNumber===p?styles.selectedPageLink:styles.pageLink}   onClick={(e) => { onPageChanged(p);}} >{p}</Link></li> )}

            {portionCount > portionNumber ?
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>   <li className={styles.pageItem}>
                    <Link to="#"className={styles.pageLink}> <i className="fas fa-chevron-right" aria-hidden="true"></i></Link>
                </li></button>: <button>   <li className={styles.pageItem}>
                    <Link to="#"className={styles.pageLink}> <i className="fas fa-chevron-right" aria-hidden="true"></i></Link>
                </li> </button>}


        </div>
    )
}

export default Paginator


