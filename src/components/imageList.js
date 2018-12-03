import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function ImageList () {

    const images = [
        {
            id: 0,
            date: "10-01-2018",
            time: "12:00 am",
            src: "https://user.oc-static.com/files/6001_7000/6410.jpg"
        },
        {
            id: 1,
            date: "10-01-2018",
            time: "12:15 am",
            src: "https://timesofindia.indiatimes.com/thumb/msid-64580563,imgsize-215427,width-400,resizemode-4/64580563.jpg"
        },
        {
            id: 2,
            date: "10-01-2018",
            time: "12:30 am",
            src: "https://multimedia.3m.com/mws/media/877126P/17091clr-aw-commandtm-outdoor-window-hooks-application-image.jpg"
        },
        {
            id: 3,
            date: "10-01-2018",
            time: "12:45 am",
            src: "https://s.hswstatic.com/gif/kangaroo-rat-rodent-image-gallery.jpg"
        },
        {
            id: 4,
            date: "10-01-2018",
            time: "1:00 am",
            src: "http://bermangraphics.com/images/400-DSCN0340-1.jpg"
        },
        {
            id: 5,
            date: "10-01-2018",
            time: "1:15 am",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN8ZmCykphz15DZgty1xusgUSpuqHElX9TWwA05c4nJ7M-Hle8A"
        },
        {
            id: 6,
            date: "10-01-2018",
            time: "1:30 am",
            src: "http://www.jamesritson.co.uk/img/assets/cloudyskies_04.jpg"
        },
        {
            id: 7,
            date: "10-01-2018",
            time: "1:45 am",
            src: "https://s.hswstatic.com/gif/76008099computerpictures.jpg"
        },
        {
            id: 8,
            date: "10-01-2018",
            time: "2:00 am",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzj9ByNurtEb51uhBMmMrA28R8Lyk_3QM4sB7fERk_XfL9Riw0"
        },
        {
            id: 9,
            date: "10-01-2018",
            time: "2:15 am",
            src: "https://yoyoimage.com/wp-content/uploads/2017/10/1-14-26.jpg"
        },
        {
            id: 10,
            date: "10-01-2018",
            time: "2:30 am",
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD63EGjcpibK-QBcA3zDWJf3kIAx8Hu5yCJo1nH7zHs4dVXmW"
        },
        {
            id: 11,
            date: "10-01-2018",
            time: "2:45 am",
            src: "http://www.dwuser.com/education/content/creating-keyframe-animations-with-css3/images/positions.png"
        }
    ];

    enlarge = (id) => {
        console.log( 'Image with id: ' + id + ' pressed' );
    };

    save = (id) => {
        console.log( 'Image with id: ' + id + ' saved' );
    };

    const iArray = images.map( image => {

        return (
            <View key={image.id} style={styles.imageItem}>
                <Text style={styles.heading}>{image.date}  {image.time}</Text>
                    <Image
                        style={styles.image}
                        source={{uri: image.src}}
                    />
                    <TouchableOpacity onPress={ () => this.save(image.id) } style={styles.imgSave}>
                        <Ionicons
                            name="md-cloud-download" 
                            size={20} 
                            color="black" 
                        />
                    </TouchableOpacity>
                     <TouchableOpacity onPress={ () => this.enlarge(image.id) } style={styles.imgEnlarge}>
                        <Ionicons
                            name="ios-expand" 
                            size={20} 
                            color="black" 
                        />
                    </TouchableOpacity>
            </View>
        )

    });

    return (
        <ScrollView contentContainerStyles={styles.imageScrollList}>
            {iArray}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  imageScrollList: {
    width: '88%',
  },
  imageItem: {
    marginBottom: 20,
    marginLeft: 10,
    borderRadius: 5,
    position: 'relative',
    width: '100%',
    height: 150,
  },
  heading: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: 'bold',
    width: '100%',
    height: 16,
    backgroundColor: '#6180F5',
    color: '#000000',
  },
  image: {
    position: 'absolute',
    top: 14,
    left: 0,
    height: '100%',
    width: '100%',
  },
  imgEnlarge: {
    position: 'absolute',
    top: 14,
    right: 10,
    backgroundColor: 'rgba(255,255,255,.7)',
    padding: 5,
  },
  imgSave: {
    position: 'absolute',
    top: 14,
    right: 38,
    backgroundColor: 'rgba(255,255,255,.7)',
    padding: 5,
  },
});