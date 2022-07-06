<template>
    <div class="container text-center">

        <h2>Phone Page</h2>
        <router-link to="/phone/assignUser">Assign User</router-link>
        <router-view @sentData="addUser"></router-view>

    </div>
</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            users : []
        }
    },

    created() {

        this.getUsersData()

    },

    methods : {

        addUser(number , username) {

            axios.post('https://jsonplaceholder.typicode.com/users' , {

                name : 'Milad Sahebnazar',
                username : username,
                email : 'miladsahebnazar@yahoo.com',
                address : {

                    street: 'inja',
                    suite : '2',
                    city : 'esf',
                    zipcode : '1',
                    geo : {

                        lat: '3',
                        lng : '4'

                    }
                },
                phone : number,
                website : 'miladsahebnazar.com',
                company : {

                    name: 'felan',
                    catchPrashe : 'ey baba',
                    bs : 'base dige'

                }
            })
                .then((json) => {
                    
                    console.log(json)
                    // this.users = res.data
                    // this.getUsersData(res.data)

                })
                .catch(res => console.log(res))

        },

        getUsersData() {

            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {

                    this.users = res.data
                    console.log(this.users)

                })
                .catch(res => console.log(res))

        }

    }

}

</script>