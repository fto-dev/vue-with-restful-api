<template>
    <div>
        <div >
            <h2 v-if="info" class="uk-heading-divider uk-margin-top">All Books</h2>

            <ul v-if="info" >
                <li v-for="item in info" :key="item.title">
                    <span class="w-100"> <b class="label">Id:</b> {{ item.id }} </span>
                    <span class="w-100"> <b class="label">Heading:</b> {{ item.title }} </span>
                    <span class="w-100"> <b class="label">Description:</b> {{ item.description}} </span>
                </li>
            </ul>
            <h2 class="uk-heading-divider uk-margin-top"></h2>
        </div>

        <div class="uk-container-small uk-margin-auto">
            <form class="" @submit="formSubmit">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Add Book</legend>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Book Name" v-model="bookName" >
                    </div>
                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" placeholder="Book Description" v-model="bookDescription"></textarea>
                    </div>
                </fieldset>
                <button class="uk-button-primary uk-padding-small" v-on:click="postBook(bookName,bookDescription)"> Add </button>
            </form>
        </div>

        <h2 class="uk-heading-divider uk-margin-top"></h2>

        <div class="uk-container-small uk-margin-auto">
            <form class="" @submit="formSubmit">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Select and change book</legend>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Book ID Number" v-model="bookIdChange" >
                    </div>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Book Name" v-model="bookNameChange" >
                    </div>
                    <div class="uk-margin">
                        <textarea class="uk-textarea" rows="5" placeholder="Book Description" v-model="bookDescriptionChange"></textarea>
                    </div>
                </fieldset>
                <button class="uk-button-primary uk-padding-small" v-on:click="putBook(bookIdChange, bookNameChange, bookDescriptionChange)">  Change Book Info </button>
            </form>
        </div>

        <h2 class="uk-heading-divider uk-margin-top"></h2>

        <div class="uk-container-small uk-margin-auto">
            <form class="" @submit="formSubmit">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Remove Book</legend>
                    <div class="uk-margin">
                        <input class="uk-input" type="text" placeholder="Book ID Number" v-model="bookIdDelete" >
                    </div>
                </fieldset>
                <button class="uk-button-primary uk-padding-small" v-on:click="deleteBook(bookIdDelete)"> Remove </button>
            </form>
        </div>

        <div class="uk-margin-large-bottom">

        </div>
    </div>
</template>

<script>
    import store from "storejs";

    export default {
        name: "Books",
        data() {
            /*@todo: code refactor for unnecessary variables*/
            return {
                info: [
                    { "id": 1 , "title": "book 1", "description": "book 1 description"  },
                    { "id": 2 , "title": "book 2", "description": "book 2 description"  },
                    { "id": 3 , "title": "book 3", "description": "book 3 description"  },
                ],
                bookName: '',
                bookNameChange: '',
                bookIdDelete: '',
                bookIdChange: '',
                bookDescription: '',
                bookDescriptionChange: '',
                delete: '',
            }
        },
        mounted() {
            this.storageUpdate();
        },
        created: function () {},
        methods: {
            storageUpdate: function () {
                store.set('books', this.info);
            },
            postBook: function ( bookName, bookDescription ) {
                if(bookName.length == 0 || bookDescription.length == 0){
                    alert('Please fill all fields')
                } else {
                    this.info.push({
                        "id": this.info[this.info.length - 1].id+1,
                        "title": bookName,
                        "description": bookDescription,
                    });
                    this.bookName = '';
                    this.bookDescription = '';
                    this.storageUpdate();
                }
            },
            putBook: function (bookIdChange, bookNameChange, bookDescriptionChange) {
                this.info.map((value) => {
                    if(bookIdChange == value.id){
                        if(bookNameChange || bookDescriptionChange){
                            this.bookIdChange = '';
                            alert(`${bookIdChange} changed`)
                        }
                        if(bookNameChange){
                            value.title = bookNameChange;
                            this.bookNameChange = '';
                        }
                        if(bookDescriptionChange) {
                            value.description = bookDescriptionChange;
                            this.bookDescriptionChange = '';
                        }
                    }
                })
            },
            deleteBook: function (bookIdDelete) {
                let found = false;
                if (confirm(`Are you sure want to remove item ? ${bookIdDelete}`)) {
                    this.info.map((value,index) => {
                        if(bookIdDelete == value.id){
                            this.info.splice(index, 1)
                            found = true
                        }
                    })

                    if(!found){
                        alert(`Not found id: ${bookIdDelete}`)
                    } else{
                        alert(`Removed id: ${bookIdDelete}`)
                        this.storageUpdate();
                        this.bookIdDelete = '';
                    }
                }

            },
            formSubmit: function(e){
                e.preventDefault(e);
            }
        }
    }
</script>

<style lang="less" scoped >
    .w-100 {
        width: 100%;
        display: block;
        margin-bottom: 10px;
    }

    li {
        list-style-type: none;
    }

    b{
        &.label{
            min-width: 150px;
        }
    }
</style>
