import React, {useRef, useState} from 'react';
import {Image, StatusBar, Text, View} from 'react-native';

import styles from './styles';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {Formik} from 'formik';
import images from '../../themes/Images';
import {TodoSchema} from './schema';
import {delay} from '../../utils/customUtils';
import {useDispatch, useSelector} from 'react-redux';
import SectionList from 'react-native/Libraries/Lists/SectionList';
import {printLogs} from '../../utils/logUtils';
import CustomTextInput from '../../components/customTextInput';
import AppStyles from '../../themes/AppStyles';
import CustomButton from '../../components/CustomButton';
import CustomListingComponent from '../../components/CustomListingComponent';
import moment from 'moment';
import {addTodoTask} from '../../redux/Action/user';

const FlatListItemSeparator = () => {
  return <View style={styles.listItemSeparatorStyle} />;
};

function Todo(props) {
  const dispatch = useDispatch();
  const TODO_TASK = useSelector(state => state?.user?.todoTask);
  let newData = [
    {
      title: Object.keys(TODO_TASK)[0],
      data: TODO_TASK[Object.keys(TODO_TASK)[0]],
    },
  ];
  const [loading, setLoading] = useState(false);
  const codeRef = useRef(null);

  const renderItem = item => {
    printLogs({item});
    const {data} = item?.section || [];
    return (
      <View style={styles.sectionListItemStyle}>
        <CustomListingComponent
          containerStyle={{
            backgroundColor: AppStyles.colorSet.bgGreen,
          }}
          title={data}
          // onPressThreeDots={() => onPressThreeDots(id)}
          // loading={loading}
        />
      </View>
    );
  };

  const renderSectionHeader = section => {
    return (
      <Text style={styles.sectionHeaderStyle}>{section.section?.title} </Text>
    );
  };
  const renderFieldsContainer = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    values,
  }) => {
    return (
      <View style={styles.buttonContainer}>
        <CustomTextInput
          placeholder={'Task'}
          onChangeText={handleChange('task')}
          value={values?.task}
          inputTextStyle={{
            color: AppStyles.colorSet.white,
          }}
          placeholderTextColor={AppStyles.colorSet.white}
          onBlur={handleBlur('code')}
          errors={errors?.task}
          touched={touched?.task}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          ref={codeRef}
          onSubmitEditing={handleSubmit}
        />

        <CustomButton
          loadingColor={AppStyles.colorSet.bgGreen}
          buttonStyle={{backgroundColor: AppStyles.colorSet.bgOrange}}
          title={'ADD'}
          type="submit"
          onPress={handleSubmit}
          loading={loading}
        />
      </View>
    );
  };

  const addTask = values => {
    const {task} = values;
    const date = moment(new Date()).add('days', 8).format('DD-MMM-YYYY');
    // const date = moment(new Date()).format('DD-MMM-YYYY');
    const todoTask = {date, task};
    dispatch(addTodoTask(todoTask));
  };

  const initialValues = {
    task: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={TodoSchema}
      onSubmit={async (values, {resetForm}) => {
        setLoading(true);
        await delay(2000);
        addTask(values);
        setLoading(false);
        resetForm(initialValues);
      }}>
      {({handleChange, handleBlur, errors, touched, handleSubmit, values}) => (
        <SafeAreaView style={styles.container}>
          <StatusBar hidden />
          <Image source={images.rightOrange} style={styles.orangeStyle} />
          <Text style={styles.title}>Todo app</Text>
          {renderFieldsContainer({
            handleChange: handleChange,
            handleBlur: handleBlur,
            errors: errors,
            touched: touched,
            handleSubmit: handleSubmit,
            values: values,
          })}
          <View style={styles.listContainer}>
            <SectionList
              ItemSeparatorComponent={FlatListItemSeparator}
              sections={newData}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
              keyExtractor={(item, index) => index}
            />
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
}

export default Todo;
