import React, {Component} from 'react';
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native';

import IconHome from './icon/home.png';
import IconHomeAktif from './icon/home-active.png';
import IconPesanan from './icon/order.png';
import IconBantuan from './icon/help.png';
import IconInbox from './icon/inbox.png';
import IconAkun from './icon/account.png';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          {/* search bar */}
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="Apa yang ingin anda makan?"
                style={{
                  borderWidth: 2,
                  borderColor: '#E8E8E8',
                  marginRight: 18,
                  borderRadius: 25,
                  height: 40,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                }}
              />
              <Image
                source={require('./icon/search.png')}
                style={{position: 'absolute', top: 5, left: 12}}
              />
            </View>

            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>

          {/* gopay */}
          <View style={{marginHorizontal: 17, marginTop: 10}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2c5fb8',
                borderTopRightRadius: 4,
                borderTopLeftRadius: 4,
                padding: 14,
              }}>
              <Image source={require('./icon/gopay.png')} />
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                Rp. 50.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 15,
                backgroundColor: '#2f65bd',
                borderBottomRightRadius: 4,
                borderBottomLeftRadius: 4,
              }}>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/pay.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 10,
                  }}>
                  Bayar
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/nearby.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 10,
                  }}>
                  Disekitar
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/topup.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 10,
                  }}>
                  Top Up
                </Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <Image source={require('./icon/more.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 10,
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>

          {/* Feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 18}}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
                marginBottom: 10,
              }}>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-food.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-FOOD
                </Text>
              </View>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-send.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-SEND
                </Text>
              </View>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-ride.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-RIDE
                </Text>
              </View>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-car.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-CAR
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                width: '100%',
              }}>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-bluebird.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-BLUEBIRD
                </Text>
              </View>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-pulsa.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-PULSA
                </Text>
              </View>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-deals.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-DEALS
                </Text>
              </View>
              <View style={{alignItems: 'center', width: '25%'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 2,
                    borderColor: '#EFEFEF',
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('./icon/go-more.png')} />
                </View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 11,
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  MORE
                </Text>
              </View>
            </View>
          </View>

          {/* Separator */}
          <View
            style={{
              height: 17,
              backgroundColor: '#f2f2f2',
              marginTop: 20,
            }}></View>

          {/* News */}
          <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./src/assets/dummy/sepak-bola.jpg')}
                style={{borderRadius: 6, height: 170, width: '100%'}}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  backgroundColor: 'black',
                  opacity: 0.2,
                  borderRadius: 6,
                }}></View>
              <View
                style={{
                  height: 15,
                  width: 60,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}>
                <Image
                  source={require('./src/assets/logo/white.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                paddingTop: 16,
                paddingBottom: 20,
                borderBottomColor: '#E8E9ED',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>
                GO-NEWS
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'normal',
                  color: '#7c7c7c',
                  marginBottom: 11,
                }}>
                Dimas Drajat selamatkan pinalti, Timnas U-23 Kalahkan Brunei
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#61a756',
                  paddingHorizontal: 12,
                  paddingVertical: 11,
                  alignSelf: 'flex-end',
                  borderRadius: 5,
                }}>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  READ
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Gofood */}
          <View style={{padding: 16}}>
            <View style={{position: 'relative'}}>
              <Image
                source={require('./src/assets/dummy/food-banner.jpg')}
                style={{borderRadius: 6, height: 170, width: '100%'}}
              />
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0,
                  position: 'absolute',
                  backgroundColor: 'black',
                  opacity: 0.2,
                  borderRadius: 6,
                }}></View>
              <View
                style={{
                  height: 15,
                  width: 60,
                  position: 'absolute',
                  top: 16,
                  left: 16,
                }}>
                <Image
                  source={require('./src/assets/logo/white.png')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'contain',
                    flex: 1,
                  }}
                />
              </View>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 16,
                  paddingBottom: 16,
                }}>
                <View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 18,
                      color: 'white',
                      marginBottom: 8,
                    }}>
                    Free GO-FOOD Voucher
                  </Text>
                  <Text
                    style={{fontWeight: '400', fontSize: 12, color: 'white'}}>
                    Buruan, sebelum kehabisan!
                  </Text>
                </View>
                <View style={{flex: 1, paddingLeft: 12}}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#61a756',
                      paddingHorizontal: 12,
                      paddingVertical: 11,
                      alignSelf: 'stretch',
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 10,
                        fontWeight: 'bold',
                        color: 'white',
                        textAlign: 'center',
                      }}>
                      GET VOUCHER
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: '#E8E9ED',
                marginBottom: 20,
                marginTop: 16,
                borderBottomWidth: 1,
              }}></View>
          </View>
        </ScrollView>

        {/* navigation */}
        <View style={{height: 54, flexDirection: 'row'}}>
          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}}>
              <Image source={IconHomeAktif} />
            </View>
            <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4}}>
              Home
            </Text>
          </View>

          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}}>
              <Image source={IconPesanan} />
            </View>
            <Text style={{fontSize: 10, color: 545454, marginTop: 4}}>
              Pesanan
            </Text>
          </View>

          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}}>
              <Image source={IconBantuan} />
            </View>
            <Text style={{fontSize: 10, color: 545454, marginTop: 4}}>
              Bantuan
            </Text>
          </View>

          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}}>
              <Image source={IconInbox} />
            </View>
            <Text style={{fontSize: 10, color: 545454, marginTop: 4}}>
              Inbox
            </Text>
          </View>

          <View
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <View style={{backgroundColor: 'white', width: 26, height: 26}}>
              <Image source={IconAkun} />
            </View>
            <Text style={{fontSize: 10, color: 545454, marginTop: 4}}>
              Akun
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
