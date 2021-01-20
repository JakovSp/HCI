import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS } from "@contentful/rich-text-types"
import BackgroundImage from "gatsby-background-image"
import scrollTo from 'gatsby-plugin-smoothscroll';
import cx from 'classnames'

const BlogPost = ({ pageContext }) => {

    const { image, title, description, author, category, body } = pageContext
    const [isSticky, setIsSticky] = useState(false);

    let headings = []
    let headingsId = []

    function headingId(node) {
        const newId = node.content[0].value
        headings.push(newId)
        headingsId.push(formatId(newId))
        return formatId(newId)
    }

    function formatId(blaId) {
        return blaId.replaceAll(" ","").replace("-","")
    }

    const options = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => <h2 id={headingId(node)}>{children}</h2>
        }
    }

    useEffect(() => {
        const header = document.getElementById("myHeader");
        const sticky = header.offsetTop;

        const scrollCallBack = window.addEventListener("scroll", () => {
            if (window.pageYOffset > sticky) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
          });
          return () => {
            window.removeEventListener("scroll", scrollCallBack);
          };
    }, []);

    return (
    <main className={styles.container}>
        <BackgroundImage className={styles.image} fluid={image.fluid}/>
        <div className={styles.bla}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h4>{author + " | " + category}</h4>
        </div>
        <article className={styles.body}>
            {renderRichText(body,options)}
        </article>
        <div className={cx(styles.navigationContainer, (isSticky) ? styles.sticky : '')} id="myHeader">
            {
                headings.map( (heading,index) => {
                    return ( <a onClick={ () => scrollTo("#"+headingsId[index], 'center')}>{heading}</a> )
                })
            }
        </div>
    </main>
)}

export default BlogPost