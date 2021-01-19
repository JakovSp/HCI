import React, { useState } from 'react'
import styles from './style.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import CardBlog from '../card-blog'
import { useStaticQuery, graphql } from "gatsby"
import { myLocalStorage } from '../../helpers/local-storage'

const Blogs = () => {

    const data = useStaticQuery(graphql`
    {
      allContentfulBlogPreview {
        nodes {
          image {
            fixed(width: 300) {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
          }
          category
          title
          description
          author
          slug
        }
      }
    }
  `)

    const dataFilter = data.allContentfulBlogPreview.nodes
    myLocalStorage.removeItem("searchQuery")
    const [currentCategory, setCurrentCategory] = useState("Sve")
    const [visibleData, setVisibleData] = useState(data.allContentfulBlogPreview.nodes)
    const toggleCategory = (category) => {
        setCurrentCategory(category);
        if(category === "Sve") {
            setVisibleData(dataFilter)
        }
        else {
            const newData = dataFilter.filter((el) => el.category === category)
            setVisibleData(newData)
        }
    };

    function filterData(query) {
        const newData = dataFilter.filter((el) => el.title.toLowerCase().includes(query?.toLowerCase()))
        setVisibleData(newData)
    }

    let myMap = new Map()
    myMap.set('Pustolovine', '#cf2233')
    myMap.set('Oprema', '#2d63af')
    myMap.set('Natjecanja', '#0c8142')
    myMap.set('Preporuke', '#f26946')

    return(
    <main className={styles.container}>
        <div className={styles.control_container}>
            <div className={styles.button_control_container}>
                <a style={{ backgroundColor: (currentCategory == "Sve") ? '' : 'inherit', color: (currentCategory == "Sve") ? '' : '#B73225'}} onClick={ () => toggleCategory("Sve") }>
                    Sve
                </a>
                <a style={{ backgroundColor: (currentCategory == "Pustolovine") ? '' : 'inherit' , color: (currentCategory == "Pustolovine") ? '' : '#B73225'}} onClick={ () => toggleCategory("Pustolovine") }>
                    Pustolovine
                </a>
                <a style={{ backgroundColor: (currentCategory == "Preporuke") ? '' : 'inherit' , color: (currentCategory == "Preporuke") ? '' : '#B73225'}} onClick={ () => toggleCategory("Preporuke") }>
                    Preporuke
                </a>
                <a style={{ backgroundColor: (currentCategory == "Oprema") ? '' : 'inherit' , color: (currentCategory == "Oprema") ? '' : '#B73225'}} onClick={ () => toggleCategory("Oprema") }>
                    Oprema
                </a>
                <a style={{ backgroundColor: (currentCategory == "Natjecanja") ? '' : 'inherit' , color: (currentCategory == "Natjecanja") ? '' : '#B73225'}} onClick={ () => toggleCategory("Natjecanja") }>
                    Natjecanja
                </a>
            </div>
            <div className={styles.input_container}>
                <input type="text" placeholder="Search.." name="search" onChange={ (e) => {
                    filterData(e.target.value)
                }}/>
                <FontAwesomeIcon className={styles.input_image} icon={faSearch} color="black" />
            </div>
        </div>
        <div className={styles.blogs_container}>
            { visibleData.map(nodes => {
                return (
                    <CardBlog labelColor={myMap.get(nodes.category)} blogLabel={nodes.category} blogDestination={nodes.slug} blogImage={nodes.image.fixed} blogTitle={nodes.title} blogDesc={nodes.description} blogFooter={nodes.author + ' • ' + '5 minuta čitanja'} />
                )
            }) }
        </div>
    </main>
    )}

export default Blogs