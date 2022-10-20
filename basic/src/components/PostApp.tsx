import React, { memo, useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useAppDispatch, useAppSelector } from '../hooks/useRedux';
import { RootState } from '../redux/config';
import { fetchPosts } from '../redux/slices/posts';

const styles = StyleSheet.create({
  block: { flex: 1 },
  list: { flex: 1 },
  loading: { flex: 1 },
  item: { padding: 8 },
  separator: { height: 1, backgroundColor: 'black' },
});

function PostApp() {
  const { data, loading } = useAppSelector(
    (state: RootState) => state.posts.posts,
  );

  const dispatch = useAppDispatch();

  const fetchData = useCallback(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView style={styles.block}>
      {data ? (
        <FlatList
          data={data}
          style={styles.list}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
          ListFooterComponent={() => (
            <View style={styles.separator} />
          )}
        />
      ) : (
        <ActivityIndicator
          size="large"
          color="black"
          style={styles.loading}
        />
      )}

      <Button
        title="새로고침"
        onPress={fetchData}
        disabled={loading}
      />
    </SafeAreaView>
  );
}

export default memo(PostApp);
