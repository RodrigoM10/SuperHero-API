import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import './paginationCards.css'

export const PaginationCards = ({totalPages = 0, setCurrentPage, currentPage = 1}) => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
    const handleSetPage = (n) => {
      scrollToTop();
      setCurrentPage(n);
    };
    const pagination = () => {
      const pages = [];
      let count = 0;
      for (let i = currentPage - 3; i < currentPage + 5; i++) {
        const active = i === currentPage ? 'current-number' : '';
  
        if (i > 0 && i <= totalPages && count < 5) {
          pages.push(
            <li key={i}
            onClick={() => handleSetPage(i)}
            className={`pagination-number ${active}`}>
                {i}
            </li>
          );
          count++;
        }
      }
  
      return pages;
    };
    const prevNext = (n) => {
      const disabled = n === 0 || n > totalPages;
      const isPrevious = n < currentPage;
      const ariaLabel = isPrevious ? 'Previous' : 'Next';
      const arrow = isPrevious ? <AiOutlineLeft className="mb-1"  
      /> : <AiOutlineRight className="mb-1" /> ;
      const hidden = isPrevious ? 'Previous' : 'Next';
  
      return (
          <button
            onClick={() => {
              handleSetPage(n);
            }}
            className="pagination-arrow arrow-left mx-2"
            aria-label={ariaLabel}
            disabled={disabled}
          >
            <span aria-hidden="true">{arrow}</span>
            <span className="visually-hidden">{hidden}</span>
          </button>
      );
    };


    return (
        <div>
          <ul className="pagination align-items-center">
              {prevNext(currentPage - 1)}
              {pagination()}
              {prevNext(currentPage + 1)}
          </ul>
       </div>
    )
}